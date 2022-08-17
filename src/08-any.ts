(()=> {
  let mydinamicVar: any;

  mydinamicVar = "hola";

  const rta : string = (mydinamicVar as string).toLowerCase();

  mydinamicVar = 24;
  const rta2 = (<number>mydinamicVar).toFixed();


})()
