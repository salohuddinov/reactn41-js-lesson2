// Boolean1.

// function tekshir(A, B, C) {
//     return (B > A && B < C) || (B < A && B > C);
// }

// var sonA = 3;
// var sonB = 5;
// var sonC = 7;
// var rostlik = tekshir(sonA, sonB, sonC);

// console.log("B soni A va C sonlari orasida yotadi: " + rostlik);


// Boolean2.

// function tekshir(A, B) {
//     return A >= 0 || B < -2;
// }

// var sonA = 3;
// var sonB = -3;
// var rostlik = tekshir(sonA, sonB);

// console.log("A >= 0 yoki B < -2: " + rostlik);


// Boolean3.

// function tekshir(A, B, C) {
//     return (B > A && B < C) || (B < A && B > C);
// }

// var sonA = 3;
// var sonB = 5;
// var sonC = 7;
// var rostlik = tekshir(sonA, sonB, sonC);

// console.log("B soni A va C sonlari orasida yotadi: " + rostlik);


// Boolean4.

// function tekshir(A, B) {
//     return A % 2 !== 0 && B % 2 !== 0;
// }

// var sonA = 3;
// var sonB = 7;
// var rostlik = tekshir(sonA, sonB);

// console.log("A va B sonlari toq sonlar: " + rostlik);



// Boolean5.

// function tekshir(A, B) {
//     return (A % 2 !== 0 || B % 2 !== 0);
// }

// var sonA = 3;
// var sonB = 8;
// var rostlik = tekshir(sonA, sonB);

// console.log("A va B sonlarning hech bo'lmaganda bittasi toq son: " + rostlik);



// Boolean6.

// function tekshir(A, B) {
//     return (A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0);
// }

// var sonA = 3;
// var sonB = 8;
// var rostlik = tekshir(sonA, sonB);

// console.log("A va B sonlarning faqat bittasi toq son: " + rostlik);



// Boolean7.
// function tekshir(A, B, C) {
//     return A > 0 && B > 0 && C > 0;
// }

// var sonA = 2;
// var sonB = 5;
// var sonC = 7;
// var rostlik = tekshir(sonA, sonB, sonC);

// console.log("A, B, C sonlarning har biri musbat: " + rostlik);



// Boolean8.
// function tekshir(A, B, C) {
//     return (A > 0 && B <= 0 && C <= 0) ||
//         (A <= 0 && B > 0 && C <= 0) ||
//         (A <= 0 && B <= 0 && C > 0);
// }

// var sonA = -2;
// var sonB = 5;
// var sonC = -7;
// var rostlik = tekshir(sonA, sonB, sonC);

// console.log("A, B, C sonlardan faqat bittasi musbat son: " + rostlik);



// Boolean9.
// function tekshir(A, B, C) {
//     return (A > 0 && B > 0 && C <= 0) ||
//         (A > 0 && B <= 0 && C > 0) ||
//         (A <= 0 && B > 0 && C > 0);
// }

// var sonA = 3;
// var sonB = -5;
// var sonC = 7;
// var rostlik = tekshir(sonA, sonB, sonC);

// console.log("A, B, C sonlardan faqat ikkitasi musbat son: " + rostlik);



// Boolean10.

// function tekshir(son) {
//     return son > 9 && son < 100 && son % 2 === 0;
// }

// var berilganSon = 42;
// var rostlik = tekshir(berilganSon);

// console.log("Berilgan son ikki xonali juft son: " + rostlik);



// Boolean11.

// function tekshir(son) {
//     return son > 99 && son < 1000 && son % 2 !== 0;
// }

// var berilganSon = 135;
// var rostlik = tekshir(berilganSon);

// console.log("Berilgan son uch xonali toq: " + rostlik);


// Boolean12.

// function tekshir(A, B, C) {
//     return (A % 2 === 0 && B % 2 !== 0 && C % 2 !== 0) ||
//         (A % 2 !== 0 && B % 2 === 0 && C % 2 !== 0) ||
//         (A % 2 !== 0 && B % 2 !== 0 && C % 2 === 0);
// }

// var sonA = 2;
// var sonB = 5;
// var sonC = 7;
// var rostlik = tekshir(sonA, sonB, sonC);

// console.log("Uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi: " + rostlik);


// Boolean13.

// function tekshir(son) {
//     var strSon = son.toString();
//     for (var i = 0; i < strSon.length - 1; i++) {
//         if (Math.abs(Number(strSon[i]) - Number(strSon[i + 1])) !== 1) {
//             return false;
//         }
//     }
//     return true;
// }

// var uchxonaliSon = 123;
// var rostlik = tekshir(uchxonaliSon);

// console.log("Ushbu sonning raqamlari ketama-ket o'suvchi bo'lib joylashgan: " + rostlik);


// Boolean15.

// function tekshir(son) {
//     var strSon = son.toString();
//     var chapdanOqish = strSon.split('').reverse().join('');
//     return strSon === chapdanOqish;
// }

// var uchxonaliSon = 121;
// var rostlik = tekshir(uchxonaliSon);

// console.log("Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil: " + rostlik);


// operator.1

// function calculateY(A, B) {
//     return B ** 2 * (A ** 2 + B ** 2);
// }

// // Misol
// var A = 3;
// var B = 4;
// var Y = calculateY(A, B);

// console.log("Natija:", Y);


// operator.2

// function calculateY(A, B, C, D) {
//     return A + B * C + D ** 2 + B ** 2;
// }

// var A = 2;
// var B = 3;
// var C = 4;
// var D = 5;

// var Y = calculateY(A, B, C, D);

// console.log("Natija:", Y);


// operator.3

// function calculateY(A, D, C) {
//     return 2 * A * D + 4 * C * 23;
// }

// var A = 2;
// var D = 3;
// var C = 5;

// var Y = calculateY(A, D, C);

// console.log("Natija:", Y);


// operator.4

// function calculateY(A, B, C, D) {
//     return 1 * A + 2 * B * 103 * C + D ** 2;
// }

// var A = 2;
// var B = 3;
// var C = 4;
// var D = 5;

// var Y = calculateY(A, B, C, D);

// console.log("Natija:", Y);


// operator.5

// function calculateY(A, B, C, D) {
//     return A * B - 1 * C * D - 12;
// }

// var A = 2;
// var B = 3;
// var C = 4;
// var D = 5;

// var Y = calculateY(A, B, C, D);

// console.log("Natija:", Y);


// operator.6

// function calculateY(A, B, C, D) {
//     return A + B * C + D * A + C;
// }

// var A = 2;
// var B = 3;
// var C = 4;
// var D = 5;

// var Y = calculateY(A, B, C, D);

// console.log("Natija:", Y);



// operator.7

// function calculateY(A, B, C) {
//     return A + B + C ** 2 - A - B - C ** 2;
// }

// var A = 2;
// var B = 3;
// var C = 4;

// var Y = calculateY(A, B, C);

// console.log("Natija:", Y);


// operator.8

// function calculateY(A, B, C) {
//     return A ** 2 + B ** 2 + C ** 2 - A * B * C;
// }

// var A = 2;
// var B = 3;
// var C = 4;

// var Y = calculateY(A, B, C);

// console.log("Natija:", Y);


// operator.9

// function calculateY(A, B, C, D) {
//     return A * D ** 3 + B * C ** 2;
// }

// var A = 2;
// var B = 3;
// var C = 4;
// var D = 5;

// var Y = calculateY(A, B, C, D);

// console.log("Natija:", Y);


// operator.10 

// function calculateY(A, B, C) {
//     return A * B - B * C + 4 * A + C;
// }

// var A = 2;
// var B = 3;
// var C = 4;

// var Y = calculateY(A, B, C);

// console.log("Natija:", Y);
