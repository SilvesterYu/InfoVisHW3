import React from "react";

export function Bars(props){
    // -- Task1.2 -- //
    const {data, xScale, yScale, height, selectedStation, mouseEnter, mouseOut} = props;

    //complete the getColor when you are asked to
    const getColor = (selectedStation, station) => {
        if (selectedStation === station){
            return "red";
        } else {
            return "steelblue";
        }
    }

    if (selectedStation === null) {
        return <g>
            {data.map(d=>{
                return (
                <rect key={d.station} x={xScale(d.station)} y={yScale(d.start)} 
                height={height-yScale(d.start)} width={xScale.bandwidth()} fill="steelblue" stroke={"black"}
                onMouseEnter={(event) => mouseEnter("bar", event, d)} onMouseOut={mouseOut}></rect>
                )
                })}
        </g>
    } else {
        return <g>
            {data.map(d=>{
                return (
                <rect key={d.station} x={xScale(d.station)} y={yScale(d.start)} 
                height={height-yScale(d.start)} width={xScale.bandwidth()} fill="steelblue" stroke={"black"}
                onMouseEnter={(event) => mouseEnter("bar", event, d)} onMouseOut={mouseOut}></rect>
                )
                })}
            {data.filter(d => d.station === selectedStation.station).map(d=>{
                return (
                <rect key={d.station} x={xScale(d.station)} y={yScale(d.start)} 
                height={height-yScale(d.start)} width={xScale.bandwidth()} fill={getColor(selectedStation, d)} stroke={"black"}
                onMouseEnter={(event) => mouseEnter("bar", event, d)} onMouseOut={mouseOut}></rect>
                )
                })}
            
        </g>
    }
}