// JSON

obj={name:"anil",height:"175cm",a:{this:'tha\'t'}}
jso=JSON.stringify(obj)
// console.log(typeof(obj))
// console.log((jso))
// console.log(typeof(jso))
parsed=JSON.parse(`{"name":"anil","height":"175cm","a":{"this":"tha't"}}`)
console.log(parsed)
