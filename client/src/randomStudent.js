function getRandomColor(){
    let randomNumber=Math.random();
    if(randomNumber < 0.53) return "red";  
    else if(randomNumber >= 0.53 && randomNumber < 0.81) return "yellow"; 
    else return "green"; 
  }

  export function randomizeStudent(arrayOfObjects) 