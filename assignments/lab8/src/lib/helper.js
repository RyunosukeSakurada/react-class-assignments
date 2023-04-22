export const getInitialTodos = () => {
  const temp = localStorage.getItem("todos")
  const saveTodos = JSON.parse(temp)
  return saveTodos || []
}