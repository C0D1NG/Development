let screen=document.getElementById("screen");
let buttonlist=document.getElementsByTagName("button");
// console.log(buttonlist,screen);
let screenvalue="";
 for(let items of buttonlist){
    

    items.addEventListener("click",()=>{
        // console.log("clicked");
        let buttonval=items.innerHTML;
        
        if(buttonval=='X'){
            buttonval='*';
            screenvalue+=buttonval;
            screen.value=screenvalue;
        }
        else if(buttonval=='C'){
            screenvalue="";
            screen.value=screenvalue;

        }
        else if(buttonval=='='){
            screen.value=eval(screenvalue);
            screenvalue="";

        }
        else{
            screenvalue+=buttonval;
            screen.value=screenvalue;
        }

    })
 }