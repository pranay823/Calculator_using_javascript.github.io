const display = document.querySelector(".output-container input");
buttons = document.querySelectorAll(".btn");
let output = "";
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        try{
        if(e.target.textContent === '='){
            output = eval(output);
            display.value = output;
        }
        else if(e.target.textContent === 'AC'){
            output="";
          display.value = output ;
        }
        else if(e.target.textContent === 'DE'){

         display.value = display.value.slice(0,-1);
         output = display.value;
        }
        else{

       output += e.target.textContent;
       display.value = output;
        }
    }
    catch{
        display.value = "INVALID"
    }
       
    })
});

