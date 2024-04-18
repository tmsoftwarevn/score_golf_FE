
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./page/home/Home";
import BandiemCon from "./component/bangdiemcon/Bangdiemcon";


const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      
    },
    {
      path: "/con",
      element: <BandiemCon />
      
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
