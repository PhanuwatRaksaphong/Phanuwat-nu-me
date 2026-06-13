# Phanuwat Raksaphong - Year 1 Student Portfolio

A modern, high-performance, and responsive personal portfolio website built for **Phanuwat Raksaphong (ภาณุวัฒน์ รักษาพงษ์)**, a first-year Computer Science student. This application dynamically integrates with the GitHub API to showcase real-time repository statistics, language distributions, and contribution history.

Deployed URL: [phanwat-nu-me.vercel.app](https://phanwat-nu-me.vercel.app)

---

## 🚀 Key Features

* **Real-time GitHub Integration**: Dynamically fetches user profile statistics (followers, following, public repositories counts) and top repositories sorted by stars.
* **Interactive Dashboard**: Custom language distribution stats and an embedded contribution activity graph matching the dark theme.
* **Project Categorization**: Instantly filter projects by programming language/technology.
* **Timeline of Accomplishments**: Animated chronological view tracking education, freelancing experience, certifications, and awards.
* **Dynamic SEO Configured**: Complete sitemap generation, robots directive configurations, and optimized meta configurations for search indexing.
* **Vercel Deploy Ready**: Configured for rapid deployment with full error boundary and offline-caching fallbacks.
* **Zig Build Wrapper**: Includes a root-level `build.zig` wrapper that delegates compiling commands to Next.js.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 16 (App Router)
* **Styling**: Tailwind CSS v4 (incorporating modern CSS variables theme)
* **Animation**: Framer Motion
* **Icons**: Lucide React
* **Language**: TypeScript
* **Deployment**: Vercel

---

## 📁 Project Structure

```
├── src/
│   ├── app/                # Next.js App Router (Layouts, pages, sitemap, API)
│   ├── components/         # Reusable presentation and interactive layout components
│   ├── services/           # GitHub API fetch wrappers with server-side caching
│   ├── data/               # Local profile, experience timelines, static skills details
│   └── types/              # TypeScript interface contracts for API models
├── public/                 # Static assets (favicons, SVGs)
├── build.zig               # Zig build wrapper delegation script
├── next.config.ts          # Next.js config (enables remote pattern whitelisting)
├── package.json            # Scripts and dependency manifests
└── tsconfig.json           # TypeScript compilation configuration
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v18.x or later recommended)
* `npm` (packaged with Node.js)
* (Optional) [Zig Compiler](https://ziglang.org/) (v0.16.0-dev) if you wish to run builds using Zig.

### 2. Clone the Repository & Install Dependencies
```bash
git clone <repository-url>
cd MyWebsite
npm install
```

### 3. Environment Variables Setup
Create a `.env.local` file in the root directory and copy the contents from `.env.example`:
```bash
cp .env.example .env.local
```
Update the values:
```env
GITHUB_USERNAME=PhanuwatRaksaphong
GITHUB_TOKEN=your_optional_github_token
```
*Note: Providing a `GITHUB_TOKEN` (Personal Access Token) is highly recommended. Unauthenticated requests are limited by GitHub to 60 requests per hour, while authenticated ones allow up to 5,000 requests per hour.*

---

## 💻 Running the App

### Development Server
Run the local dev server at [http://localhost:3000](http://localhost:3000):
```bash
npm run dev
```

### Production Build
To compile the production build, you can use either the standard NPM compiler or the Zig build wrapper:

#### Option A: Standard Build (Recommended)
```bash
npm run build
```

#### Option B: Zig Build wrapper
If you have the Zig compiler installed on your PATH (or use the custom binary location), you can run:
```bash
zig build
```
This executes the compiler wrapper script which internally calls `npm run build` using system process delegates.

---

## ☁️ Vercel Deployment

This project is fully ready for deployment on Vercel:

1. Push your code to your GitHub repository.
2. Sign in to the [Vercel Dashboard](https://vercel.com).
3. Import your repository and click **Deploy**.
4. In the Project Settings, under **Environment Variables**, add the variables:
   * `GITHUB_USERNAME` = `PhanuwatRaksaphong`
   * `GITHUB_TOKEN` = `(your GitHub personal access token)`
