const container = document.querySelector('.snowfall'),
    cloud = document.querySelector('.cloud img'),
    button = document.querySelector('.snow-btn'),
    snow = document.querySelector('.snow img'),
    images = ['./img/snowflake1.png', './img/snowflake2.png', './img/snowflake3.png'],
    snowflakes = [];

let interval; 
let snowHeight = 90;

const fallingSnowflake = () => {
    if (snowflakes.length < 100) {
        const snowflake = document.createElement('div');
        const rotationSign = snowflakes.length % 2 - 1;
        let startPosition = 25+Math.random()*50;
        let endPosition = (startPosition-25)*2;
        if (endPosition<50) {
            endPosition+=1;
        }
        else{
            endPosition-=5;
        }


        snowflake.classList.add('snowflake');
        snowflake.style.left = (startPosition)+'%';
        snowflake.style.width = (10+Math.random()*15)+'px';
        snowflake.style.height = snowflake.style.width;
        // snowflake.style.animationDuration = (Math.random()*3+2)+'s';
        snowflake.style.transform = `rotate(-${Math.random()*360})deg`;
        snowflake.animate([
            {
                top: '90%',
                left: (endPosition)+'%',
                transform: `rotate(${rotationSign*180}deg)`
            }],
            {
                duration: (Math.random()*5+2)*1000,
                iterations: 1,
            }
            
        );


        img = snowflake.appendChild(document.createElement('img'));
        img.src = images[Math.floor(Math.random()*3)];
        container.append(snowflake);
        snowflakes.push(snowflake);
        
        if (snowHeight<250) {
            snowHeight+=0.03;
            snow.style.height = snowHeight+'px';
        }

        // snowflake.addEventListener('animationend', () => {
        //     snowflake.remove();
        //     snowflakes.splice(snowflakes.indexOf(snowflake), 1);
        // });
        
        Promise.all(
            snowflake.getAnimations({ subtree: true }).map((animation) => animation.finished),
          ).then(() => {
            snowflake.remove();
            snowflakes.splice(snowflakes.indexOf(snowflake), 1);
          });


        // setTimeout(() => {snowflake.remove();}, 6000);
    }
}

// function stopSnowfall() {
    
// }

[button, cloud].forEach(item => 
{
    console.log(item);
    console.log(window.getComputedStyle(snow).height);

    item.addEventListener('click', () => 
    {
        if (button.textContent.includes('STOP')) {
            // stopSnowfall();
            clearInterval(interval);
            button.textContent = 'LET IT SNOW!'

        }
        else {
            button.textContent = 'STOP';
            interval = setInterval(fallingSnowflake, 50);
        }
    })
})