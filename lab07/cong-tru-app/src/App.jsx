import { Provider } from "react-redux";
import "./App.css";
import CongTruReduxToolkit from "./components/CongTruReduxToolkit/CongTruReduxToolkit";
import store from "./redux-toolkit/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CongTruReduxToolkit />
      </Provider>
    </>
  );
}

export default App;
