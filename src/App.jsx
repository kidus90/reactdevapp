import './App.css'
import List from './components/List'
// import Search from './components/search'
import SearchBar from './components/search'

const list=[
  {
    title: "React",
    url: "https://react.dev/",
    author: "Jordan Walke",
    num_commernts: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov",
    num_commernts: 2,
    points: 5,
    objectID: 1,
  }
];
function App() {

  const numbers = [1, 2, 3, 4, 5]

  const exponentialNumbers = numbers.map ((number) => {
    return number * number + " "
  })
  console.log(exponentialNumbers)
  return (
    <>
      <SearchBar list={list} />
      <List items={list} />
    </>
  );
}

export default App
