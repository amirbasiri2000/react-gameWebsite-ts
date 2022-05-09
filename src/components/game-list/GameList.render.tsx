import { ChangeEvent, ReactElement } from 'react';
import { Game } from '../../types';
import GameCard from '../game-card';
import GameFilter from '../game-filter';
import { List, ListItem } from './styles';

interface Props {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) =>void
}

const GameListRender = ({ err, games, onFilterChange }: Props): ReactElement => {
  if (err) {
    return <p> Unable to fetch games </p>;
  }

  if (!games?.length) {
    return <p>NO Games Available</p>;
  }

  return (
    <>
      <GameFilter onChange={onFilterChange}/>
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameListRender;
