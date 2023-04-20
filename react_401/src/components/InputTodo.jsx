import { useState } from 'react'

function InputTodo({ addTodo }) {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    //Function to check the input value in the form when the form submission event is triggered, and add a new item to the ToDo list
    const handleSubmit = (e) => {
        //Disable the default submit behavior and prevent the page from refreshing
        e.preventDefault()
        //Check the value of the title entered in the form to ensure that it is not blank.
        if(title.trim()){
            //trim() => This remove leading and trailing whitespace (spaces, tabs, newlines) and returns the remaining portion of the string
            addTodo(title)
            //Reset the value of the title entered in the form to empty.
            setTitle('')
        } else {
            setMessage("Please write something")
        }
    }


    //Function to update the entered value when the input value in the form changes
    const handleChange = (e) => {
        setMessage('')
        setTitle(e.target.value)
    }

    
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Add todo..."
                    value={title}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <span style={{ fontSize: "0.7rem", color: "red"}}>{message}</span>
        </>
    )
}

export default InputTodo