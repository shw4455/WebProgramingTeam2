
import React, { useState } from "react";

function Day(props) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    
    const daySubmit = (event) => {
        event.preventDefault();
        
        if (!/^\d{4}$/.test(value)) {
            setError('4자리 숫자를 입력해주세요.');
        } else {
            setError('');
            // 제출 성공 시의 로직
            console.log('입력된 숫자:', value);
        }
    }

    return (
        <form onSubmit={daySubmit}>
            <label>
                <input type="text" value={value} onChange={handleChange} style={{ width: '40%' }}/>
            </label>
            <button type="submit">날짜</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default Day;
