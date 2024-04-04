import { useState } from 'react';

function SearchBar({ onSearchItem }) {
  const [query, setQuery] = useState('');
  const handleOnChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    onSearchItem(value);
  };

    return (
      <div className="search-bar">
        <input type="text" placeholder="Search by name..."
          value={query}
          onChange={handleOnChange}/>
      </div>
    );
}

export default SearchBar;