import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Payout from "./components/Payout/payout";
import Export from "./components/Export/Export";
import Visualize from "./components/Visualizing/Visualize";
const AppToRender = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  // Return the layout with Header, Sidebar, and main content
  return (
    <div className={`${darkMode ? "dark" : ""} font-quickSand`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSideBar={toggleSideBar}
      />
      <div className="flex">
        <Sidebar isSideBarOpen={isSideBarOpen} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppToRender />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/payout",
        element: <Payout />, // Assuming Payout functionality is in DashBoardData
      },
      {
        path: "/export",
        element: <Export/>, // Placeholder
      },
      {
        path: "/analytics",
        element: <Visualize />,// Placeholder
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
