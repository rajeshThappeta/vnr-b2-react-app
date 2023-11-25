import "./App.css";
import ManageTodos from "./components/to-do/ManageTodos";



function App() {
  return (
    <div>
      <h1 className="display-3 text-center text-info">
        Demo of Lifting State Up
      </h1>
      <div className="container">
        {/* nesting components */}
        <ManageTodos />
        </div>
    </div>
  );
}

export default App;
