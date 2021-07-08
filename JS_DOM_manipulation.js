<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript</title>
<style>
    .bg-primary{
        background-color: yellow;
    }
</style>
</head>
<body>
    <h1>let's begin journy in JavaScript world</h1>
    <div id ="firstContainer" class="container">
        <button id="click">click me</button>
    </div>
    <div class="container">
        <p>this is a paragraph</p>
    </div>
    <script>
        let elem=document.getElementById("click")
        console.log(elem)

        elemClass=document.getElementsByClassName("container")
        elemClass.style.background="yellow"
        elemClass[0].classlist.add("bg-primary")
        elemClass[0].classlist.remove("bg-primary")
        elemClass[0].innerHTML
        elemClass[0].innerText
        tn=document.getElementsByTagName("div")
        createdElement=document.createElement('p')
        createdElement.innerText="this is a created element"
        createdElement2=document.createElement('b')
        createdElement2.innerText="this is a created bold"
        tn[0].replaceChild(createdElement2,createElement)

        //selecting using query

        sel=document.querySelector(".container")  //returs first element with id container
        console.log(sel)
        sel=document.querySelectorAll(".container") //returs all elements with id container
        console.log(sel)
