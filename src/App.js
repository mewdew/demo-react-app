import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import ActionBar from './components/ActionBar';
import CreateModal from './components/CreateModal';

function App() {
  const [data, setData] = useState(initialData);
  const [viewData, setViewData] = useState(initialData);

  const addItem = (item) => {
    setData([...data, item]);
    setViewData([...viewData, item]);
  };

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
    setViewData(viewData.filter((item) => item.id !== id));
  };

  const searchItem = (query) => {
    if (!query) {
      setViewData(data);
      return;
    }
    const currentViewData = viewData.filter((item) => (item.name.toLowerCase()).includes(query.toLowerCase()));
    setViewData(currentViewData);
  };

  return (
    <div className="App">
      <ActionBar />
      <SearchBar onSearchItem={searchItem} />
      <List data={viewData} onRemoveItem={(id) => removeItem(id)}/>
      <CreateModal onAddItem={addItem} />
    </div>
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
