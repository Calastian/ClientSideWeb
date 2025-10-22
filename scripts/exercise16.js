function UpdateTime()
{
    document.getElementById("clock").innerHTML = getTime();
}

function getTime()
{
    let currentdate = new Date();
    let currenttime = Math.abs(currentdate.getHours() - 12).toString().padStart(2,"0") + ":" + currentdate.getMinutes().toString().padStart(2, '0') +  ":" + currentdate.getSeconds().toString().padStart(2, '0');
    return currenttime;
}

function getTimeMili()
{
    let currentdate = new Date();
    let currenttime = Math.abs(currentdate.getHours()).toString().padStart(2,"0") + ":" + currentdate.getMinutes().toString().padStart(2, '0') +  ":" + currentdate.getSeconds().toString().padStart(2, '0');
    return currenttime;
}

function UpdateTimeMili()
{
    document.getElementById("time").innerHTML = getTimeMili();
}