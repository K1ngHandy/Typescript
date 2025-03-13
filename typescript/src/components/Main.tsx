import React from "react";

function Main() {
    // explicit type
    let firstName: string = "Steve"

    // unable to infer type; set to any
    const json = JSON.parse("37");
    console.log(typeof json);

    // setting any to disable type checking
    let str: any = true;
    str = "string" // no error as "any" type
    Math.round(str); // no error as "any" type

    return (
        <>
            <h2 className="first-name">{firstName}</h2>
            <p className="number">{json}</p>
        </>
    )
}

export default Main;