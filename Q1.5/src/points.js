
import React from "react";

export function Points(props) {

    const {data, xScale, yScale, height, width, selectedStation, mouseEnter, mouseOut} = props;

    //complete the getColor and getRadius when you are asked to
    const getColor = (selectedStation, station) => {
        if (selectedStation === station){
            return "red";
        } else {
            return "steelblue";
        }
    }
    const getRadius = (selectedStation, station) => {
        if (selectedStation === station) {
            return 10;
        } else {
            return 5;
        }
    }

    if (selectedStation === null) {
        return <g>
            {data.map(d => {
                return <circle key={d.station} cx={xScale(d.tripdurationS)} 
                cy={yScale(d.tripdurationE)} r={5} fill={"steelblue"} stroke={"black"}
                onMouseEnter={() => mouseEnter(d)} onMouseOut={mouseOut}/>
            })}
        </g>
    } else {
        return <g>
            {data.map(d => {
                return <circle key={d.station} cx={xScale(d.tripdurationS)} 
                cy={yScale(d.tripdurationE)} r={5} fill={"steelblue"} stroke={"black"}
                onMouseEnter={() => mouseEnter(d)} onMouseOut={mouseOut}/>
            })}
            <rect x={0} y={0} width={width} height={height} fill={"yellow"} opacity={0.5}/>
            {data.filter(d => d.station === selectedStation.station).map( d => {
                return <circle key={d.station} cx={xScale(d.tripdurationS)} 
                cy={yScale(d.tripdurationE)} r={getRadius(selectedStation, d)} fill={getColor(selectedStation, d)} stroke={"black"}
                onMouseEnter={()=>{mouseEnter(d)}} onMouseOut={mouseOut}/>
            })}
        </g>}
}