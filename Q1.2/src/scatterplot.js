import React from "react";
import { max } from 'd3';
import { Scales } from "./scale";
import { Points } from "./points";
import { XAxis, YAxis } from "./axes";


export function ScatterPlot(props){

    const {dataAll, data, offsetX, offsetY, width, height } = props;
    const xScale = Scales.linear(0, max(dataAll, d => d.tripdurationS), 0, width);
    const yScale = Scales.linear(0, max(dataAll, d => d.tripdurationE), height, 0);
    
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points data={data} xScale={xScale} yScale={yScale} width={width} height={height}/>
            <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"}/>
            <XAxis chartType={"scatter"} xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"} />
        </g>
    
}