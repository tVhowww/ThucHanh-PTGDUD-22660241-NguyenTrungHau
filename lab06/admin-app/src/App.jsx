import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import OverviewItem from "./components/OverviewItem/OverviewItem";
import Overview from "./components/Overview/Overview";
import DetailedReport from "./components/DetailedReport/DetailedReport";
import Menu from "./components/Menu/Menu";

import useRouteElements from "./routes/useRouteElements";
import Header from "./components/Header/Header";

function App() {
  const element = useRouteElements();

  return (
    <>
      {/* <Layout /> */}
      {/* <OverviewItem /> */}
      {/* <Overview /> */}
      {/* <DetailedReport /> */}
      {/* <Header /> */}
      {/* <Menu /> */}
      {element}
    </>
  );
}

export default App;
