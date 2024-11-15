

// let age = prompt("Yoshni kiriting")
// if (age <0){
//     console.log("bunday yosh yoq");
// }
// else if(age < 1 && age <= 5 ){
//     console.log("Chaqaloq");
// }
// else if(age < 5 && age <= 15 ){
//     console.log("yosh bo'la");
// }
// else if(age < 15 && age <= 25 ){
//     console.log("o'smir");
// }
// else if(age < 25 && age <= 35){
//     console.log("o'rta yosh");
// }
// else if(age < 35 && age <= 50 ){
//     console.log("O'rta yosh");
// }
// else if(age < 50 && age <= 75 ){
//     console.log("otaxon");
// }
// else if(age > 70){
//     console.log("umringiz uzoq bo'lsin");
// }



// 1.Ixtiyoring son prompt orqali kiritng uning necha xolani ekanligini alertga chiqaring max 4 xonali
// 2.Ixtiyoriy son kiriting uning juft yoki toqligini aniqlang
// 3.Ixtiyoriy son kiriting uning juft yoki toqligini va necha xonali ekanligni aniqlang max 4 xonali
// 4.Ixtiyoriy 3 ta son kiriting ularni o'sish tartiba 3 xonali son yarating

// 5.Uch xonali son kiriting ulardan kichigini toping
// 6. uch xonali song kiriting uning o'nliklar xonasidagi sonni aniqlang
// 7.Chech speed , agar user tezligi 70 km/soat dan kam bolsa console ga hammasi yaxshi , 70 km/soat dan katta bolsa har 5 km/soat 1 point dan bersin , agar pointlar soni 12 dan katta bolsa "prava olindi" , 12 dan kichik bolsa console ga pointni ozi chiqsin
// 8.Foydalanuvchi tug'ulgan yilini  kiriting, foydalanuvchini yoshini aniqlang ,  natijani alert yoki consolega chiqaring
// 9. Bir , ikki , uchu xonali songa tekshiring , juft yoki toq , musbat yoki manfiy ekanligiga tekshiring
// 10.Fizz , Buzz , FizzBuzz 3ga bolinsa consolega Fizz, 5ga bolinsa consolega Buzz  , 3ga ham 5ga ham bolinsa FizzBuzz chiqishi kerak



//1

// let number = prompt("sonni kiriting") -0

// if (number < 10){
//     alert("bu 1 xonalik son")
// }
// else if(number > 9 && number < 100){
//     alert("bu ikki xonalik son")
// }
// else if(number > 99 && number < 1000){
//     alert("bu uch xonalik son")
// }
// else if(number > 999 && number < 10000){
//     alert("bu to'rt xonalik son")
// }

//2

// let number = prompt("sonni kiriting")

// if (number % 2 == 0){
//     alert("Bu juft son")
// }
// else{
//     alert("Bu toq son")
// }


//3
// let number = prompt("sonni kiriting")

// if (number % 2 == 0){
//     alert("Bu juft son")
//     if (number < 10){
//         alert("bu 1 xonalik son")
//     }
//     else if(number > 9 && number < 100){
//         alert("bu ikki xonalik son")
//     }
//     else if(number > 99 && number < 1000){
//         alert("bu uch xonalik son")
//     }
//     else if(number > 999 && number < 10000){
//         alert("bu to'rt xonalik son")
//     }
// }
// else{
//     alert("Bu toq son")
//     if (number < 10){
//         alert("bu 1 xonalik son")
//     }
//     else if(number > 9 && number < 100){
//         alert("bu ikki xonalik son")
//     }
//     else if(number > 99 && number < 1000){
//         alert("bu uch xonalik son")
//     }
//     else if(number > 999 && number < 10000){
//         alert("bu to'rt xonalik son")
//     }
// }

//4 

let num1 = prompt("birinchi sonni kiriting")
let num2 = prompt("ikkinchi sonni kiriting")
let num3 = prompt("uchinchi sonni kiriting")

if (num1 > num2 && num1 > num3){
    alert("" + num1 + num2 + num3)
}
else if (num2 > num1 && num2 > num3 ){
    alert("" + num2 + num1 + num3)
}
else if (num3 > num1 && num3 > num2 ){
    alert("" + num3 + num1 + num2)
}