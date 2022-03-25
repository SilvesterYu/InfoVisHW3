import React from "react";
import { max } from "d3";
import { XAxis, YAxis } from "./axes";
import { Scales } from "./scale";
import { Bars } from './bars';

export function BarChart (props) {
    
    // -- Task 1.2 -- //
    // -- Task 1.5 -- // lift state up
    const{data, offsetX, offsetY, height, width, selectedStation, mouseEnter, mouseOut} = props;    
    const xScale = Scales.band(data.map(d => `${d.station}`), 0, width);
    const yScale = Scales.linear(0, max(data, d => d.start), height, 0);
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        <Bars data={data} xScale={xScale} yScale={yScale} height={height}
        selectedStation={selectedStation} mouseEnter={mouseEnter} mouseOut={mouseOut}/>
        <YAxis yScale={yScale} height={height} axisLable={"Bikers star from"}/>
        <XAxis chartType="bar" xScale={xScale} height={height} width={width} axisLable={data.map(d => `${d.station}`)}/>
    </g>
}