import React from "react";

export default function Enums() {
    console.log('-- Enums --');

    // Numeric enums
    enum CardinalDirections {
        North,
        East,
        South,
        West
    }
    let currentDirection = CardinalDirections.North;
    console.log('Current Direction:', currentDirection);
    // currentDirection = 'North'; // Error: 'North' is not assignable to type 'CardinalDirections'

    // Numberic enums initialized (auto-increment)
    enum CardinalDirectionsInit {
        North = 1,
        East,
        South,
        West
    }
    // logs 1
    console.log('Init North:', CardinalDirectionsInit.North);
    // logs 4
    console.log('Init West', CardinalDirectionsInit.West);

    // Numeric enums full initialized (unique numbers for each value)
    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
    }
    // logs 404
    console.log('Status Not Found:', StatusCodes.NotFound);
    // logs 200
    console.log('Status Success:', StatusCodes.Success);

    // String enums
    enum CardinalStrings {
        North = 'North',
        East = 'East',
        South = 'South',
        West = 'West'
    }
    // logs "North"
    console.log('String North:', CardinalStrings.North);
    // logs "West"
    console.log('String West:', CardinalStrings.West);
    console.log('--');

    return (
        <div className="section">
            <h2>Enums</h2>
        </div>
    )
}