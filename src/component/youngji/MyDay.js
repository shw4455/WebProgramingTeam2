// import React,{ useState } from "react";

// function MyDay(props) {

//     const[place, setPlace] = useState('');

//     const handleChange_1 = (event) =>{
//         setPlace(event.target.value.toUpperCase());
//     }
    
//     const placeSubmit = (event) => {

//         event.preventDefault();
        
//     }
//     const[person, setPerson] = useState('');

//     const handleChange_2 = (event) =>{
//         setPerson(event.target.value.toUpperCase());
//     }
    
//     const personSubmit = (event) => {

//         event.preventDefault();
        
//     }

//     const[thing, setThing] = useState('');

//     const handleChange_3 = (event) =>{
//         setThing(event.target.value.toUpperCase());
//     }
    
//     const thingSubmit = (event) => {

//         event.preventDefault();
        
//     }
//     const[spent, setSpent] = useState('');

//     const handleChange_4 = (event) =>{
//         setSpent(event.target.value.toUpperCase());
//     }
    
//     const spentSubmit = (event) => {

//         event.preventDefault();
        
//     }

//     const[news, setNews] = useState('');

//     const handleChange_5 = (event) =>{
//         setNews(event.target.value.toUpperCase());
//     }
    
// //     const newsSubmit = (event) => {

// //         event.preventDefault();
        
// //     }

// //     return(
        
// //         <div style={{ display: 'flex', justifyContent: 'center' }}>
// //             <table border={1}>

                 
// //                     <tr>
// //                         <th colSpan={4} style={{ backgroundColor: 'lightgreen', textAlign: 'center', fontSize: '24px', height: '50px' }}>
// //                             나의 하루
// //                         </th>
// //                     </tr>
                
                    
// //                 <tr>
// //                     <td>방문한 장소</td>
// //                     <td>
// //                         <form onSubmit={placeSubmit}>
// //                             <label>
// //                             <input type="text" value={place} onChange={handleChange_1}></input>
// //                             </label>
// //                         <button type="submit">제출</button>
// //                     </form>
// //                     </td>
// //                     <td>오늘 만난 사람</td>
// //                     <td><form onSubmit={personSubmit}>
// //                     <label>
// //                     <input type="text" value={person} onChange={handleChange_2}></input>
// //                     </label>
// //                      <button type="submit">제출</button>
// //                      </form>
// //                      </td>
// //                 </tr>
// //                 <tr>
// //                     <td>구입한 물건</td>
// //                     <td>
// //                     <form onSubmit={thingSubmit}>
// //                      <label>
// //                         <input type="text" value={thing} onChange={handleChange_3}></input>
// //                     </label>
// //                     <button type="submit">제출</button>
// //                     </form>
// //                     </td>
// //                     <td>지출 금액</td>
// //                     <td>
// //                     <form onSubmit={spentSubmit}>
// //                     <label>
// //                     <input type="text" value={spent} onChange={handleChange_4}></input>
// //                     </label>
// //                      <button type="submit">제출</button>
// //                     </form>
// //                     </td>
// //                 </tr>
// //                 <tr>
// //                 <td>오늘의 뉴스</td>
// //                         <td colSpan={3}>
// //                             <form onSubmit={newsSubmit}>
// //                                 <label>
// //                                     <textarea 
// //                                         value={news} 
// //                                         onChange={handleChange_5}
// //                                         style={{ width: '100%', height: '50px' }}
// //                                     ></textarea>
// //                                 </label>
// //                                 <button type="submit">제출</button>
// //                             </form>
// //                         </td>
// //                 </tr>
// //             </table>
// //         </div>
       
// //     );
// // }

// // export default MyDay;

// import React, { useState } from 'react';

// function MyDay({ onSubmit }) {
//     const [place, setPlace] = useState('');
//     const [person, setPerson] = useState('');
//     const [thing, setThing] = useState('');
//     const [spent, setSpent] = useState('');
//     const [news, setNews] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onSubmit({ place, person, thing, spent, news });
//     };

//     return (
//         <table border={1} style={{ marginBottom: '20px', width: '60%', borderCollapse: 'collapse' }}>
//             <thead>
//                 <tr>
//                     <th colSpan={4} style={{ backgroundColor: 'lightgreen', textAlign: 'center', fontSize: '24px', height: '50px' }}>
//                         나의 하루
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td style={{ width: '15%' }}>방문한 장소</td>
//                     <td style={{ width: '35%' }}>
//                         <form onSubmit={handleSubmit}>
//                             <label>
//                                 <input type="text" value={place} onChange={(e) => setPlace(e.target.value.toUpperCase())} style={{ width: '100%' }} />
//                             </label>
//                             <button type="submit">제출</button>
//                         </form>
//                     </td>
//                     <td style={{ width: '15%' }}>오늘 만난 사람</td>
//                     <td style={{ width: '35%' }}>
//                         <form onSubmit={handleSubmit}>
//                             <label>
//                                 <input type="text" value={person} onChange={(e) => setPerson(e.target.value.toUpperCase())} style={{ width: '100%' }} />
//                             </label>
//                             <button type="submit">제출</button>
//                         </form>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td style={{ width: '15%' }}>구입한 물건</td>
//                     <td style={{ width: '35%' }}>
//                         <form onSubmit={handleSubmit}>
//                             <label>
//                                 <input type="text" value={thing} onChange={(e) => setThing(e.target.value.toUpperCase())} style={{ width: '100%' }} />
//                             </label>
//                             <button type="submit">제출</button>
//                         </form>
//                     </td>
//                     <td style={{ width: '15%' }}>지출 금액</td>
//                     <td style={{ width: '35%' }}>
//                         <form onSubmit={handleSubmit}>
//                             <label>
//                                 <input type="text" value={spent} onChange={(e) => setSpent(e.target.value.toUpperCase())} style={{ width: '100%' }} />
//                             </label>
//                             <button type="submit">제출</button>
//                         </form>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td style={{ width: '15%' }}>오늘의 뉴스</td>
//                     <td colSpan={3}>
//                         <form onSubmit={handleSubmit}>
//                             <label>
//                                 <textarea 
//                                     value={news} 
//                                     onChange={(e) => setNews(e.target.value.toUpperCase())}
//                                     style={{ width: '100%', height: '50px' }}
//                                 />
//                             </label>
//                             <button type="submit">제출</button>
//                         </form>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// }

// export default MyDay;
