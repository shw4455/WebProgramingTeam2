// import React, { useState } from "react";



// function Day(props) {
// const[value, setValue] = useState('날짜를 입력하세요.');

//     const handleChange = (event) =>{
//         setValue(event.target.value.toUpperCase());
//     }
    
//     const daySubmit = (event) => {

//         event.preventDefault();
        
//     }
//     // console.log(value);

//     return (
//         <form onSubmit={daySubmit}>
//             <label>
                 
//             날짜: <input type="text" value={value} onChange={handleChange}></input>

//             </label>
//             <button type="submit">제출</button>
//         </form>
//     )
// }

// export default Day;

import React, { useState } from "react";

function Day(props) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        // const inputValue = event.target.value;
        setValue(event.target.value.toUpperCase());

        // // 입력값이 숫자이고, 4자리인지 확인
        // if (/^\d{1,4}$/.test(inputValue)) {
        //     setValue(inputValue);
        //     setError('');
        // } else {
        //     setError('4자리 숫자만 입력 가능합니다.');
        // }
    }
    
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
