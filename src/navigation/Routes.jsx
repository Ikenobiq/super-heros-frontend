import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
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
          path="/super-heros/:nickname"
          element={<SuperHerosPage title="Super heros page" />}
          exact
        />
      </Routes>
    </Suspense>
  );
};

export default Path;
