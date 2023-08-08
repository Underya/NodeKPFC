import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { testTsClass } from "./test";
import { backend } from "./src/model/BackendClient"

const express = require('express')
const app = express()
//var cors = require('cors')
//app.use(cors()) 

let message = new testTsClass().GetMessage();
new backend().Recepts().then(res => console.log(res));
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