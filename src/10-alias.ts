(()=> {

  // alias type
  type UserId = string | number

  let user_id: UserId;



  //literal types
  type Sizes = 's' | 'm' | 'l' | 'xl'
  let shirtSize: Sizes
  shirtSize = 's'


  function greeting(user_id: UserId, size: Sizes) {
    if (typeof user_id == 'string'){
      console.log(user_id.toUpperCase())
    } else {
      console.log(user_id.toFixed());
    }
  }

})()
