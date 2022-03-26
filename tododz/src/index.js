import React from 'react'
import ReactDOM from 'react-dom'


const TodoTitle = () => {
  return (
    <div>
      <h1>Todo applications</h1>
    </div>
  )
}


const TodoSearch = () => {
  return (
    <div>
      <input type='text' placeholder='search' />
    </div>
  )
}


const TodoCounter = () => {
  return (
    <div>
      <p>To do: 2</p>
      <p>Done: 3</p>
    </div>
  )
}


const TodoListItem = ({ label }) => {
  return <span>{label}</span>
}


const TodoList = ({ todos }) => {
  const elements = todos.map((todo) => {
    return <li key={todo.id}><TodoListItem label={todo.label} /></li>
  })

  return (
    <div>
      <ul>
        { elements }
      </ul>
    </div>
  )
}


const App = () => {
  const todos = [
    {id: 1, label: 'Otrpavitb dz', done: false, important: false},
    {id: 2, label: 'Posmotretb stream', done: false, important: false},
    {id: 3, label: '10 push ups', done: false, important: false},
    {id: 4, label: 'DZ', done: false, important: false},
  ]

  return (
    <div>
      <TodoTitle />
      <TodoSearch />
      <TodoCounter />
      <TodoList todos={todos} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
