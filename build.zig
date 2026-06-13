const std = @import("std");

pub fn build(b: *std.Build) void {
    const build_step = b.step("build", "Run npm run build");

    // We run the Next.js build using npm. Since we are on Windows, we delegate
    // command execution through cmd.exe to ensure npm is correctly resolved on the system PATH.
    const run_npm = b.addSystemCommand(&.{ "cmd.exe", "/c", "npm run build" });
    
    // Make sure the custom build step depends on the npm build command execution
    build_step.dependOn(&run_npm.step);
    
    // Wire this up to the default install step so 'zig build' runs it
    b.getInstallStep().dependOn(build_step);
}
