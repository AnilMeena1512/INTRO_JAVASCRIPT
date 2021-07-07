//loop in JavaScript

//for loop

var arr=[1,2,3,4,5,"anil"]
console.log(arr)

for (var i=0;i<arr.length;i++){
    console.log(arr[i])
}

arr.forEach(function(element){
    console.log(element)
})

//while loop

let j=0;
while(j<arr.length){
    console.log(arr[j])
    j++;
}
