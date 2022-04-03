import React from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';
import { ScatterPlot } from './scatterplot';
import { BarChart } from './barchart';
import { Tooltip } from "./tooltip";

//url
const csvUrl = 'https://gist.githubusercontent.com/hogwild/3b9aa737bde61dcb4dfa60cde8046e04/raw/citibike2020.csv'
//function for loading the data
function useData(csvPath){
    const [dataAll, setData] = React.useState(null);
    React.useEffect(()=>{
        csv(csvPath).then(data => {
            data.forEach(d => {
                d.start = +d.start;
                d.tripdurationS = +d.tripdurationS;
                d.end = +d.end;
                d.tripdurationE = +d.tripdurationE;
            });
            setData(data);
            console.log(data);
        });
    }, []);
    return dataAll;
};
// the Chart component
function Charts () {
    const [month, setMonth] = React.useState('4');
    const SVG_WIDTH = 600;
    const SVG_HEIGHT = 800;
    const margin = {left: 50, right:50, top:50, bottom:150, gap: 70}; //you can modify the values if needed.
    const width = SVG_WIDTH - margin.left - margin.right;
    const height = SVG_HEIGHT - margin.top - margin.bottom; 
    //the handler of the slider bar
    const changeHandler = (event) => {
        setMonth(event.target.value);
    }
    //loading the whole data set
    const dataAll = useData(csvUrl);
                if (!dataAll) {
                   return <pre>Loading...</pre>;
                };
    
    const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //get the monthly data
    const data = dataAll.filter( d => { 
        return d.month === MONTH[month] 
    });
   
    return <div>
        <div>
            <input key="slider" type='range' min='0' max='11' value={month} step='1' onChange={changeHandler}/>
            <input key="monthText" type="text" value={MONTH[month]} readOnly/>
        </div>
        <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
        <ScatterPlot data={data} offsetX={margin.left} offsetY={margin.top} height={height/2} width={width}/>
        <BarChart data={data} offsetX={margin.left} offsetY={margin.top + height/2 + margin.gap} height={height/2} width={width} />
        </svg>
    </div> 
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Charts />, rootElement);