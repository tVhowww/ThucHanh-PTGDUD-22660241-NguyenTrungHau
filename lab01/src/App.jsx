import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      {/* <Calculator /> */}
      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Button warning>Warning</Button>
      <Button info>Info</Button>
      <Button light>Light</Button>
    </>
  );
}

export default App;
