import { Provider } from "react-redux";
import "./App.css";
import CongTruRedux from "./components/CongTruRedux/CongTruRedux";
import store from "./redux/store";

function App() {
  return (
    <>
      {/* <CongTruReducer /> */}

      <Provider store={store}>
        <CongTruRedux />
      </Provider>
    </>
  );
}

export default App;
