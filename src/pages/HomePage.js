import React, { Suspense } from "react";
import Loader from "../components/Loader";
const Banner = React.lazy(() => import("../components/Banner"));
const NavBarHome = React.lazy(() => import("../components/NavBarHome"));

const HomePage = () => {
  return (
    <div className="homePage">
      <Suspense fallback={<Loader />}>
        <Banner />
        <NavBarHome />
      </Suspense>
    </div>
  );
};

export default HomePage;
