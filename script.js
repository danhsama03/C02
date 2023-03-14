function roll() {
    var input = document.getElementById("min");
    var min = Number(input.value);
    var input2 = document.getElementById("max");
    var max = Number(input2.value);
    if (max <= min) {
        console.log("Hay nhap so khac");
    }
    else {
        var ramDomNumBer = Math.floor(Math.random() * (max - min + 1)) + min;
        var resuilt = ramDomNumBer;
        var p = document.getElementById("result");
        p.innerHTML = String(resuilt);
    }
}
