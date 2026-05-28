import { BrowserRouter, Routes, Route }
from "react-router-dom";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import Squad from "./pages/Squad";
import Schedule from "./pages/Schedule";
import News from "./pages/News";
import Poll from "./pages/Poll";
import Login from "./pages/Login";

import ProtectedRoute
from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* PROTECTED ROUTES */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/stats" element={<Stats />} />

        <Route
          path="/squad"
          element={
            <ProtectedRoute>
              <Squad />
            </ProtectedRoute>
          }
        />

        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          }
        />

        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          }
        />

        <Route
          path="/poll"
          element={
            <ProtectedRoute>
              <Poll />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;