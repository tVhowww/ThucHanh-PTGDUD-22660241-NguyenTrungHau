import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import OverviewItem from "./components/OverviewItem/OverviewItem";
import Overview from "./components/Overview/Overview";
import DetailedReport from "./components/DetailedReport/DetailedReport";
import Menu from "./components/Menu/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Layout /> */}
      {/* <OverviewItem /> */}
      {/* <Overview /> */}
      {/* <DetailedReport /> */}
      <Menu />
    </>
  );
}

export default App;
