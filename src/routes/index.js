import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Topic from "../pages/Topic";
import Answer from "../pages/Answer";
import PrivateRoutes from "../components/PrivateRoutes";
import Logout from "../pages/Logout";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "register",
        element: <Register />
      },
      
      {
        element: <PrivateRoutes/>,
        children: [
          {
            path: "quiz",
            element: <Quiz />
          },
          {
            path: "answer",
            element: <Answer />
          },
          {
            path: "topic",
            element: <Topic />
          },
          {
            path: "result",
            element: <Result />
          },
        ]
      }
    ]
  }
];