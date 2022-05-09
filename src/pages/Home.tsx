import { ReactElement } from 'react';
import GameListContainer from '../components/game-list/GameList.container';
import withErrorBoundary from '../hoc/withErrorBoundary';

const Home = (): ReactElement => (
  <main>
    <GameListContainer />
  </main>
);

export default withErrorBoundary(Home);
