import { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext(null);

const SearchDispatchContext = createContext(null);

export function SearchProvider({ children }) {
    const [search, dispatch] = useReducer(
    searchReducer,
    initialSearch
  );

  return (
    <SearchContext.Provider value={search}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

export function useSearchDispatch() {
  return useContext(SearchDispatchContext);
}

function searchReducer(search, action) {
  switch (action.type) {
    case 'search': {
      return action.query;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const initialSearch = ''
