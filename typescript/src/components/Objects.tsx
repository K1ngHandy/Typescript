import React from "react";

export default function Objects() {
    console.log('-- Obj Types --');
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
    const nameAgeMap: { [ index: string ]: number } = {};
    nameAgeMap.Jack = 25;
    // nameAgeMap.Mark = "Fifty"; // Error: type 'string' is not assignable to type 'number'
    console.log('Name-Age:', nameAgeMap);
    console.log('--');

    return (
        <div className="section">
            <h2>Objects</h2>
        </div>
    )
}