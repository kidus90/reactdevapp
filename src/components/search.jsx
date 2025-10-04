export default function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      id="search"
      placeholder="    Search..."
      style={{ border: '1px solid white', borderRadius: '9px', padding: '10px', margin: '8px 0', width: '30vw' }}
    />
  );
}
