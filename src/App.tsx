import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Main pages */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;