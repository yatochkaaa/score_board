import { createContext } from 'react';
import { IPlayer } from '../../types';

export const Players = createContext<IPlayer[]>([]);
