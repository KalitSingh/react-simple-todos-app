import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
  }

  onDeleteItem = itemId => {
    console.log(itemId)
    const {todoList} = this.state

    const filteredTodoList = todoList.filter(eachItem => eachItem.id !== itemId)

    // Updating the filteredList in the state
    this.setState({todoList: filteredTodoList})
  }

  render() {
    const {todoList} = this.state
    const todoListLength = todoList.length
    return (
      <>
        <div className="simpleTodosBg-container">
          <div className="simpleTodos-card">
            <h1 className="todosTitle">Simple Todos</h1>
            <ul>
              {todoListLength === 0 ? (
                <p>All Todo Deleted !!</p>
              ) : (
                todoList.map(eachItem => (
                  <TodoItem
                    todoListItem={eachItem}
                    onDeleteItem={this.onDeleteItem}
                    key={eachItem.id}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default SimpleTodos
