import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import MangaPage from "./pages/MangaPage";
import ManhuaPage from "./pages/ManhuaPage";
import ManhwaPage from "./pages/ManhwaPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manga"
          element={
            <ProtectedRoute>
              <MangaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manhua"
          element={
            <ProtectedRoute>
              <ManhuaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manhwa"
          element={
            <ProtectedRoute>
              <ManhwaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
