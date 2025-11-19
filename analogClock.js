function time(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const secondsDegree = (seconds / 60) * 360;
    const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegree = (hour % 12) / 12 * 360 + (minutes / 60) * 30;
    /*document.querySelector('.second-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${secondsDegree}deg)`;
    document.querySelector('.min-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${minutesDegree}deg)`;
    document.querySelector('.hour-hand').style.transform*/
}
setInterval(time, 1000);
