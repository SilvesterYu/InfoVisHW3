import React from "react";

export function Points(props){
        
    // -- Task 1.1 -- //
    // properties of points
    const{data, xScale, yScale} = props;

    //complete the getColor and getRadius when you are asked to
    const getColor = () => {
        return 
    }
    const getRadius = () => {
        return 
    }
    
    return <g>
            {data.map(d=>{
                return <circle key={d.index} cx={xScale(d.tripdurationS)} cy={yScale(d.tripdurationE)} r={5} fill={"steelblue"} stroke={"black"}/>
            })}
    </g>

}