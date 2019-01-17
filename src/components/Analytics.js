import React from "react";
import Piegraph from "./Piegraph"
import { mapdata } from '../store/actions/Actions';
import { mapdate } from '../store/actions/Actions';
import { converttopie } from '../store/actions/Actions';

class Analytics extends React.Component {
    componentDidMount() {
    }
    render(){
    const listItems = this.props.listItems
    if (listItems !== undefined){
        //All the data for the Line graph
        var fooddata = mapdata(listItems, 'Food');
        var animedata = mapdata(listItems, 'Anime');
        var refresdata = mapdata(listItems, 'Refreshments');
        var transdata = mapdata(listItems, 'Transportation');
        var eventsdata = mapdata(listItems, 'Events');
        var otherdata = mapdata(listItems, 'Other');
        var dateTime = mapdate(listItems);
        //Data for Pie graph
        var piedata = [converttopie(fooddata), converttopie(refresdata),
            converttopie(animedata), converttopie(transdata),
            converttopie(eventsdata), converttopie(otherdata)];
    };
    const Linedata = {
      labels: dateTime,
      datasets: [
        {
          label: 'Food',
          data: fooddata,
          fill: false,          // Don't fill area under the line
          borderColor: "#ffba5a",  // Line color
          pointBackgroundColor: "#ffba5a" // point color
        },
        {
          label: 'Refreshments',
          data: refresdata,
          fill: false,          // Don't fill area under the line
          borderColor: '#caabd8',  // Line color
          pointBackgroundColor: '#caabd8'
        },
        {
          label: 'Anime',
          data: animedata,
          fill: false,          // Don't fill area under the line
          borderColor: '#c8e4fe',  // Line color
          pointBackgroundColor: '#c8e4fe'
        },
        {
          label: 'Transportation',
          data: transdata,
          fill: false,          // Don't fill area under the line
          borderColor: '#cdffeb',  // Line color
          pointBackgroundColor: '#cdffeb'
        },
        {
          label: 'Events',
          data: eventsdata,
          fill: false,          // Don't fill area under the line
          borderColor: '#b5edba',  // Line color
          pointBackgroundColor: '#b5edba'
        },
        {
          label: 'Other',
          data: otherdata,
          fill: false,          // Don't fill area under the line
          borderColor: '#ff1f5a',  // Line color
          pointBackgroundColor: '#ff1f5a'
        },
      ]
    }
    const piedata = {
        datasets:[{
            data: piedata,
            backgroundColor:['#ffba5a', '#caabd8','#c8e4fe','#cdffeb','#b5edba','#ff1f5a', ]
        }],

        labels:[
        'Food',
        'Refreshments',
        'Anime',
        'Transportation',
        'Events',
        'Other',
        ],

    }
        return(
        <div className="content-section">
        <p className="subtitle-text">Annual Analytics</p>
        <Piegraph linedata = {Linedata}
        piedata = {piedata}
        />
        </div>
        )
    }
}



export default Analytics;
