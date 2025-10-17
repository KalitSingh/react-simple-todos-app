import './index.css'

const TodoItem = props => {
  const {todoListItem, onDeleteItem} = props
  const {title, id} = todoListItem

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="todoItem-container">
      <p className="title">{title}</p>
      <button onClick={onDelete} type="button" className="del-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
