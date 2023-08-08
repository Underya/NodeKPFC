import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { testTsClass } from "./test";


let message = new testTsClass().GetMessage();
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <Router>
        <div>
            <Routes>
                <Route path="/ts" element={<div>{message}</div>} />
                <Route path="*" element={<div>Hello World!</div>} />
            </Routes>
        </div>
    </Router>
);