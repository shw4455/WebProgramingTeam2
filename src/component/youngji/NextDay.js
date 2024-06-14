import React, { useState } from 'react';

function NextDay() {
    const [plan, setPlan] = useState('');

    const handleChange = (event) => {
        setPlan(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <table border={1} style={{ width: '60%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: 'lightgreen', textAlign: 'center', fontSize: '20px', height: '50px' }}>
                            내일 계획
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <textarea
                                        value={plan}
                                        onChange={handleChange}
                                        style={{ width: '98%', height: '50px', fontSize: '16px', padding: '5px' }}
                                        
                                    />
                                </label>
                                <br />
                                <button type="submit" style={{ marginTop: '10px' }}>제출</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NextDay;