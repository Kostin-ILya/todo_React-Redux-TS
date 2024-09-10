import TodoItem from 'components/TodoItem/TodoItem'
import './TodoList.scss'

function TodoList() {
  return (
    <ul className="items">
      <TodoItem item={{ id: 1, isDone: false, value: 'Learn JavaScript' }} />
    </ul>
  )
}

export default TodoList
