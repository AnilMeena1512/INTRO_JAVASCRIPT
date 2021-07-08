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
        <button id="click" onclick="clicked()">click me</button>
    </div>
    <div class="container">
        <p>this is a paragraph</p>
    </div>
    <script>
        function clicked(){
            console.log("the button was clicked")
        }
        window.onload=functon(){
            console.log("the page was loaded")
        }
        firstContainer.addEventListener('click',function(){
            document.querySelectorAll(".container")[1].innerHTML="<b>WE have clicked</b>"
        })
        firstContainer.addEventListener('mouseon',function(){
            console.log("The mouse on container")
        })

        firstContainer.addEventListener('mouseout',function(){
            console.log("The mouse is't on container")
        })
        
        prevHTML=document.querySelectorAll(".container")[1].innerHTML
        firstContainer.addEventListener('mouseup',function(){
            document.querySelectorAll(".container")[1].innerHTML=prevHTML
            console.log("mouse up  when clicked on container")
        })

        firstContainer.addEventListener('mousedown',function(){
            document.querySelectorAll(".container")[1].innerHTML="<b>WE have clicked</b>"
            console.log("mouse down when clicked on  container")
        })
    </script>
    
</body>
</html>
