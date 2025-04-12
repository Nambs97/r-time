# R-Time ⏱️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.4+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)

A customizable Pomodoro timer built with Next.js to boost your productivity using the 25-minute focus interval technique.

![App Screenshot](/public/screenshots/app-preview.png)

## Features ✨

- 🎯 Start/stop Pomodoro sessions
- ⏲️ Automatic cycle management:
  - 25-minute focus periods
  - 5-minute short breaks
  - 15-minute long breaks after 4 Pomodoros
- 🔔 Sound notifications
- 📱 Fully responsive design
- 🌓 Light/dark mode (coming in v1.1)

## Tech Stack 🛠️

**Frontend:**
- Next.js 15.3 (App Router)
- TypeScript
- Shadcn/ui (Radix + Tailwind CSS)

**Backend:**
- Next.js API Routes (Edge Runtime)

**Infrastructure:**
- Nginx reverse proxy
- PM2 process manager
- GitHub Actions CI/CD

## Getting Started 🚀

### Prerequisites
- Node.js 18+
- npm 9+
- Git

### Installation
```bash
git clone https://github.com/Nambs97/r-time.git
cd r-time
npm install