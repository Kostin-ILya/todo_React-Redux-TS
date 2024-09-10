import classNames from 'classnames'

import Checkbox from 'components/Checkbox/Checkbox'
import { Todo } from 'shared/interfaces'

import './TodoItem.scss'

interface TodoItemProps {
  item: Todo
}

function TodoItem({ item }: TodoItemProps) {
  return (
    <li className={classNames('item')}>
      <Checkbox className="item__checkbox" isChecked={item.isDone} />
      <p
        data-testid="item-value"
        className={classNames('item__value', { item__value_done: item.isDone })}
      >
        {item.value}
      </p>
      <div className="item__buttons"></div>
    </li>
  )
}

export default TodoItem
