import React from "react";
import Home from "./HomePage/Component/Home";
import Notification from "./HomePage/Component/Notification";
import { Chat } from "./Chat/Chat";
import ListStudent from "./ListStudent/ListStudent";
import Chart from "./Chart/Chart";
import AddForm from "./ListStudent/Components/AddForm";
import AddFormG from "./ListGroup/Components/AddForm";
import AddFormL from "./ListClass/Components/AddForm";
import InfoStudent from "./ListStudent/Components/InfoStudent";
import ImportData from "./ListStudent/Components/ImportData";
import Profile from "./Profile/Profile";
import ChangePassword from "./Profile/ChangePassword";
import ListUser from "./ListUser/ListUser";
import ListGroup from "./ListGroup/ListGroup";
import ListClass from "./ListClass/ListClass";
import Erro from "./Erro";
import ListRole from "./ListRole/ListRole";
import AddFormR from "./ListRole/Components/AddForm";
import AddFormU from "./ListUser/Components/AddForm";
const routes = [
  {
    path: "/home/manage-user",
    exact: true,
    main: () => <ListUser />,
  },
  {
    path: "/home/manage-user/add",
    exact: true,
    main: () => <AddFormU />,
  },
  {
    path: "/home/mange-group",
    exact: true,
    main: () => <ListGroup />,
  },
  {
    path: "/home/manage-class",
    exact: true,
    main: () => <ListClass />,
  },
  {
    path: "/home/manage-student",
    exact: true,
    main: () => <ListStudent />,
  },
  {
    path: "/home/manage-role",
    exact: true,
    main: () => <ListRole />,
  },
  {
    path: "/home/manage-student/add",
    exact: true,
    main: () => <AddForm />,
  },
  {
    path: "/home/manage-group/add",
    exact: true,
    main: () => <AddFormG/>,
  }, 
  {
    path: "/home/manage-role/add",
    exact: true,
    main: () => <AddFormR/>,
  }, 
  {
    path: "/home/manage-class/add",
    exact: true,
    main: () => <AddFormL />,
  },
  {
    path: "/home/list-students/update/:id",
    exact: true,
    main: ({ match }) => <InfoStudent match={match} />,
  },
  {
    path: "/home/list-students/import-data",
    exact: true,
    main: () => <ImportData />,
  },
  {
    path: "/home/profile",
    exact: true,
    main: ({ match }) => <Profile match={match} />,
  },
  {
    path: "/home",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/home/change-password",
    exact: true,
    main: () => <ChangePassword />,
  },
  {
    path: "*",
    exact: true,
    main: () => <Erro />,
  },
  
];

export default routes;
//
