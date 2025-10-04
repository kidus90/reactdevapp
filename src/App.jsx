import './App.css'
import List from './components/List'
import Search from './components/search'

function App() {
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

  const numbers = [1, 2, 3, 4, 5]

  const exponentialNumbers = numbers.map ((number) => {
    return number * number + " "
  })
  console.log(exponentialNumbers)
  return (
    <>
      <Search />
      <List items={list} />
    </>
  );
}8

export default App
