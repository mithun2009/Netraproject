function updateCurrentTime(){
    const now=new Date();
    const timeString=now.toLocaleTimeString();
    document.getElementById('current-time').textContent=timeString;
}
setInterval(updateCurrentTime,1000);
updateCurrentTime();