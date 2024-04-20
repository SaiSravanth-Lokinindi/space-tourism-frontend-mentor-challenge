import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";

import Technology from "./pages/Technology/Technology";
import Crew from "./pages/Crew/Crew";
import Destination from "./pages/Destination/Destination";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/destination",
          element: <Destination />,
        },
        {
          path: "/crew",
          element: <Crew />,
        },
        {
          path: "/technology",
          element: <Technology />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
