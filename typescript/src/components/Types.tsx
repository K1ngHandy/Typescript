import React from "react";

export default function Types() {
    console.log('-- Simple Types --');
    // explicit type
    let firstName: string = "Steve"

    // unable to infer type; set to any
    const json = JSON.parse("37");
    console.log(typeof json);
    console.log('--');

    console.log('-- Special Types --');
    // setting any to disable type checking
    let str: any = true;
    str = "string" // no error as "any" type
    Math.round(str); // no error as "any" type

    // TypeScript will prevent unknown from being used
    let w: unknown = 1;
    w = "string" // no error
    w = {
        runANonExistentMethod: () => {
            console.log("Here we go.");
        }
    } as { runANonExistentMethod: () => void }
    if (typeof w === 'object' && w !== null) {
        // run w.runANonExistentMethod(); without error when type is 'unknown'
        // casting with as
        (w as { runANonExistentMethod: Function }).runANonExistentMethod();
    }

    // type never, rarely used
    // let x: never = true; // Error: type boolean is not assignable to type 'never'

    // undefined and null
    let y: undefined = undefined;
    console.log(typeof y);
    let z: null = null;
    console.log(typeof z);
    console.log('--');

    return (
        <div className="section">
            <h2>Object Types</h2>
        </div>
    )
}