import React from "react";
import { max } from 'd3';
import { Scales } from "./scale";
import { Points } from "./points";
import { XAxis, YAxis } from "./axes";


export function ScatterPlot(props){

    // -- Task 1.5 lift state up -- //
    const {data, offsetX, offsetY, width, height, selectedStation, mouseEnter, mouseOut} = props;
    const xScale = Scales.linear(0, max(data, d => d.tripdurationS), 0, width);
    const yScale = Scales.linear(0, max(data, d => d.tripdurationE), height, 0);
    
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points data={data} xScale={xScale} yScale={yScale} width={width} height={height}
            selectedStation={selectedStation} mouseEnter={mouseEnter} mouseOut={mouseOut}/>
            <YAxis yScale={yScale} height={height} axisLable={"Trip duration start from"}/>
            <XAxis chartType={"scatter"} xScale={xScale} height={height} width={width} axisLable={"Trip duration end in"} />
        </g>
    
}
