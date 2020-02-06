import TaskList from "./pages/list";
import TaskShow from "./pages/show";

const TaskListRoute = {
  path: "/tasks",
  component: TaskList
};

const TaskShowRoute = {
  path: "/tasks/:id",
  component: TaskShow
};

export default [TaskListRoute, TaskShowRoute];
