import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stat from "./Stat.jsx"

function App() {
  const [count, setCount] = useState(0) // Vite placeholder
  const [stats, setStats] = useState([]) // List of objects containing data for Stat components
  /*
    Format for objects for stats state: 
    {
      name: "Example",
      value: "42",
      isNumeric: True,
      id: 0
    }
  */

  const nextStatId = useRef(0) //generates new sequential numeric ids for stat objects

  // Adds a new object to stats representing a 'blank' Stat component
  const addNewStat = () => {
    setStats(prevStats => [
      ...prevStats,
      {
        name: "Name",
        value: "Value",
        isNumeric: true,
        id: nextStatId.current++
      }
    ])
  }

  return (
    <div>
      <p>
        placeholder text, work in progress
      </p>
      {
        // if there is a list of stat components, render them
        stats ?
        (stats.map(s =>
          <Stat 
            name={s.name}
            value={s.value}
            isNumeric={s.isNumeric}
            id={s.id}
          />
        ))
        : null
      }
      <Stat />
      <br />
      <Stat />
      <button onClick={() => addNewStat()}>+</button>
    </div>

    // <> Vite placeholder code
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
