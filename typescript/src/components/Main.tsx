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

    // arrays
    const names: string[] = [];
    names.push("Typer"); // no error
    console.log('Names:', names);
    // names.push(3); // error: argument of type 'number' is not assignable to parameter of type 'string'

    // readonly
    const names2: readonly string[] = ["Typette"];
    console.log('Names 2:', names2);
    // names2.push("Jack"); // error: property 'push' does not exist on type 'readonly string[]'

    // type inference
    const numbers = [1, 2, 3]; // inferred to type number[]
    numbers.push(4); // no error
    // numbers.push("2"); // error: argument of type 'string' is not assignable to parameter of type 'number'
    let head: number = numbers[0]; // no error
    console.log('Head:', head);

    return (
        <>
            <h2 className="first-name">{firstName}</h2>
            <p className="number">{json}</p>
        </>
    )
}

export default Main;