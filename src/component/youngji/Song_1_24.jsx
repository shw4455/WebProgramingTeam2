import React from "react";
import Year from "./Year";
import Day from "./Day";
import Days_of_week from "./Days_of_week";
import Weather from './Weather';
import MySchedule from "./MySchedule";
import NextDay from "./NextDay";

function Problem1(props) {

    

    return(
        <div>
        <div style={{ textAlign: 'center' , marginLeft: '20px'}}>
        <div style={{ display: 'inline-block'}}>
            <Year />
            </div>
            <div style={{ display: 'inline-block' }}>
            <Day />

            </div>
            <div style={{ display: 'inline-block' }}>
            <Days_of_week />

            </div>
            <div style={{ display: 'inline-block' }}>
                <Weather />
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div>
            <MySchedule />
        </div>
        <div>
            <NextDay />
        </div>
        </div>
        
    )
}

export default Problem1;