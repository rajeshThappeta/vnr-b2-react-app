import "./App.css";
import ManageTodos from "./components/to-do/ManageTodos";
import Users from "./components/users-context/Users";
import TodosContextProvider from "./contexts/TodosContextProvider";
import UsersContextProvider from "./contexts/UsersContextProvider";

function App() {
  return (
    <div>
      <h1 className="display-3 text-center text-info">
        Demo of Lifting State Up
      </h1>
      <div className="container">
        {/* nesting components */}
        <TodosContextProvider>
          <ManageTodos />
        </TodosContextProvider>
        <UsersContextProvider>
          <Users />
        </UsersContextProvider>
      </div>
    </div>
  );
}

export default App;
