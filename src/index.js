import React from "react";
import ReactDOM from "react-dom";
// import Estudiantes from './components/Estudiantes';
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import AppRouters from "./routes/AppRouters";


ReactDOM.render(
  <Provider store={store}>
    <AppRouters />
  </Provider>,
  document.getElementById("root")
);
