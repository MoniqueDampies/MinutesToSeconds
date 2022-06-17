function secConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("inputMinutes").value = valNum/60;}

function minConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("inputSeconds").value = valNum*60;}