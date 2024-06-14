import React, { useState } from "react";

function Select() {
    const [answers, setAnswers] = useState({
        grain: '',
        meat: '',
        vege: '',
        fruit: '',
        milk: ''
    });

    const [errors, setErrors] = useState({
        grain: '',
        meat: '',
        vege: '',
        fruit: '',
        milk: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event, correctAnswer) => {
        event.preventDefault();
        const { name } = event.target.elements[0];

        if (answers[name] === correctAnswer) {
            setErrors(prevState => ({ ...prevState, [name]: '정답' }));
        } else {
            setErrors(prevState => ({ ...prevState, [name]: "틀렸습니다.다시 푸세요~" }));
        }
    };

    return (
        <>
            <table style={{ margin: "auto", textAlign: "center", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ border: "1px solid black" }}>
                        <th style={{ border: "1px solid black", padding: "10px", backgroundColor: 'lightgreen' }}>식품군</th>
                        <th style={{ border: "1px solid black", padding: "10px", backgroundColor: 'lightgreen' }}>보기 넣기</th>
                        <th style={{ border: "1px solid black", padding: "10px", backgroundColor: 'lightgreen' }}>영양소</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: "1px solid black" }}>
                        <td style={{ border: "1px solid black", padding: "10px" }}>1. 곡류</td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>
                            <form onSubmit={(e) => handleSubmit(e, "ㄹ")} style={{ textAlign: 'center' }}>
                                <label>
                                    <input type="text" name="grain" value={answers.grain} onChange={handleChange} style={{ width: '50px' }} />
                                </label>
                                <button type="submit">입력</button>
                                {errors.grain && <p style={{ color: 'red' }}>{errors.grain}</p>}
                            </form>
                        </td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>탄수화물</td>
                    </tr>
                    <tr style={{ border: "1px solid black" }}>
                        <td style={{ border: "1px solid black", padding: "10px" }}>2. 고기, 생선류</td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>
                            <form onSubmit={(e) => handleSubmit(e, "ㄷ")} style={{ textAlign: 'center' }}>
                                <label>
                                    <input type="text" name="meat" value={answers.meat} onChange={handleChange} style={{ width: '50px' }} />
                                </label>
                                <button type="submit">입력</button>
                                {errors.meat && <p style={{ color: 'red' }}>{errors.meat}</p>}
                            </form>
                        </td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>단백질</td>
                    </tr>
                    <tr style={{ border: "1px solid black" }}>
                        <td style={{ border: "1px solid black", padding: "10px" }}>3. 채소류</td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>
                            <form onSubmit={(e) => handleSubmit(e, "ㅁ")} style={{ textAlign: 'center' }}>
                                <label>
                                    <input type="text" name="vege" value={answers.vege} onChange={handleChange} style={{ width: '50px' }} />
                                </label>
                                <button type="submit">입력</button>
                                {errors.vege && <p style={{ color: 'red' }}>{errors.vege}</p>}
                            </form>
                        </td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>무기질</td>
                    </tr>
                    <tr style={{ border: "1px solid black" }}>
                        <td style={{ border: "1px solid black", padding: "10px" }}>4. 과일류</td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>
                            <form onSubmit={(e) => handleSubmit(e, "ㄱ")} style={{ textAlign: 'center' }}>
                                <label>
                                    <input type="text" name="fruit" value={answers.fruit} onChange={handleChange} style={{ width: '50px' }} />
                                </label>
                                <button type="submit">입력</button>
                                {errors.fruit && <p style={{ color: 'red' }}>{errors.fruit}</p>}
                            </form>
                        </td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>비타민</td>
                    </tr>
                    <tr style={{ border: "1px solid black" }}>
                        <td style={{ border: "1px solid black", padding: "10px" }}>5. 유제품류</td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>
                            <form onSubmit={(e) => handleSubmit(e, "ㄴ")} style={{ textAlign: 'center' }}>
                                <label>
                                    <input type="text" name="milk" value={answers.milk} onChange={handleChange} style={{ width: '50px' }} />
                                </label>
                                <button type="submit">입력</button>
                                {errors.milk && <p style={{ color: 'red' }}>{errors.milk}</p>}
                            </form>
                        </td>
                        <td style={{ border: "1px solid black", padding: "10px" }}>칼슘</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Select;
