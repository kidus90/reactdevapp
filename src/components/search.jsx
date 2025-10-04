import React, { useState } from 'react';

// export function SearchBar({ item, list }) {
//   return (<><p>found or not </p></>);
// }

export default function Search({ list }) {
  const [searchTerm, setSearchTerm] = useState(null);
  return (<>
    <input
        type="text"
        id="search"
        placeholder="   Search..."
        style={{ border: '1px solid white', borderRadius: '9px', padding: '10px', margin: '8px 0', width: '30vw' }}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
      {searchTerm ? <SearchBar item={searchTerm} list={list} /> : null}
      </>
  );
}

