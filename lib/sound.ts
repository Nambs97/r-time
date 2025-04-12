export const playSound = (type: 'ding' | 'bell' = 'ding') => {
    if (typeof window === 'undefined') return; // Skip pendant SSR
    
    const soundMap = {
      ding: '/sounds/ding.mp3',
      bell: '/sounds/bell.mp3'
    };
  
    const audio = new Audio(soundMap[type]);
    audio.play().catch(e => console.error("Erreur de lecture :", e));
};