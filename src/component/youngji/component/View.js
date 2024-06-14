// import React, { useState } from "react";

// function View (props) {
    
//     return (
//         <>
        // <h2>앞에 기억해 둔 식품구성 자전거와 공급받을 수 있는 영양소가 짝지어져 있습니다.</h2>
        // <h2>각 식품군에 맞는 종류의 기호를 적어보세요.</h2>

//         <table border={1}>
//              <tr>
//                 <th colSpan={3}>보기</th> 
//             </tr>

//         <tr style={{width:'50%'}}>
//             <td>ㄱ</td>
//             {/* <td>ㄴ</td> */}
//         </tr>
//         <tr>
//             <td>사과, 바나나, 오렌지</td>
//             <td>우유, 요거트, 치즈</td>
//         </tr>
//         <tr>
//             <td>ㄷ</td>
//             <td>ㄹ</td>
//             <td>ㅁ</td>
//         </tr>
//         <tr>
//             <td>소고기, 닭고기, 연어</td>
//             <td>쌀, 보리, 현미</td>
//             <td>오이, 당근, 양배추</td>
//         </tr>
//         </table>
//         </>
//     );
// }

// export default View;

import React, { useState } from "react";

function View(props) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        앞에 기억해 둔 식품구성 자전거와 공급받을 수 있는 영양소가 짝지어져 있습니다.
      </h2>
      <h2 style={{ textAlign: "center" }}>
        각 식품군에 맞는 종류의 기호를 적어보세요.
      </h2>

      <table style={{ margin: "auto", textAlign: "center", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th colSpan={3} style={{ border: "1px solid black", padding: "10px" }}>
              보기
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black", padding: "10px" }}>ㄱ</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>ㄴ</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              사과, 바나나, 오렌지
            </td>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              우유, 요거트, 치즈
            </td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black", padding: "10px" }}>ㄷ</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>ㄹ</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>ㅁ</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              소고기, 닭고기, 연어
            </td>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              쌀, 보리, 현미
            </td>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              오이, 당근, 양배추
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default View;
