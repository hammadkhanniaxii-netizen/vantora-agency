# VANTORA® Digital Agency

A premium, full-stack digital agency website built with Next.js 15, TypeScript, Tailwind CSS, and Prisma.

## 🚀 Quick Start

### 1. Clone and Install
\`\`\`bash
git clone <repo-url>
cd vantora-agency
npm install
\`\`\`

### 2. Environment Setup
Copy the example environment file and fill in your PostgreSQL credentials:
\`\`\`bash
cp .env.example .env
\`\`\`

### 3. Database Initialization
Run migrations and seed the database with concept projects and articles:
\`\`\`bash
npx prisma migrate dev --name init
npx prisma db seed
\`\`\`

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (Design Tokens: Obsidian, Acid Lime, Porcelain)
- **Animation:** Framer Motion (Custom Reveal System)
- **Database:** PostgreSQL via Prisma ORM
- **Validation:** Zod
- **Icons:** Lucide React

## 📂 Project Structure

- `src/app`: Next.js App Router pages and API routes.
- `src/components`: Reusable UI and layout components.
- `src/lib`: Core utilities and content services.
- `src/config`: Centralized brand configuration.
- `prisma`: Database schema and seeding scripts.

## 📈 Performance & SEO
- **SEO:** Dynamic metadata, OpenGraph, and semantic HTML.
- **Accessibility:** WCAG 2.2 AA focus, `prefers-reduced-motion` support.
- **Performance:** Server-side rendering for content, optimized image loading.

## 📝 Deployment
The app is optimized for Vercel or any Node.js environment. Ensure the `DATABASE_URL` is set in your production environment variables.
