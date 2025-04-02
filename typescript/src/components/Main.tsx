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

    // Arrays
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

    // Tuples
    let ourTuple: [number, boolean, string];

    // initialize tuple
    ourTuple = [5, false, 'Coder was here.'];
    // ourTuple = [false, 'Coder was here', 5]; // incorrect order throws error
    console.log('Tuple:', ourTuple);

    // readonly tuple
    let readonlyTuple: readonly [number, boolean, string];
    // initialize
    readonlyTuple = [5, true, 'Coder was here again'];
    // readonlyTuple.push('Something else'); // throws error because tuple is readonly
    console.log('Readonly Tuple:', readonlyTuple);

    // Named tuples
    const graph: [x: number, y: number] = [55.2, 41.3];
    console.log('Graph:', graph);

    // Destructuring tuples
    const graph2: [number, number] = [55.2, 41.3];
    const [s, t] = graph2;
    console.log('Graph 2:', s, t);

    // Object types
    const car: { type: string, model: string, year: number } = {
        type: "Toyota",
        model: "Corolla", 
        year: 2025
    };
    console.log('Car', car);
    // type inference
    car.type = 'Ford';
    // console.log(car.type = 2); // type 'number' is not assignable to type 'string'
    console.log('Car:', car);

    // optional properties
    const car2: { type: string, mileage?: number } = {
        // Error: property 'mileage' is missing in type '{}' but required in type '{}'
        type: 'Toyota'
    };
    car2.mileage = 2000;
    console.log('Car2:', car2);

    // index signatures, used without a defined list of properties
    const nameAgeMap: { [index: string]: number } = {};
    nameAgeMap.Jack = 25;
    // nameAgeMap.Mark = "Fifty"; // Error: type 'string' is not assignable to type 'number'
    console.log('Name-Age:', nameAgeMap);

    return (
        <>
            <h2 className="first-name">{firstName}</h2>
            <p className="number">{json}</p>
        </>
    )
}

export default Main;