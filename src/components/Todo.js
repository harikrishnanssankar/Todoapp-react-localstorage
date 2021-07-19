const Todo = ({ text, hour, minute, month, year, todo, day, todos, setTodos }) => {

  let flag = 0
  let hr= hour
  let monthDate = month+1;

  if (hr > 12) {
    hr = hr - 12;
    flag = 1;
  }
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  };


  return (

    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
        <h6>{day + '/'}{(monthDate<10) ? '0' + monthDate: monthDate}{'/' + year}{' ' + hr + ':' }{(minute<10) ? '0' + minute : minute} {(flag === 1) ? "PM" : "AM"}</h6>
      </li>
      <div className="buttons">
        <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
        <button onClick={deleteHandler} className="trash-btn"> <i className="fas fa-trash"></i></button>
      </div>
    </div>
  );
}

export default Todo;
