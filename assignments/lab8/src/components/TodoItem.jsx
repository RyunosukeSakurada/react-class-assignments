import { useRef,useState} from "react"
import Modal from "@/components/Modal"
import {HiOutlineTrash} from 'react-icons/hi'

function TodoItem({ todoItem, deleteTodo ,updateTodo}) {

    const [editing, setEditing] = useState(false)
    const inputRef = useRef(null)


    const handleEditing = () => {
        setEditing(true)
    }

    
    const handleUpdateSubmit = () => {
        updateTodo(todoItem.id, "title", inputRef.current.value)
        setEditing(false)
    }
    
    const handleChange = () => {
        updateTodo(todoItem.id, "title", inputRef.current.value)
    }    

    return (
        <li>
            <div>
                <input
                    type="checkbox"
                    checked={todoItem.completed}
                    onChange={handleChange}
                />
                <span style={todoItem.completed ? { textDecoration: "line-through"}: null}>
                    {todoItem.title}
                </span>
                <button onClick={handleEditing}>Edit</button>
                <button onClick={() => deleteTodo(todoItem.id)}>
                    <HiOutlineTrash />
                </button>
            </div>

            {editing && (
            <Modal
                showModal={editing}
                setShowModal={setEditing}
            >
                <input 
                    ref={inputRef}
                    type="text" 
                    defaultValue={todoItem.title}
                />
                <button onClick={handleUpdateSubmit} >
                    Update
                </button>
            </Modal>)}
        </li>
    )
}

export default TodoItem