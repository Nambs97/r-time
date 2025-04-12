// /hooks/usePomodoro.ts
import { useState, useEffect, useCallback } from 'react';
import { playSound } from '@/lib/sound';

type TimerType = 'pomodoro' | 'short-break' | 'long-break';

export const usePomodoro = () => {
  // Configurations
  const POMODORO_TIME = parseInt(process.env.NEXT_PUBLIC_POMODORO_DURATION || "1500");
  const SHORT_BREAK = parseInt(process.env.NEXT_PUBLIC_SHORT_BREAK || "300");
  const LONG_BREAK = parseInt(process.env.NEXT_PUBLIC_LONG_BREAK || "900");
  const MAX_POMODOROS = parseInt(process.env.NEXT_PUBLIC_MAX_POMODOROS || "4");

  // État
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME);
  const [isActive, setIsActive] = useState(false);
  const [timerType, setTimerType] = useState<TimerType>('pomodoro');
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [sessionStarted, setSessionStarted] = useState(false);

  // Démarrer/Arrêter le timer
  const toggleTimer = useCallback(() => {
    setIsActive(!isActive);
    if (!sessionStarted) setSessionStarted(true);
  }, [isActive, sessionStarted]);

  // Réinitialiser la session
  const resetSession = () => {
    setIsActive(false);
    setSessionStarted(false);
    setPomodoroCount(0);
    setTimerType('pomodoro');
    setTimeLeft(POMODORO_TIME);
  };

  // Gestion des cycles
  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimerCompletion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timerType]);

  const handleTimerCompletion = () => {
    playSound(); // Jouer un son (ex: /public/sounds/ding.mp3)

    if (timerType === 'pomodoro') {
      const newCount = pomodoroCount + 1;
      setPomodoroCount(newCount);

      // Long break après 4 pomodoros
      if (newCount % MAX_POMODOROS === 0) {
        setTimerType('long-break');
        setTimeLeft(LONG_BREAK);
      } else {
        setTimerType('short-break');
        setTimeLeft(SHORT_BREAK);
      }
    } else {
      // Retour au pomodoro après une pause
      setTimerType('pomodoro');
      setTimeLeft(POMODORO_TIME);
    }

    setIsActive(true); // Auto-start du prochain cycle
  };

  return {
    timeLeft,
    isActive,
    timerType,
    pomodoroCount,
    sessionStarted,
    toggleTimer,
    resetSession,
  };
};