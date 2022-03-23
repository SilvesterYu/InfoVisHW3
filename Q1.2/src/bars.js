import React from "react";

export function Bars(props){

    // -- Task1.2 -- //
    const {data, xScale, yScale, height} = props;

    //complete the getColor when you are asked to
    const getColor = () => {
        return
    }
    
    return <g>
        {data.map(d=>{
            return (
            <rect key={d.index} x={xScale(d.station)} y={yScale(d.start)} height={height-yScale(d.start)} width={xScale.bandwidth()} fill="steelblue" stroke={"black"}></rect>
            )
            })}
    </g>
}