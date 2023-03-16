let string = "";
let  buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
  button.addEventListener("click", (e)=>{
    if(e.target.innerHTML == "="){
      string = eval(string);
      document.getElementById("input").value = string;
    }
    else if(e.target.innerHTML == "DEL"){
      string = string.substring(0, string.length-1);
      document.getElementById("input").value = string;
    }
    else if(e.target.innerHTML == "AC"){
      string = "";
      document.getElementById("input").value = string;
    }
    else{
      console.log(e.target);
      string += e.target.innerHTML;
      document.getElementById("input").value = string;
    }
  })
})

const bgColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

changeBg.addEventListener("click", bgColor);
setBg();