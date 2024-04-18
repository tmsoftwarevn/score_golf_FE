import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./page/home bangdiem/Home";
import BandiemCon from "./component/bangdiemcon/Bangdiemcon";
import Login from "./page/login/Login";
import LayoutAdmin from "./page/admin/Layout/LayoutAdmin";
import GameGiai from "./page/admin/game/Game";

import NhapDiem from "./component/bangdiemcon/NhapDiem";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/con",
      element: <BandiemCon />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <LayoutAdmin />,
      children: [
        {
          path: "game",
          element: <GameGiai />,
        },
      ],
    },
    {
      path: "/input",
      element: <NhapDiem />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
