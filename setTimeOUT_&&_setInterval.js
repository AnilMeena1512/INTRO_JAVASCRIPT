// setTimeOut and SetInterval

  //arrow fucntion
  sum=(a,b)=>{
      return(a+b);

  }

//setTimeout

logKaro=()=>{
    console.log("I am your log")
}

setTimeout(logKaro,2000) //run the fucntion after 2 seconds
setInterval(logKaro,2000) //run the fucntion  after each 2 seconds

clr=setInterval(logKaro,2000)
