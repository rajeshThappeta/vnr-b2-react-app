import AddTodo from "./AddTodo";
import TasksList from "./TasksList";
import TasksCount from "./TasksCount";

function ManageTodos() {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-sm-4">
          <AddTodo />
        </div>
        <div className="col-sm-4">
          <TasksList />
        </div>
        <div className="col-sm-4">
          <TasksCount />
        </div>
      </div>
    </div>
  );
}

export default ManageTodos;
