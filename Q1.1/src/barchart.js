import React from "react";
import { max } from "d3";
import { XAxis, YAxis } from "./axes";
import { Scales } from "./scale";
import { Bars } from './bars';

export function BarChart (props) {
    
    return <g >
        <Bars />
        {/* <YAxis axisLable={"Bikers star from"}/>
        <XAxis /> */}
    </g>
}