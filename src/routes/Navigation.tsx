import { Suspense } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
// import { LazyPage, LazyPage3, LazyPage2 } from "../lazyload/pages";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loadinbg </span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route, idx) => (
                <li key={idx}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route, idx) => (
              <Route
                path={route.path}
                element={<route.Component />}
                key={idx}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
