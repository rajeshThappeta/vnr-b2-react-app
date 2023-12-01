import { todosContext } from "./TodosContext";
import { useState } from "react";

function TodosContextProvider({ children }) {
  //state of AddTodo component
  let [tasks, setTasks] = useState([]);
  
  return (
    <div>
      <todosContext.Provider value={[tasks, setTasks]}>
        {children}
      </todosContext.Provider>
    </div>
  );
}

export default TodosContextProvider;
