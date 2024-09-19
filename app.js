let btn1 = document.getElementById("myButton1")
let btn2 = document.getElementById("myButton2")
let copyDiv=document.querySelector(".copyCode")

let rgb1="#000";
let rgb2="#fff";
const hexValues = () => {
    let myHexaCode = "0123456789abcdef"
    let color = "#"
    for (let i = 1; i <= 6; i++) {

        color = color + myHexaCode[Math.floor(Math.random() * 16)];
    }
    return color;
}


const handleButton1 = () => {
    btn1.innerText=rgb1;
   
   rgb1 = hexValues();
    console.log(rgb1);
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`

    copyDiv.innerHTML=`background-image:linear-gradient(to right, ${rgb1},${rgb2})`
}


const handleButton2 = () => {
    btn2.innerText=rgb2;
   rgb2 = hexValues();
    console.log(rgb2);
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb2},${rgb1})`

          copyDiv.innerHTML=`background-image:linear-gradient(to right, ${rgb1},${rgb2})`
}





btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);