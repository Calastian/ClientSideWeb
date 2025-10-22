(function startClock() {
    //In the function below, replace the words anonymous_function
    //with an actual anonymous function using arrow notation then
    //make startClock run using IIFE.
    setInterval(() => {
        UpdateTime();
    }, 1000);

})();




function UpdateTime() {
    document.getElementById("timeheader").innerHTML = getTime();
}

function getTime() {
    let currentdate = new Date();
    let currenttime = Math.abs(currentdate.getHours() - 12) + ":" + currentdate.getMinutes().toString().padStart(2, '0') + ":" + currentdate.getSeconds().toString().padStart(2, '0');
    return currenttime;
}
