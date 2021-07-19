const TodoForm = ({ text, todos, setText, setTodos, setStatus }) => {

    const handleInput = (e) => {
        setText(e.target.value)
        console.log(e.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault()
        // setTime();
        let date = new Date()
        // hour = date.getHours()
        // min = date.get
        console.log(date);
        console.log(date.getMonth());
        if(text){
            setTodos([...todos, {
                id: Math.floor(Math.random() * 1000),
                text: text,
                completed:false,
                hour: date.getHours(),
                minute: date.getMinutes(),
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear()
            }]);
            setText("");
        }else{
            
        }
        
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);

    }



    return (
        <div className="form">
            <form className="todo-form">
                <input placeholder="Enter todos..." className="todo-input" value={text} onChange={handleInput} type="text" />
                <button className="todo-btn" onClick={handleClick} type="submit"><i className="fas fa-plus-square"></i></button>
            </form>
            <div className="select">
                <select className="filter-todo" onChange={statusHandler} name="todos" id="">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </div>
    );
}

export default TodoForm;