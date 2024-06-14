import React from "react";
import Song_1_24 from "./problems/Song_1_24";
import Song_2_51 from "./problems/Song_2_51";


function Page(props){

    return(
        <>
        <div style={{ textAlign: 'center'}}>
            <Song_1_24 />
        </div>
        <br></br>
        <div style={{ textAlign: 'center'}}>
            <Song_2_51 />
        </div>
        </>
    )
}

export default Page;