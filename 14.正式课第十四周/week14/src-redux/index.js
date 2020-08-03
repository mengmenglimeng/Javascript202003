import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/counter";
import Compute from "./component/compute";
import {Provider} from "react-redux";
import store from "./store/index.js.js"
ReactDOM.render(<Provider store={store}>
    <Counter></Counter>
    <Compute></Compute>
</Provider>,document.querySelector("#root"));