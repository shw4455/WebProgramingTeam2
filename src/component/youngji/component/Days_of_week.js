

import React, { useState } from "react";

function Days_of_week(props) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;

        // 한글만 입력되도록 필터링
        if (/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(inputValue)) {
            setValue(inputValue);
            setError('');
        } else {
            setError('한글만 입력 가능합니다.');
        }
    }

    const days_of_weekSubmit = (event) => {
        event.preventDefault();
        
        if (!/^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/.test(value)) {
            setError('한글 요일을 입력해주세요.');
        } else {
            setError('');
            // 여기서 추가 작업 수행
            console.log('입력된 요일:', value);
        }
    }

    return (
        <form onSubmit={days_of_weekSubmit}>
            <label> 
                <input type="text" value={value} onChange={handleChange} style={{ width: '40%' }} />
            </label>
            <button type="submit">요일</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default Days_of_week;
