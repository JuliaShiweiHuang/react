import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function addTask(name) {
  alert(name);
}

// const [tasks, setTasks] = useState(props.tasks);
function App(props) {
  const taskList = props.tasks.map(task => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      {/* <form onSubmit={handleSubmit}></form> */}
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;

//   return (
//     <div className="todoapp stack-large">
//       <h1>Todo List</h1>
//       <form>
//         <h2 className="label-wrapper">
//           <label htmlFor="new-todo-input" className="label__lg">
//             What's on your mind?
//           </label>
//         </h2>
//         <input
//           type="text"
//           id="new-todo-input"
//           className="input input__lg"
//           name="text"
//           autoComplete="off"
//         />
//         <button type="submit" className="btn btn__primary btn__lg">
//           Add
//         </button>
//       </form>
//       <div className="filters btn-group stack-exception">
//         <button type="button" className="btn toggle-btn" aria-pressed="true">
//           <span className="visually-hidden">Show </span>
//           <span>all</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//         <button type="button" className="btn toggle-btn" aria-pressed="false">
//           <span className="visually-hidden">Show </span>
//           <span>Active</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//         <button type="button" className="btn toggle-btn" aria-pressed="false">
//           <span className="visually-hidden">Show </span>
//           <span>Completed</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//       </div>
//       <h2 id="list-heading">
//         3 tasks remaining
//       </h2>
//       <ul
//         role="list"
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading"
//       >
//         {taskList}
        
//         {/* <Todo name = "Eat" completed={true} id = "todo-0" />
//         <Todo name = "Sleep" completed={true} id = "todo-1" />
//         <Todo name = "Repeat" completed={true} id = "todo-2" /> */}
    
//       </ul>
//     </div>
//   );
// }


// export default App;

// Task:
// Create a todo applicagtion where people can add tasks under the task bar
// To add and remove the tasks

// 1. Using functional components (NOT CLASS COMPONENT)
