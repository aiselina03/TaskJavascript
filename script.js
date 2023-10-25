// ? 1. prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin.
// let num = +prompt("eded daxil edin")
// let quvvet = +prompt("quvveti daxil edin")
// if (2 ** quvvet === num) {
//     console.log("quvvetidir")
// }
// else {
//     console.log("deyil");
// }


// ? 2. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin
// ? (example: 3 ve 5 ededleri gonderilir , 5 ustu 3 olur oda bize =>125 qayatarir.)
// let num1 = +prompt("1ci ededi daxil edin")
// let num2 = +prompt("2ci ededi daxil edin")
// let quvvet = num2 ** num1
// console.log(quvvet);

// ? 3. 1-den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)
// let sumyuz = 0;
// let summin = 0;
// for (let i = 0; i < 100; i++) {
//     if (i % 11 === 0) {
//         sumyuz += i;
//     }
// } console.log(sumyuz);

// for (let i = 0; i < 1000; i++) {
//     if (i % 111 === 0) {
//         summin += i;
//     }
// } console.log(summin);

// console.log(sumyuz + summin);

// ? 4. Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.
// let num = 0;
// const arr = [12, 24, 93, 29, 72, 1]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         if (num < arr[i]) {
//             num = arr[i];
//         }
//     }
// } console.log(num);

// ? 5. Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.
// const arr = [12, 24, 93, 3, 29, 72, 7,]
// let num = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         if (num > arr[i]) {
//             num = i;
//         }
//     }
// } console.log(num);

// ? 6. Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin. (tam yazmamisam)
// let sadecount = 0;
// let murekkebcount = 0;
// const arr = [12, 24, 31, 27, 3, 53, 7]
// for (let i = 0; i < arr.length; i++) {
//     if () {
//         murekkebcount++
//     }
//     else if (arr[i] % arr[i] === 0 && arr[i] % 1 === 0) {
//         sadecount++
//     }
// }
// console.log(murekkebcount); //count3   12 24 27
// console.log(sadecount); //count4   31 3 53 7



// ? 7. Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.
// const arr = [12, 24, 93, 3, 29, 72, 7,]
// let minnum = arr[0];
// let maxnum = arr[0];
// let edediorta = 0;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     edediorta = sum / arr.length
//     if (minnum > arr[i]) {
//         minnum = arr[i];
//     }
//     else if (maxnum < arr[i]) {
//         maxnum = arr[i];
//     }
//     else if ((minnum + maxnum) > edediorta) {
//         console.log("boyukdur");
//     }
//     else {
//         console.log("kicikdir");
//     }
// }


// ? 8. Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.
// let num = "709";
// let enboyukreqem = 0
// for (let i = 0; i < num.length; i++) {
//     if (num[i] > enboyukreqem) {
//         enboyukreqem = num[i]
//     }
// } console.log(enboyukreqem);

// ? QEYD: prompt ile olan versiyasi, "+" qoymadiqda string olaraq qebul etdiyi ucun yazdim
// let num = prompt("eded daxil edin");
// let enboyukreqem = 0
// for (let i = 0; i < num.length; i++) {
//     if (num[i] > enboyukreqem) {
//         enboyukreqem = num[i]
//     }
// } console.log(enboyukreqem);