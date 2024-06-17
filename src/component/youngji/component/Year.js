import React, { useState } from "react";


function Year(props) {
const[value, setValue] = useState('');
const [error, setError] = useState('');

    const handleChange = (event) =>{
        setValue(event.target.value.toUpperCase());
    }
    
    const yearSubmit = (event) => {

        event.preventDefault();
        if (!/^\d{4}$/.test(value)) {
            setError('4자리 숫자를 입력해주세요.');
        } else {
            setError('');
            console.log('입력된 숫자:', value);
        }
        
    }
    // console.log(value);

    return (
        <form onSubmit={yearSubmit}>
            <label>
                 
            <input type="text" value={value} onChange={handleChange} style={{ width: '40%' }}></input>
            
            </label>
            <button type="submit">년도</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}

        </form>
    )
}

export default Year;
