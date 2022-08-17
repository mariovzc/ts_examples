(() => {
  let isEnabled = false;
  let isEnabled2: boolean = false;

  let isNew: boolean = false;
  console.log('isNew', isNew)
  isNew = true;
  console.log('isNew', isNew)

  const random = Math.random()
  console.log(random)
  isNew = random >= 0.05

})()
