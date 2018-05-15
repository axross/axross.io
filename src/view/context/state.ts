import { Consumer as C, createContext } from 'react';
import State from '../../core/State';

const context = createContext<State>(null as any);

export const Provider = context.Provider;
export const Consumer = context.Consumer as C<State>;
