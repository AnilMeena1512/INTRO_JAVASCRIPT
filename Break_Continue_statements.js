//break statement
var arr=[1,2,3,4,5,"anil"]
for (var i=0;i<arr.length;i++){
    if(i==2){
        break;
    }
    console.log(arr[i])
}

//continue statement

var arr=[1,2,3,4,5,"anil"]
for (var i=0;i<arr.length;i++){
    if(i==2){
        continue;
    }
    console.log(arr[i])
}
