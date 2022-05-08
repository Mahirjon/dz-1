
// var yosh = + prompt ('Yoshingizni kiriting!')
// if(yosh){
//     alert('Siz hali yoshsiz.Oqishiz kerak!')
//     console.info('')
// }

 var number = +prompt ('yowini kirit')

 if (number > 0 && number <= 18){
    alert ('oqi')
}
else if (number > 18 && number <= 50) {
    alert ('ishla')
    
}else if (number > 50 && number < 60) {
    alert ('Pensiyaga go')

}else if (number > 60 && number < 150 ) {
    alert ('Damini ol')

}else{
    console.info('Qarab yoz hato qlding gaady!')
}
 
/* var time = +prompt('Sogot nechi bo\'ldi')
if(time > 0 && time <=3 ){
    alert('sogot tungi ' + time )

}else if(time > 3 && time <= 7){
    alert('sogot tongi ' + time)

}else if(time > 7 && time <= 12) {
    alert('Soat kunduzgi ' + time)

}else if(time > 12 && time <= 17) {
    alert('Soat tushki ' + (time - 12))

}else if(time > 17 && time <= 21) {
    alert('Soat kunduzgi ' +  (time - 12))

}else if(time > 21 && time <= 23) {
    alert('Soat tungi ' +  (time - 12))

}else if(time > 24 || time <= 0) {
    alert('Soat tungi 12')

}else{
    console.error('Xato kritingiz!')
}  */




/* 
var num1 = +prompt('Birinchi soni kiriting!')
var num2 = +prompt('Ikkinchi soni kiriting!')
var num3 = +prompt('Uchinchi soni kiriting!')

if ((num2 < num1 && num1 > num3 )|| (num1 > num2 && num1 < num3)  && !isNaN(num1) && !isNaN (num2) && !isNaN(num3)){
    alert('O\'rta qiymat ' + num1)
    
}else if (num2 < num1 && num2 > num3 || (num2 > num1 && num2 < num3)  && !isNaN(num1) && !isNaN (num2) && !isNaN(num3) ){
    alert('O\'rta qiymat ' + num2)

}else if ((num3 < num1 && num3 > num2) || (num3 > num1 && num3 < num2) && !isNaN(num1) && !isNaN (num2) && !isNaN(num3)){
    alert('O\'rta qiymat ' + num3) 

}else{
   if(isNaN(num1) && isNaN(num2) && isNaN(num3)){
       console.error('Siz umuman son kiritmadingiz')
   }
 

    else if(!isNaN(num1) && isNaN(num2) && isNaN(num3)){
    console.error('ikkinchi va uchinchi soningiz son emas! ') 
    }

    else if(isNaN(num1) && !isNaN(num2) && isNaN(num3)){
    console.error('Birinchi va uchinchi soninigiz son emas!') 
    }
    
    else if(isNaN(num1) && isNaN(num2) && !isNaN(num3)){
    console.error('Birinchi va ikkinchi soninigiz son emas!') 
    }

    else if(!isNaN(num1) && !isNaN(num2) && isNaN(num3)){
        console.error('Uchinchi son emas!') 
    }

    else if(!isNaN(num1) && isNaN(num2) && !isNaN(num3)){
            console.error('ikkinchi son son emas!') 
    }

    else if(!isNaN(num1) && !isNaN(num2) && isNaN(num3)){
        console.error('Birinchi son emas!') 
    }
}
   */