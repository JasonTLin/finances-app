import React from "react";
import {Pie, Line} from "react-chartjs-2";

const options={
    scales:{
        yAxes:[{
            ticks:{
            callback: function(value, index, values) {
                        return '$' + value;
            }
            }
        }],

        xAxes:[{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks:{
                autoSkip:true,
                maxTicksLimit: 12
            }
        }],
    },
    legend:{
        display: false
    }
}

const pieoptions={
    legend: {
        position: 'right',
        labels: {
            fontSize: 14,
            padding: 22,
        }
    },
}

class Piegraph extends React.Component{
    render(){
        return(
        <div>
        <div className="pie-spacing">
            <Pie
            data={this.props.piedata}
            options={pieoptions}
            />
        </div>
        <div className="line-spacing">
            <Line
            data={this.props.linedata}
            options={options}
            />
        </div>
        </div>
        )
    }
}

export default Piegraph;
