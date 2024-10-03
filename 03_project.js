const clocks = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clocks.innerHTML = date.toLocaleTimeString()
},1000);

