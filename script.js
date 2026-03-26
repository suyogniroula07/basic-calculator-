window.onload = function() {
    const display = document.getElementById("display");

    document.getElementById("btn0").onclick = () => display.value += "0";
    document.getElementById("btn1").onclick = () => display.value += "1";
    document.getElementById("btn2").onclick = () => display.value += "2";
    document.getElementById("btn3").onclick = () => display.value += "3";
    document.getElementById("btn4").onclick = () => display.value += "4";
    document.getElementById("btn5").onclick = () => display.value += "5";
    document.getElementById("btn6").onclick = () => display.value += "6";
    document.getElementById("btn7").onclick = () => display.value += "7";
    document.getElementById("btn8").onclick = () => display.value += "8";
    document.getElementById("btn9").onclick = () => display.value += "9";

    
    document.getElementById("plus").onclick = () => display.value += "+";
    document.getElementById("minus").onclick = () => display.value += "-";
    document.getElementById("multiply").onclick = () => display.value += "*";
    document.getElementById("divide").onclick = () => display.value += "/";
    document.getElementById("percent").onclick = () => display.value += "%";
    document.getElementById("dot").onclick = () => display.value += ".";

 
    document.getElementById("clear").onclick = () => display.value = "";
    document.getElementById("delete").onclick = () => display.value = display.value.slice(0,-1);

    document.getElementById("equal").onclick = () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    };

    document.getElementById("brackets").onclick = () => {
        const text = display.value;
        let open = 0;
        if(text.includes("(")) open = (text.split("(").length - 1);

        let close = 0;
        if(text.includes(")")) close = (text.split(")").length - 1);

        if(open === close){
            display.value += "(";
        } else {
            display.value += ")";
        }
    };
};