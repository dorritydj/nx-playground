import { useFetchTypes } from '../api/fetch';
import { Context, createContext } from 'react';
import { TypeTable } from './components/typetable';

export const TypeContext: Context<string[]> = createContext([] as string[]);

export function App() {
  const [types] = useFetchTypes();

  return types.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <TypeContext.Provider value={types}>
      <TypeTable />
    </TypeContext.Provider>
  );
}

export default App;
