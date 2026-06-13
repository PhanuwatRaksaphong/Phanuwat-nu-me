import { CreatorProfile, Skill, TimelineItem, ContactInfo } from '../types/portfolio';

export const creatorProfile: CreatorProfile = {
  name: "Phanuwat Raksaphong",
  title: "นักศึกษาชั้นปีที่ 1 วิทยาการคอมพิวเตอร์ มรภ.ศรีสะเกษ",
  subTitle: "เริ่มต้นเส้นทางการเป็นนักพัฒนาซอฟต์แวร์",
  avatarUrl: "https://cdn.discordapp.com/attachments/1209086416680779787/1515012924605730937/IMG_20260612_222003.jpg?ex=6a2d753c&is=6a2c23bc&hm=1fc854d2c0f8d55a1049180f61a861cd320ca09e6db4cc993dfe2a97cf145f9b&",
  bio: "ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 1 มหาวิทยาลัยราชภัฏศรีสะเกษ ที่กำลังสนุกกับการเรียนรู้พื้นฐานและฝึกฝนเครื่องมือต่าง ๆ เพื่อสร้างซอฟต์แวร์ที่มีประโยชน์",
  detailedIntro: "สวัสดีครับ ผม Phanuwat Raksaphong (ภานุวัฒน์ รักษาพงค์) ปัจจุบันกำลังศึกษาอยู่ชั้นปีที่ 1 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏศรีสะเกษ ผมเริ่มสนใจการเขียนโปรแกรมและกำลังอยู่ในช่วงวางพื้นฐานให้แน่น ทั้งในเรื่องของ Logic, Algorithms และการใช้เครื่องมือต่าง ๆ ในการพัฒนาซอฟต์แวร์",
  interests: [
    "พื้นฐานวิทยาการคอมพิวเตอร์",
    "การแก้ปัญหาด้วย Algorithm",
    "เครื่องมือ Developer ที่ช่วยให้ทำงานไวขึ้น",
    "การเรียนรู้ภาษาโปรแกรมใหม่ ๆ",
    "Open Source และชุมชนนักพัฒนา"
  ],
  goals: [
    "ทำเกรดในรายวิชาหลักให้ดีและเข้าใจพื้นฐานอย่างลึกซึ้ง",
    "ฝึกฝนการเขียนโปรแกรมด้วยภาษา C, Python และ Zig อย่างสม่ำเสมอ",
    "เริ่มทำโปรเจกต์ขนาดเล็กเพื่อประยุกต์ใช้ความรู้จากห้องเรียน",
    "สร้างเครือข่ายกับเพื่อนนักพัฒนาในมหาวิทยาลัยและบนโลกออนไลน์"
  ]
};

export const skillsData: Skill[] = [
  // Tools
  { name: "Git & GitHub", category: "tools", proficiency: "Advanced", icon: "GitIcon" },
  { name: "VS Code", category: "tools", proficiency: "Expert", icon: "VSCodeIcon" },

  // Programming Languages (Starting)
  { name: "Python", category: "other", proficiency: "Beginner", icon: "PythonIcon" },
  { name: "C / C++", category: "other", proficiency: "Beginner", icon: "CPPIcon" },
  { name: "Zig", category: "other", proficiency: "Beginner", icon: "ZigIcon" },

  // Platforms
  { name: "Vercel", category: "devops", proficiency: "Beginner", icon: "VercelIcon" }
];

export const timelineData: TimelineItem[] = [
  {
    id: "edu-1",
    title: "ชั้นปีที่ 1 สาขาวิทยาการคอมพิวเตอร์",
    organization: "มหาวิทยาลัยราชภัฏศรีสะเกษ",
    duration: "2569 - ปัจจุบัน",
    description: "เริ่มต้นเรียนรู้พื้นฐาน Computer Science, การคิดเชิงตรรกะ และการเขียนโปรแกรมเบื้องต้น",
    type: "education"
  },
  {
    id: "milestone-1",
    title: "เริ่มศึกษาการเขียนโปรแกรม",
    organization: "ศึกษาด้วยตัวเองและในห้องเรียน",
    duration: "2568 - 2569",
    description: "ฝึกฝนการใช้ Git, GitHub และ VS Code เป็นเครื่องมือหลัก พร้อมเริ่มเขียนภาษา C และ Python",
    type: "certification"
  }
];

export const contactInfo: ContactInfo = {
  email: "phanuwat.raksa.work@gmail.com",
  github: "https://github.com/phanuwat-nu-me",
  linkedin: "https://linkedin.com/in/phanuwat-raksaphong",
  facebook: "https://facebook.com/phanuwat.raksa",
  discord: "phanuwat#1234"
};
