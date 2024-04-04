import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import ActionBar from './components/ActionBar';
import CreateModal from './components/CreateModal';

function App() {
  const [data, setData] = useState(initialData);

  const addItem = (item) => {
    setData([...data, item]);
  };

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const searchItem = (query) => {
    if (!query) {
      setData(data);
      return;
    }
    setData(data.filter((item) => item.name.includes(query)));
  };

  return (
    <div className="App">
      <ActionBar />
      <SearchBar onSearchItem={searchItem} />
      <List data={data} onRemoveItem={(id) => removeItem(id)}/>
      <CreateModal onAddItem={addItem} />
    </div>
  );
}

export const initialData = [
  {id: 1, name: 'Task 1'},
  {id: 2, name: 'Task 2'},
  {id: 3, name: 'Task 3'},
  {id: 4, name: 'Task 4'},
  {id: 5, name: 'Task 5'},
  {id: 6, name: 'Task 6'},
];



export default App;
