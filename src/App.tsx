import { useEffect } from 'react';
import { useGameStore } from '@/store/gameStore';
import { Layout } from '@/components/Layout';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { GameScreen } from '@/components/GameScreen';
import { ResultScreen } from '@/components/ResultScreen';
import { AttractScreen } from '@/components/AttractScreen';

function App() {
  const { isGameActive, isGameOver, isAttractModeActive } = useGameStore();

  // Check for presentation mode
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'presentation') {
      document.body.classList.add('presentation-mode');
    }
  }, []);

  if (isAttractModeActive) {
    return <AttractScreen />;
  }

  return (
    <Layout>
      {!isGameActive && !isGameOver && <WelcomeScreen />}
      {isGameActive && !isGameOver && <GameScreen />}
      {isGameOver && <ResultScreen />}
    </Layout>
  );
}

export default App;
