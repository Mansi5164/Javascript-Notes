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
# Project2

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>BMI Calculator</title>
</head>
<body>
    <h1>BMI Calculator</h1>
    <form method="get" id="form">
        <p>Height in CM : <input type="text" id="height" placeholder="enter height" /></p>
        <p>Weight in KG : <input type="text" id="weight" placeholder="enter weight" /></p>
        <button type="submit">Calculate</button>
        <div id="result"></div>
    </form>
</body>
<script>
    
    const form = document.getElementById('form');
    form.addEventListener('submit',function(i){
        i.preventDefault()
        const height = parseInt(document.getElementById('height').value)
        const weight = parseInt(document.getElementById('weight').value);
        const result = document.getElementById('result');
        result.innerHTML='';
        if(height <= 0 || isNaN(height)){
            result.innerHTML = "Please give a valid height";
            return;
        }
        if(weight <= 0 || isNaN(weight)){
            result.innerHTML = "Please give a valid height";
            return;
        }
        
        const bmi = (weight /((height*height)/10000)).toFixed(2);
            //show the result
            result.innerHTML = `Your bmi is${bmi}`;
    })
        
/*
    const form = document.querySelector('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const result = document.querySelector('#result');
        if( height <= 0 || isNaN(height)){
            result.innerHTML = "Please give a valid height";
            return;
        }
        if( weight <= 0 || isNaN(weight)){
            result.innerHTML = "Please give a valid height";
            return;
        }
        else{
            const bmi = (weight /((height*height)/10000)).toFixed(2);
            //show the result
            result.innerHTML = `Your bmi is <h3>${bmi}</h3>`;
        }

    })
        */
</script>
</html>


```