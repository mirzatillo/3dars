// 1 massala
// Yoshga qarab status aniqlash
// let a = +prompt("Yosh")

// let res=""

// if (a>=18) {
//     res= "Siz katta yoshdagisiz"
// }else{
//     res="Siz hali yoshsiz"
// }

// console.log(res);


// 2 masala
// Juft yoki toq son aniqlash

// let a = +prompt("sonni kriting")

// let res= ""

// if (a % 2 = 1) {
//     res= "toq son"
// }else{
//     res="juft son"
// }

// console.log(res);


// 3 masala
// Musbat yoki manfiy son aniqlash:

// let a = +prompt("sonni kriting")

// let res =""

// if (a>0) {
//     res="musbat"
// }else{
//    res="manfiy"
// }

// console.log(res);


// 4 masala
// Haroratga qarab tavsiya berish:

// let a= +prompt("gradus kriting")

// let res=""

// if (a>=20) {
//     res="Yengil kiying"
// }else{ 
//     res= "Qalin kiying"
// }

// console.log(res);


// 5 masala
// Imtihon natijasini baholash:

// let a = +prompt("imtihon balli")

// let res=""

// if (a>=90) {
//     res="alo"
// }else if (a>=70) {
//     res="yaxshi"
// }

// if (a>=50) {
//     res="Qoniqarli"
// }else if (a<50) {
//     res="yomon"
// }

// console.log(res);


// 6 masala
// Mehmonni kutib olish:

// let ali= +prompt("ismizdi kriting")

// let res=""

// if ("ali") {
//     res="salom ali"
//     console.log("slaom ali");
// }else{
//     res="salom mehmon!"
// }

// console.log(res);


// 7 masala
// Narxni chegirma qilish:

// let a= +prompt("")

// let res= """

// if (a>=100) {
//     res= "Chegirma qo'llanildi"
// }else{
//     res="Chegirma mavjud emas" 
// }

// console.log(res);


  //Ternary ga oid masalalar

// 1 masala
// Temperaturani tekshirish:

// let a= +prompt("")

// a>=25 ? console.log("Issiq") : console.log("Sovuq");

// 2 masala
// Balni tekshirish:

// let a= +prompt("imtihon balli")

// a>=50 ? console.log("O'tdi") : console.log("Yiqildi");

// 3 masala
// Sonning musbat yoki manfiy ekanligini aniqlash

// let a= +prompt("sonni kriting")

// a>0 ? console.log("Musbat") : console.log("Manfiy");


// For ga oid masalalar

// 1 masala
// 1 dan 10 gacha bo'lgan sonlarni konsolga chiqaring:

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// 2 masala
// 10 dan 1 gacha bo'lgan sonlarni konsolga chiqaring:

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// 3 masala
// 1 dan 100 gacha bo'lgan juft sonlarni konsolga chiqaring:

// for(let i=1; i<=100; i++){
//     if (i % 2== 0) {
//         console.log(i);
//     }
// }

// 4 masala
// 1 dan 100 gacha bo'lgan toq sonlarni konsolga chiqaring:

// for(let i=1; i<=100; i++){
//     if (i % 2== 1) {
//         console.log(i);
//     }
// }

// 5 masala
// 1 dan 10 gacha bo'lgan sonlarning yig'indisini hisoblang:

// let sum=0

// for(let i =1; i<=10; i++){
//     sum=sum+i;
// }

// console.log(sum);

// 6 masala
// 1 dan 10 gacha bo'lgan sonlarning ko'paytmasini hisoblang:

// let sum=1

// for(let i =1; i<=10; i++){
//     sum=sum*i;
// }

// console.log(sum);

// 7 masala
// Foydalanuvchi tomonidan kiritilgan sonning faktorialini hisoblang:

// let a= +prompt("sonni kriting")

// let res=1

// for(let i=1; i<=a; i++){
//   res=res*i
// }
// console.log(res);

// 8 masala
// 1 dan 50 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring:

// let a= +prompt("sonni kriting")

// let res=1

// for(let i=1; i<=a; i++){
//   res=i**3
// }
// console.log(res);

// 9 masala
// 1 dan 20 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring:

// let a= +prompt("sonni kriting")

// let res=1

// for(let i=1; i<=a; i++){
//   res=i**4
// }
// console.log(res);

// 10 masala
// 1 dan 1000 gacha bo'lgan barcha sonlarning yig'indisini hisoblang:
// let a= +prompt("sonni kriting")

// let sum=0

// for(let i =1; i<=a; i++){
//     sum=sum+i;
// }

// console.log(sum);

// 11 masala
// "Salom" so'zini 5 marta konsolga chiqaring

// let a=5

// for(let i =1; i<=a; i++){
//    console.log("salom");
// }

// 12 masala
// 1 dan 100 gacha bo'lgan sonlarni ikki barobar ko'paytirib konsolga chiqaring:

// let res=1

// for(let i=1; i<=100; i){
//     res=i*2
// }

// console.log(res);

// BOOLEAN

// 1 masala

// let a= +prompt("sonni kriting")
// let b= +prompt("sonni kriting")
// let res=""

// if (a % 2==1 && b % 2== 1) {
//     res="toq"
// }else if ( a % 2== 0 && b % 2== 0) {
//     res="juft"
// }

// console.log(res);

// 2 masala

// let a= +prompt("sonni krting")
// let b= +prompt("sonni krting")
// let c= +prompt("sonni krting")

// let res=""

// if (a % 2==0 && b % 2==0 && c % 2 ==0) {
//     res="musbat"
// }else{
//     res="toq"
// }

// console.log(res);

// 3 masala

// let a= +prompt("sonni krting")
// let b= +prompt("sonni krting")
// let c= +prompt("sonni krting")

// let res=""

// if (a % 2==0 && b % 2==1 && c % 2 ==1 || a % 2==1 && b % 2==0 && c % 2 ==1 || a % 2==1 && b % 2==1 && c % 2 ==0) {
//     res="musbat"
// }else{
//     res="toq"
// }

// console.log(res);

// 4 masala

// let a= +prompt("sonni krting")
// let b= +prompt("sonni krting")
// let c= +prompt("sonni krting")

// let res=""

// if (a % 2==0 && b % 2==1 && c % 2 ==1 || a % 2==1 && b % 2==0 && c % 2 ==1 || a % 2==1 && b % 2==1 && c % 2 ==0) {
//     res="musbat"
// }else{
//     res="toq"
// }


// console.log(res);

// 5 masala

// let a= +prompt("sonni krting")
// let b= +prompt("sonni krting")
// let c= +prompt("sonni krting")

// let res=""

// if (a % 2==0 && b % 2==0 && c % 2 ==1 || a % 2==1 && b % 2==0 && c % 2 ==0 || a % 2==0 && b % 2==1 && c % 2 ==0) {
//     res="musbat"
// }else{
//     res="toq"
// }


// console.log(res);

// 6 masala

// let a= +prompt("2-honali son kriting")

// if (a>9 && a % 2 =0) {
//     console.log(a);
// }


