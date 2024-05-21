import { useState } from 'react'
import data from './data'
import List from './components/List';

const App = () => {
  const [people, setPeople] = useState(data);

  if (people.length === 0) {
    return (
      <main>
        <section className="container">
          <h3 style={{textAlign: "center"}}>No birthdays today</h3>
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople(data)}
          >
            refresh
          </button>
        </section>
      </main>
    )
  }


  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List  people={people}/>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])} 
        >
         clear all
        </button>
      </section>
    </main>
  )
}

export default App