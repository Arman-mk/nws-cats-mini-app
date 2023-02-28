import React, {lazy, memo, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import AppLayout from "@src/layout/app/components/AppLayout.jsx";
import BlankPageLayout from "@src/layout/blank/components/BlankPageLayout.jsx";

const CatsPage = lazy(() => import("@pages/CatsPage"))
const LoginPage = lazy(() => import("@pages/LoginPage"))

const Routing = props => {
    return (
      <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
              <Route path="/" element={<AppLayout/>}>
                  <Route index element={<h1>HOME PAGE</h1>} />
                  <Route path="cats" element={<CatsPage/>}/>
              </Route>
              <Route element={<BlankPageLayout />}>
                  <Route path="/privacy" element={<h1>Privacy page</h1>} />
                  <Route path="/login" element={<LoginPage/>} />
              </Route>
              <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
      </Suspense>
    );
};


export default memo(Routing, () => true);