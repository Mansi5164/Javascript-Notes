# Project1
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Color Scheme Switcher</title>
    <style>
        .button{
            display: inline-flex;
        }
        #grey{
            width:100px;
            height:100px;
            background-color: grey;
            border: 2px solid black;   
        }
        #white{
            width:100px;
            height:100px;
            background-color: white;
            border: 2px solid black;    
        }
        #yellow{
            width:100px;
            height:100px;
            background-color: yellow;
            border: 2px solid black;
        }
        #lightblue{
            width:100px;
            height:100px;
            background-color: rgb(129, 194, 237);
            border: 2px solid black;    
        }
    </style>
</head>
<body id="body">
    <h1 class="heading"><u>Color Scheme Switcher</u></h1>
    <div class="button" id="grey"></div>
    <div class="button" id="white"></div>
    <div class="button" id="lightblue"></div>
    <div class="button" id="yellow"></div>
    <h2>Try clicking on one of the colors above to change the background color of this page!</h2>
</body>
<script>
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((color)=>{
        color.addEventListener('click',function(i){
            console.log(i);
            console.log(i.target);
            switch(i.target.id){
                case 'grey':
                    body.style.backgroundColor = i.target.id;
                    break;
                case 'white':
                    body.style.backgroundColor = i.target.id;
                    break;
                case 'yellow':
                    body.style.backgroundColor = i.target.id;
                    break;
                case 'lightblue':
                    body.style.backgroundColor = i.target.id;
                    break;
            }
        })
    })
</script>
</html>
```