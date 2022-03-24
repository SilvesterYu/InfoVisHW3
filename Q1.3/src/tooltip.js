import React from "react";

export function Tooltip(props) {
    const {d, left, top} = props;
    //console.log(d);
    if (left === null) {
        return <div></div>;
    } else {
        const divStyle = {
            position: "absolute",
            textAlign: "left",
            width: "150px",
            height: "120px",
            padding: "2px",
            font: "12px sans-serif",
            background: "lightgreen",
            border: "0px",
            borderRadius: "8px",
            pointerEvents: "none",
            left: `${left+10}px`,
            top: `${top}px`
        };
        return <div style={divStyle} >
            <p>{d.station}</p>
            <p>Trip durations:</p>
            <ul> 
            <li>End in: {d.tripdurationE}</li>
            <li>Start from: {d.tripdurationS}</li>
            </ul>
            </div>
    };  
}