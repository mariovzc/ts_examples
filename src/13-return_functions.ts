(()=> {
  const calctotal = (prices: number[]) : number => {
    let total = 0;
    prices.forEach(item => total += item);
    return total;
  }

  console.log(calctotal([1,2,3,4]))

})()
