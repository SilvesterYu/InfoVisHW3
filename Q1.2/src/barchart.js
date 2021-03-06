import React from "react";
import { max } from "d3";
import { XAxis, YAxis } from "./axes";
import { Scales } from "./scale";
import { Bars } from './bars';

export function BarChart (props) {
    
    // -- Task 1.2 -- //
    const{dataAll, data, offsetX, offsetY, height, width} = props;    
    const xScale = Scales.band(dataAll.map(d => `${d.station}`), 0, width);
    const yScale = Scales.linear(0, max(dataAll, d => d.start), height, 0);
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        <Bars data={data} xScale={xScale} yScale={yScale} height={height}/>
        <YAxis yScale={yScale} height={height} axisLable={"Bikers star from"}/>
        <XAxis chartType="bar" xScale={xScale} height={height} width={width} axisLable={data.map(d => `${d.station}`)}/>
    </g>
}