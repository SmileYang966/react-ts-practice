type TodoItem = {
  id : number,
  text : string,
  done : boolean
}

type AppToDos = {
  todos : TodoItem[]
}

export{
  TodoItem,
  AppToDos
}
