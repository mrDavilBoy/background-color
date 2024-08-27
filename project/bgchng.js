const button=document.querySelectorAll(".btn");
//console.log(button);

const body=document.querySelector("body");
//console.log(body);

button.forEach(function(bt){
body.addEventListener('click',function(e){
    //console.log(e);
    //console.log(e.target);
    if(e.target.id ==="red"){
        body.style.backgroundColor="red";
    }
    if(e.target.id ==="blue"){
        body.style.backgroundColor="blue";
    }
    if(e.target.id ==="yellow"){
        body.style.backgroundColor="yellow";
    }
    if(e.target.id ==="orange"){
        body.style.backgroundColor="orange";
    }
    if(e.target.id ==="grey"){
        body.style.backgroundColor="grey";
    }
    
})

})

