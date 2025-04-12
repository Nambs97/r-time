// /components/PomodoroTimer.tsx
'use client';
import { usePomodoro } from '@/hooks/usePomodoro';
import { Button } from '@/components/ui/button';
import { ProgressCircle } from './ProgressCircle';

export const PomodoroTimer = () => {
  const {
    timeLeft,
    isActive,
    timerType,
    pomodoroCount,
    sessionStarted,
    toggleTimer,
    resetSession,
  } = usePomodoro();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <ProgressCircle progress={(timeLeft / (timerType === 'pomodoro' ? 25 * 60 : timerType === 'short-break' ? 5 * 60 : 15 * 60)) * 100} />
      
      <div className="text-center">
        <h2 className="text-2xl font-bold">{timerType.toUpperCase()}</h2>
        <p className="text-6xl font-mono my-4">{formatTime(timeLeft)}</p>
        <p>Pomodoros complétés: {pomodoroCount}</p>
      </div>

      <div className="flex gap-4">
        <Button onClick={toggleTimer}>
          {isActive ? 'Pause' : sessionStarted ? 'Reprendre' : 'Démarrer la session'}
        </Button>
        {sessionStarted && (
          <Button variant="destructive" onClick={resetSession}>
            Terminer la session
          </Button>
        )}
      </div>
    </div>
  );
};