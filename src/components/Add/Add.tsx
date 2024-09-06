import { useState } from 'react'
import classNames from 'classnames'

import { Todo } from 'shared/interfaces'

import './Add.scss'

function Add() {
  const [todo, setTodo] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (todo) {
      const newTodo: Todo = {
        id: Number(new Date()),
        value: todo,
        isDone: false,
      }

      // dispatch
      setTodo('')
    }
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <input
        data-testid="add-input"
        className="add__input"
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        data-testid="add-button"
        className={classNames('add__save-button', {
          'add__save-button_active': todo,
        })}
        type="submit"
      >
        Add
      </button>
    </form>
  )
}

export default Add
