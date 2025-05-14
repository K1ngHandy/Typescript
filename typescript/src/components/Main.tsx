import React from "react";
import "../styles/Main.css";
import Types from "./Types";
import Tuples from "./Tuples";
import Objects from "./Objects";
import Arrays from "./Arrays";
import Enums from "./Enums";

function Main() {
    return (
        <div className="typescript-examples">
            <h1>TypeScript Examples</h1>
            <p>Check console for output</p>

            <Types />
            <Arrays />
            <Tuples />
            <Objects />
            <Enums />
        </div>
    );
}

export default Main;