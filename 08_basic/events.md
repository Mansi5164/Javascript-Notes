# Project 1

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>Chai aur code </h1>
    <button id="stop">Stop</button>
</body>
<script>
    /*
    setTimeout(function(){
        console.log("Hitesh");
    },2000)
    */
    const sayHitesh = function(){
        console.log("Hitesh");
    }
    const changeText = function(){
        document.querySelector('h1').innerHTML = "Best JS series";
    }
    const changeMe = setTimeout(changeText,2000); 
    document.getElementById('stop').addEventListener('click',function(){
        clearTimeout(changeMe);
        console.log("STOPPED");
    })
</script>
</html>
```

# Project 2
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>Chai aur Javascript</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
    let IntervalId;
    const func = function(){
        console.log("Hi",Date.now());
    }
    document.getElementById('start').addEventListener('click',function(){
        IntervalId = setInterval(func,1000);
    })
    document.getElementById('stop').addEventListener('click',function(){
        clearInterval(IntervalId);
        console.log("stopped");
    })
</script>
</html>
```

# Project 3

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>Start should change the background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
    //generate a random color 
    const randomColor = function(){
        const hexValue = "0123456789ABCDEF";
        let color = '#';
        for(var i = 0; i <= 5;i++){
            color += hexValue[Math.floor(Math.random() * 16)];
        }
        return color ;
    }
    let IntervalId;
    const startChangingColor = function(){
        if(!IntervalId){
            IntervalId = setInterval(changeBgColor,1000);
        }

        function changeBgColor(){
            document.body.style.backgroundColor = randomColor();
        }
    };
    const stopChangingColor = function(){
        clearInterval(IntervalId);
        IntervalId = null;
    };

    document.getElementById('start').addEventListener('click',startChangingColor);

    document.getElementById('stop').addEventListener('click',stopChangingColor);

</script>
</html>
```


# Project 4


```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="https://www.youtube.com/watch?v=efrW5-IYoCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=38">Youtube Channel</a>
    </nav>
    <div class="project">
        <div id="insert">
            <div class="key">Press the key and watch magic</div>
        </div>
    </div>
</body>
<script>
    const insert = document.getElementById('insert');

    window.addEventListener('keydown',(e)=>{
        insert.innerHTML = `
            <div class='color'>
                <table>
                    <tr>
                        <th>key</th>
                        <th>KeyCode</th>
                        <th>Code</th>
                    </tr>
                    <tr>
                        <td>${e.key === " " ? "space" : e.key}</td>
                        <td>${e.keyCode}</td>
                        <td>${e.code}</td>
                    </tr>
                </table>
            </div>
        `;
    })
</script>
</html>
```