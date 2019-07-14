/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


// const convert = function(s, numRows) {
//     const sArr = s.split('');
//     let cols = {};
//     let col = 1;
//     let index = numRows-2;
//     while (sArr.length !== 0) {
//
//         if (col === 1 || col%(numRows-1) === 1) {
//             if (col !==1) {
//               index = numRows -2;
//             }
//             if (sArr.length <= numRows) {
//                 cols[col] = sArr.splice(0, sArr.length);
//                 for (let j=cols[col].length; j<numRows; j++) {
//                     console.log(j);
//                     cols[col][j] = ' ';
//                 }
//                 console.log(cols[col]);
//             } else {
//                 if (numRows<=2) {
//                     cols[col] = sArr.splice(0, 1);
//                 }  else {
//                     cols[col] = sArr.splice(0, numRows);
//                 }
//             }
//         } else {
//             cols[col] = new Array(numRows).fill(' ');
//             cols[col][index] = sArr.splice(0, 1)[0];
//             index--;
//         }
//
//         col ++;
//
//     }
//     let result = '';
//     for (let i = 0; i< numRows; i++) {
//         Object.keys(cols).forEach(function(key) {
//             console.log(cols[key]);
//             if (cols[key][i] !== ' ') {
//                 result +=cols[key][i];
//             }
//         });
//     }
//     return numRows === 1 ? s : result;
// };

const convert = function (s, numRows) {
    if(s.length < numRows || numRows < 2 || s.length < 2) {
        return s;
    }
    let returnS = '';
    // Loop over rows
    for (let j = 0; j < numRows; j++) {
        for (let i = j; i < s.length; i += 2 * (numRows - 1)) {
            returnS += s[i];
            console.log(s[i]);
            if (j !== 0 && j < numRows - 1) {
                /**
                 * Not first row and last row
                 * @type {number}
                 */
                const intermediateIndex = i + 2 * (numRows - j - 1);
                if (s[intermediateIndex]) {
                    console.log(s[intermediateIndex]);
                    returnS += s[intermediateIndex];
                }
            }
        }
    }
    return returnS;
};

const a = 'PAYPALISHIRING';

console.log(convert(a, 4));


