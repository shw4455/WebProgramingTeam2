import React, { useState } from 'react';

function MyDayAndSchedule() {
    const [place, setPlace] = useState('');
    const [person, setPerson] = useState('');
    const [thing, setThing] = useState('');
    const [spent, setSpent] = useState('');
    const [news, setNews] = useState('');

    const handleChange_1 = (event) => setPlace(event.target.value.toUpperCase());
    const handleChange_2 = (event) => setPerson(event.target.value.toUpperCase());
    const handleChange_3 = (event) => setThing(event.target.value.toUpperCase());
    const handleChange_4 = (event) => setSpent(event.target.value.toUpperCase());
    const handleChange_5 = (event) => setNews(event.target.value.toUpperCase());

    const placeSubmit = (event) => event.preventDefault();
    const personSubmit = (event) => event.preventDefault();
    const thingSubmit = (event) => event.preventDefault();
    const spentSubmit = (event) => event.preventDefault();
    const newsSubmit = (event) => event.preventDefault();

    const [morning, setMorning] = useState('');
    const [breakfast, setBreakfast] = useState('');
    const [afternoon, setAfternoon] = useState('');
    const [evening, setEvening] = useState('');

    const handleMorningChange = (event) => setMorning(event.target.value);
    const handleBreakfastChange = (event) => setBreakfast(event.target.value);
    const handleAfternoonChange = (event) => setAfternoon(event.target.value);
    const handleEveningChange = (event) => setEvening(event.target.value);

    const morningSubmit = (event) => event.preventDefault();
    const breakfastSubmit = (event) => event.preventDefault();
    const afternoonSubmit = (event) => event.preventDefault();
    const eveningSubmit = (event) => event.preventDefault();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* MyDay Section */}
            <table border={1} style={{ marginBottom: '20px', width: '60%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th colSpan={4} style={{ backgroundColor: 'lightgreen', textAlign: 'center', fontSize: '24px', height: '50px' }}>
                            나의 하루
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: '15%' }}>방문한 장소</td>
                        <td style={{ width: '35%' }}>
                            <form onSubmit={placeSubmit}>
                                <label>
                                    <input type="text" value={place} onChange={handleChange_1} />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                        <td style={{ width: '15%' }}>오늘 만난 사람</td>
                        <td style={{ width: '35%' }}>
                            <form onSubmit={personSubmit}>
                                <label>
                                    <input type="text" value={person} onChange={handleChange_2} />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td>구입한 물건</td>
                        <td>
                            <form onSubmit={thingSubmit}>
                                <label>
                                    <input type="text" value={thing} onChange={handleChange_3} />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                        <td>지출 금액</td>
                        <td>
                            <form onSubmit={spentSubmit}>
                                <label>
                                    <input type="text" value={spent} onChange={handleChange_4} />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td>오늘의 뉴스</td>
                        <td colSpan={3}>
                            <form onSubmit={newsSubmit}>
                                <label>
                                    <textarea 
                                        value={news} 
                                        onChange={handleChange_5}
                                        style={{ width: '100%', height: '50px' }}
                                    />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <table border={1} style={{ width: '60%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th colSpan={3} style={{ backgroundColor: 'lightgreen', textAlign: 'center', fontSize: '24px', height: '50px' }}>
                            중요한 일
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: '10px' }}>오전 5시-8시</td>
                        <td style={{ width: '10px' }}>일어나서 한 일</td>
                        <td style={{ width: '10px' }}>
                            <form onSubmit={morningSubmit}>
                                <label>
                                    <textarea 
                                        value={morning} 
                                        onChange={handleMorningChange}
                                        style={{ width: '100%', height: '30px' }}
                                    />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '10px' }}>오전 8시-12시</td>
                        <td style={{ width: '10px' }}>아침 식사 후에 한 일</td>
                        <td style={{ width: '10px' }}>
                            <form onSubmit={breakfastSubmit}>
                                <label>
                                    <textarea 
                                        value={breakfast} 
                                        onChange={handleBreakfastChange}
                                        style={{ width: '100%', height: '30px' }}
                                    />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '10px' }}>오후 12시-5시</td>
                        <td style={{ width: '10px' }}>오후에 한 일</td>
                        <td style={{ width: '10px' }}>
                            <form onSubmit={afternoonSubmit}>
                                <label>
                                    <textarea 
                                        value={afternoon} 
                                        onChange={handleAfternoonChange}
                                        style={{ width: '100%', height: '30px' }}
                                    />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '10px' }}>오후 5시-10시</td>
                        <td style={{ width: '10px' }}>저녁 식사 후에 한 일</td>
                        <td >
                            <form onSubmit={eveningSubmit}>
                                <label>
                                    <textarea 
                                        value={evening} 
                                        onChange={handleEveningChange}
                                        style={{ width: '100%', height: '30px' }}
                                    />
                                </label>
                                <button type="submit">제출</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyDayAndSchedule;
