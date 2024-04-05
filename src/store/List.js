import { createContext, useContext, useReducer } from 'react';


const ListContext = createContext(null);

const ListDispatchContext = createContext(null);

export function ListProvider({ children }) {
    const [list, dispatch] = useReducer(
    listReducer,
    initialList
  );

  return (
    <ListContext.Provider value={list}>
      <ListDispatchContext.Provider value={dispatch}>
        {children}
      </ListDispatchContext.Provider>
    </ListContext.Provider>
  );
}

export function useList() {
  return useContext(ListContext);
}

export function useListDispatch() {
  return useContext(ListDispatchContext);
}

function listReducer(list, action) {
  switch (action.type) {
    case 'added': {
      return [...list, action.item];
    }
    case 'removed': {
      return list.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const initialList = [
    {id: 1, name: 'Task 1', status: 'NEW'},
    {id: 2, name: 'Task 2', status: 'NEW'},
    {id: 3, name: 'Task 3', status: 'NEW'},
    {id: 4, name: 'Task 4', status: 'NEW'},
    {id: 5, name: 'Task 5', status: 'NEW'},
    {id: 6, name: 'Task 6', status: 'NEW'},
];

