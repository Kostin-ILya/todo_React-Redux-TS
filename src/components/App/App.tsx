import Header from 'components/Header/Header'
import Add from 'components/Add/Add'
import TodoList from 'components/TodoList/TodoList'
import Filter from 'components/Filter/Filter'

import './App.scss'

function App() {
  return (
    <div className="content">
      <Header />
      <Add />

      <main className="main">
        <TodoList />

        <Filter />
      </main>
    </div>
  )
}

export default App
