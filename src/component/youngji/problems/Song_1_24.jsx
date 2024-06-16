import React from "react";
import Year from "../component/Year";
import Day from "../component/Day";
import Days_of_week from "../component/Days_of_week";
import Weather from '../component/Weather';
import MySchedule from "../component/MySchedule";
import NextDay from "../component/NextDay";
// import Box from "../component/Box";

function Problem1(props) {

    return(
        <div>
             <div style={{marginLeft: '305px'}}>
                {/* <Box /> */}
            </div>
            
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
