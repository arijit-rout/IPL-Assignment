import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Graph1(){
    const options = {
        series: [
            {
                name: "Profit",
                data: [100, 200, 30, 100, 50, 30], 
                
            }]
        };
    return(
        <div className='container App'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}
export default Graph1;