import React from "react";

export default function Tuples() {
    console.log('-- Tuples --');
    // Tuples
    let ourTuple: [ number, boolean, string ];

    // initialize tuple
    ourTuple = [ 5, false, 'Coder was here.' ];
    // ourTuple = [false, 'Coder was here', 5]; // incorrect order throws error
    console.log('Tuple:', ourTuple);

    // readonly tuple
    let readonlyTuple: readonly [ number, boolean, string ];
    // initialize
    readonlyTuple = [ 5, true, 'Coder was here again' ];
    // readonlyTuple.push('Something else'); // throws error because tuple is readonly
    console.log('Readonly Tuple:', readonlyTuple);

    // Named tuples
    const graph: [ x: number, y: number ] = [ 55.2, 41.3 ];
    console.log('Graph:', graph);

    // Destructuring tuples
    const graph2: [ number, number ] = [ 55.2, 41.3 ];
    const [ s, t ] = graph2;
    console.log('Graph 2:', s, t);
    console.log('--');

    return (
        <div className="section">
            <h2>Tuples</h2>
        </div>
    )
}