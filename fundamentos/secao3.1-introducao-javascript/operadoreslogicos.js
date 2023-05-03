let currenHour = 14;
let message;

if (currenHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
    console.log(message);
    
} else if (currenHour < 22 && currenHour >= 18) {
    message ="Rango da noite, vamos jantar :D";
    console.log(message);

} else if(currenHour < 18  && currenHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);
} else if (currenHour < 14  && currenHour >= 11) {
    message = "Hora do almoço!!!";
    console.log(message);
} else (currenHour > 4 && currenHour < 11) 
    message = "Hmmm, cheiro de café recém-passado";
    



