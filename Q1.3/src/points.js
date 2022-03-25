
import React from "react";
import { Tooltip } from "./tooltip";

export function Points(props) {

    const {data, xScale, yScale, height, width} = props;
    const [selectedPoint, setSelectedPoint] = React.useState(null);
    const [tooltipX, setTooltipX] = React.useState(null);
    const [tooltipY, setTooltipY] = React.useState(null);

    const mouseEnter = (d) => {
        setSelectedPoint(d);
    };
    const mouseOut = () => {
        setSelectedPoint(null);
    };

    //complete the getColor and getRadius when you are asked to
    const getColor = (selectedPoint, d) => {
        if (selectedPoint === d){
            return "red";
        } else {
            return "steelblue";
        }
    }
    const getRadius = (selectedPoint, d) => {
        if (selectedPoint === d) {
            return 10;
        } else {
            return 5;
        }
    }

    if (selectedPoint === null) {
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
            {data.filter(d => d.station === selectedPoint.station).map( d => {
                return <circle key={d.station} cx={xScale(d.tripdurationS)} 
                cy={yScale(d.tripdurationE)} r={getRadius(selectedPoint, d)} fill={getColor(selectedPoint, d)} stroke={"black"}
                onMouseEnter={()=>{mouseEnter(d)}} onMouseOut={mouseOut}/>
            })}
        <Tooltip d={selectedPoint} left={tooltipX} top={tooltipY}/>
        </g>}
}