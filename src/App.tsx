import { useGameStore } from '@/store/gameStore';
import { Layout } from '@/components/Layout';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { GameScreen } from '@/components/GameScreen';
import { ResultScreen } from '@/components/ResultScreen';

function App() {
  const { isGameActive, isGameOver } = useGameStore();

  return (
    <Layout>
      {!isGameActive && !isGameOver && <WelcomeScreen />}
      {isGameActive && !isGameOver && <GameScreen />}
      {isGameOver && <ResultScreen />}
    </Layout>
  );
}

export default App;
