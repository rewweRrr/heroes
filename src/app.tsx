import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import HeroesPage from "./pages/heroes.page.tsx";
import MatchesPage from "./pages/matches.page.tsx";
import { HEROES_URL, MATCHES_URL } from "./constants/router.constants.ts";

const router = createBrowserRouter([
  {
    path: HEROES_URL,
    element: <HeroesPage />,
  },
  {
    path: MATCHES_URL,
    element: <MatchesPage />,
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
