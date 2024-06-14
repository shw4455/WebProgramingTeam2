import React,{ useState, useTransition } from "react";
import View from "./View";

function Select(props){
    
    const [grain,setGrain] =useState('');
    const [meat,setMeat] = useState('');
    const [vege,setVege] = useState('');
    const [fruit,setFruit] = useState('');
    const [milk,setMilk] = useState('');

    const handleChange = (event) =>{
        setGrain(event.target.value);
    }
    const grainSubmit = (event) =>{

        event.preventDefault();
        if(grain === "ㄱ"){
            alert("정답");
        }
        else{
            alert("틀렸습니다.다시 푸세요~")
        }
    }
    
    return(
        <form onSubmit={grainSubmit} style={{ textAlign: 'center' }}>
            <label> 
                <input type="text" value={grain} onChange={handleChange} style={{ width: '50px' }} />
            </label>
            <button type="submit">입력</button>
            {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
        </form>
    );
}

export default Select;