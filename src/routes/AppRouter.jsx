import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Page404 from "../pages/Page404";

const AppRouter = () => {
  const routes = [{ path: "/", component: <Main />, exact: true }];

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.component}
        />
      ))}
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRouter;
