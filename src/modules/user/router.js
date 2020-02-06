// import TaskList from './pages/list'

import UserList from "./pages/list";
import UserNew from "./pages/new";
import UserShow from "./pages/show";
import UserEdit from "./pages/edit";

const UserListRout = {
  path: "/users",
  component: UserList
};

const UserNewRout = {
  path: "/users/new",
  component: UserNew
};

const UserShowRout = {
  path: "/users/show",
  component: UserShow
};

const UserEditRout = {
  path: "/users/edit",
  component: UserEdit
};

export default [UserListRout, UserNewRout, UserShowRout, UserEditRout];
