import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import ActionBar from './components/ActionBar';
import CreateModal from './components/CreateModal';
import { ListProvider } from './store/List'

function App() {
  const [query, setQuery] = useState('');

  return (
    <ListProvider>
      <div className="App">
        <ActionBar />
        <SearchBar onSearchItem={(q) => setQuery(q)} />
        <List query={query} />
        <CreateModal />
      </div>
    </ListProvider>
  );
}

export const initialData = [
  {id: 1, name: 'Task 1', status: 'NEW'},
  {id: 2, name: 'Task 2', status: 'NEW'},
  {id: 3, name: 'Task 3', status: 'NEW'},
  {id: 4, name: 'Task 4', status: 'NEW'},
  {id: 5, name: 'Task 5', status: 'NEW'},
  {id: 6, name: 'Task 6', status: 'NEW'},
];



export default App;
