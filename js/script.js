
function counterTime()  {
    let counter = 0;
    let interval = setInterval(() => {
        counter++;
        console.log(counter);
        document.getElementById("txtTime").value = counter;
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log("Acabou");
    }, 10000);

    return interval;

    
}

    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", e => {
    console.log("clicou");
    counterTime();
    
} );


 

