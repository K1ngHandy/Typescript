import React from "react";

export default function Arrays() {
    console.log('-- Arrays --');
    // Arrays
    const names: string[] = [];
    names.push("Typer"); // no error
    console.log('Names:', names);
    // names.push(3); // error: argument of type 'number' is not assignable to parameter of type 'string'

    // readonly
    const names2: readonly string[] = [ "Typette" ];
    console.log('Names 2:', names2);
    // names2.push("Jack"); // error: property 'push' does not exist on type 'readonly string[]'

    // type inference
    const numbers = [ 1, 2, 3 ]; // inferred to type number[]
    numbers.push(4); // no error
    // numbers.push("2"); // error: argument of type 'string' is not assignable to parameter of type 'number'
    let head: number = numbers[ 0 ]; // no error
    console.log('Head:', head);
    console.log('--');

    return (
        <div className="section">
            <h2>Arrays</h2>
        </div>
    )
}