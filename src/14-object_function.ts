(()=> {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password)
  }

  login({email: "a@a.com", password: "1234"})
})()
