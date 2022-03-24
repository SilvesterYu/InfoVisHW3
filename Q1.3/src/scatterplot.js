import React from "react";
import { max } from 'd3';
import { Scales } from "./scale";
import { Points } from "./points";
import { XAxis, YAxis } from "./axes";


export function ScatterPlot(props){

    // -- Task1 -- //
    // scatterplot's properties
    // offsetX&Y: horizontal and vertical offset of the scatterplot, equal to margin.left and margin.top respectively
    // height&width: height and width of the scatter plot
    // data: monthly data
    const{data, offsetX, offsetY, height, width} = props;

    // create xScale&yScale
    const xScale = Scales.linear(0, max(data, d => d.tripdurationS), 0, width);
    const yScale = Scales.linear(0, max(data, d => d.tripdurationE), height, 0);
    
    // translate according to offsets, draw axes and points
    // XAxis, YAxis has capital starting letters.
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
          <XAxis chartType={"scatter"} xScale={xScale} height={height} width={width} axisLable={"Trip duration end in"} />
          <YAxis yScale={yScale} height={height} axisLable={"Trip duration start from"}/>
          <Points data={data} xScale={xScale} yScale={yScale} />
        </g>
    
}