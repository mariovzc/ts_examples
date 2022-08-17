(()=> {

  type Login = {email: string, password: string}

  const login = (data: Login) => {
    console.log(data.email, data.password)
  }

  login({email: "a@a.com", password: "1234"})
})()
