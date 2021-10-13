export type TodosContextState = {
    todos: string[];
    addTodo: (name: string) => void;
    deleteTodo:(index:number) =>void;
    editTodo:(index:number)=>void
  };