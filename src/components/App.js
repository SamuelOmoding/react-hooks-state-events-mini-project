import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
const [tasks, setTasks] = useState(TASKS);

const deleteTask = (taskIndex) => {
const newTasks = [...tasks];
newTasks.splice(taskIndex, 1);
setTasks(newTasks);
};

return (
<div className="App">
<h2>My tasks</h2>
<TaskList tasks={tasks} deleteTask={deleteTask} selectCategory="All" />
<CategoryFilter categories={CATEGORIES} selectCategory={selectCategory} />
<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} /> 
</div>
);

function onTaskFormSubmit(newTask) {
setTasks([... tasks, newTask]);
}

function selectCategory(category) {
}
}

export default App;