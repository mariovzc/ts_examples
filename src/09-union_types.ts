(()=> {
  let user_id: string | number;

  user_id = 123;
  user_id = "123";

  function greeting(myText: string | number) {
    if (typeof myText == 'string'){
      console.log(myText.toUpperCase())
    } else {
      console.log(myText.toFixed());
    }
  }

  greeting("asd")
  greeting(123.9)
})()
