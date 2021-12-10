import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import './Table.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { IPlayer } from '../../types';
import { Players } from '../Context/Players';

interface Props {
  scoreSort: boolean;
  scoreButton: Dispatch<SetStateAction<boolean>>;
  setSelectedPlayer: Dispatch<SetStateAction<IPlayer | null>>;
}

export const Table: React.FC<Props> = (props) => {
  const [theadScroll, setTheadScroll] = useState<boolean>(false);
  const players = useContext(Players);

  const {
    scoreSort,
    scoreButton,
    setSelectedPlayer,
  } = props;

  const changeTheadBoxShadow = () => {
    if (window.scrollY >= 80) {
      setTheadScroll(true);
    } else {
      setTheadScroll(false);
    }
  };

  window.addEventListener('scroll', changeTheadBoxShadow);

  return (
    <table className="table table-borderless">
      <thead
        className={classNames(
          'table__thead',
          { 'table__thead--scroll': theadScroll },
        )}
      >
        <tr className="table__up-tr">
          <th
            style={{ paddingLeft: '84px' }}
            scope="col"
            className="table__th table__th-name"
            colSpan={2}
          >
            Player’s name
          </th>

          <th
            scope="col"
            className="table__th"
            style={{ paddingRight: '28px' }}
          >
            <button
              type="button"
              className="table__th-button"
              onClick={() => scoreButton(!scoreSort)}
            >
              <div className="table__th-button-area">
                <span
                  className={classNames(
                    'table__arrow',
                    { 'table__arrow--bottom': !scoreSort },
                  )}
                />
                Score
              </div>
            </button>
          </th>
        </tr>
      </thead>

      <tbody className="table__tbody">
        {players.map((player) => (
          <Link
            to={`/player/${player.name}`}
            onClick={() => setSelectedPlayer(player)}
            className="table__tr"
            key={player.name}
          >
            <td className="table__player" colSpan={2}>
              <img
                src={player.avatar}
                alt="person face"
                className="table__person-avatar"
              />
              <span className="table__name">{player.name}</span>
            </td>

            <td style={{ verticalAlign: 'middle' }} className="table__score">
              <span className="table__score-number">{player.score}</span>
            </td>
          </Link>
        ))}
      </tbody>
    </table>
  );
};
