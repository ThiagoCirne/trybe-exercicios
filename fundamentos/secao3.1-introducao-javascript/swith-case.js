let processo = 'aprovada';

switch (processo) {
    case 'aprovada':
      console.log("Parabén, você está no grupo de pessoas aprovadas!");
      break;
    case 'lista':     
      console.log("Você está na nossa lista de espera");
    case 'reprovada':     
      console.log("Infelizmente, você reprovou");
      break;  
    default:
        console.log("informaçao incorreta"); 
}

