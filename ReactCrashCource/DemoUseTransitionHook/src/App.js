import './App.css';
import NAMES from  './Components/data.json'
import { useState, useTransition } from 'react'; 

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTranstition] =  useTransition()

  const changeHander = (event) => {
    setInputValue(event.target.value)
    startTranstition(() => setQuery(event.target.value))
  }

  const filteredNames = NAMES.filter(item=> {
    return item.first_name.includes(query) || item.last_name.includes(query)
  })

  return (
    <div className="App">
      <input type='text' value={inputValue} onChange={changeHander}/>
      {
        isPending && <p>Updating list...</p>
      }

      { filteredNames.map((item) => (
          <p key={item.id}>
            {item.first_name} {item.last_name}
          </p>
        ))}
    </div>
  );
}

export default App;