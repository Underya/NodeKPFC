import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <Router>
        <div>
            <Routes>
                <Route path="*" element={<div>Hello World!</div>} />
            </Routes>
        </div>
    </Router>
);