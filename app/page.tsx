// /app/(main)/session/page.tsx
import { PomodoroTimer } from '@/components/PomodoroTimer';

export default function SessionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <PomodoroTimer />
    </main>
  );
}