import React, { useState } from 'react';

export default function List({ items }) {
  const [booleanItems, setBooleanItems] = useState(true);
  return (<>
    <ul>
      {booleanItems ?
        (items.map(item => (
          <li
          key={item.objectID}
          style={{
            listStyleType: 'none',
            margin: '8px -40px', 
            border: '1px solid white', 
            borderRadius: '4px', 
            padding: '8px', 
            width: '30vw' }}>
            {item.title}
          </li>
      ))): null
      }
    </ul>
    <div>
      <button onClick={() => setBooleanItems(!booleanItems)}>{booleanItems ? 'Hide' : 'Show'} Items</button>
    </div>
  </>);
}
