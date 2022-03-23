import React from "react";
import { max } from "d3";
import { map } from "d3";
import { XAxis, YAxis } from "./axes";
import { Scales } from "./scale";
import { Bars } from './bars';

export function BarChart (props) {

    // -- Task 1.2 -- //
    const{data, offsetX, offsetY, height, width} = props;

    console.log("/-----------/");
    console.log(data);
    console.log(data.start);
    console.log("//----------//");
    
    const xScale = Scales.band(data.map(d => `${d.station}`), 0, width);
    console.log("+++++");
    console.log(data.map(d => `${d.station}`));
    console.log(xScale.domain());
    console.log("++++++");
    const yScale = Scales.linear(0, max(data, d => d.start), height/2, 0);
    return <g transform={`translate(${offsetX}, ${height/2+2*offsetY})`}>
        <Bars data={data} xScale={xScale} yScale={yScale} height={height/2}/>
        <YAxis yScale={yScale} height={height/2} axisLable={"Bikers star from"}/>
        <XAxis chartType="bar" xScale={xScale} height={height} width={width} axisLable={map(data, d => d.station)}/>
    </g>
}