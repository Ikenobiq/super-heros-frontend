import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import EditeHero from "../pages/superHerosPage/SelectedHero/EditeHero";
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const SuperHerosPage = lazy(() =>
  import("../pages/superHerosPage/SuperHerosPage"),
);

const Path = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage title="main page" />} exact />
        <Route
          path="/super-heros/:id"
          element={<SuperHerosPage title="Super hero page" />}
          exact
        />
        <Route
          path="/super-heros/:id/edite"
          element={<EditeHero title="edite hero" />}
          exact
        />
      </Routes>
    </Suspense>
  );
};

export default Path;
