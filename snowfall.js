const snowflakeSymbols = ['❄', '✦', '✧', '✺', '✶', '❅'];
let snowfallSpeed = 100;
let fallDurationRange = {min: 5, max: 10};

function createSnowFlake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const randomSymbol = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)]; 
    snowflake.innerHTML = randomSymbol;
    snowflake.style.fontSize = Math.random() * 10 + 10 +'px';
    snowflake.style.color = 'white';
    snowflake.style.opacity = 0.8;
    const position = Math.random() * window.innerWidth + 'px';
    const fallDuration = Math.random() * (fallDurationRange.max - fallDurationRange.min) + fallDurationRange.min;
    snowflake.style.left = position;
    snowflake.style.animationDuration = fallDuration + 's';
    document.body.appendChild(snowflake);
    setTimeout(()=> {
        snowflake.remove();
    }, fallDuration * 1000);
}

function startSnowfall(){
    setInterval(createSnowFlake, snowfallSpeed);
}
startSnowfall();