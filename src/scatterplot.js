import React from "react";
import { max } from 'd3';
import { Scales } from "./scale";
import { Points } from "./points";
import { XAxis, YAxis } from "./axes";


export function ScatterPlot(props){
    
    return <g>
            <Points />
            <YAxis axisLable={"Trip duration end in"}/>
            <XAxis axisLable={"Trip duration start from"}/>
        </g>
    
}