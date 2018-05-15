import { Consumer as C, createContext } from 'react';
import Dependency from '../../core/Dependency';

const context = createContext<Dependency>(null as any);

export const Provider = context.Provider;
export const Consumer = context.Consumer as C<Dependency>;
