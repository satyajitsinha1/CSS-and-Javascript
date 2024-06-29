let a = document.querySelectorAll('img')

let sat=-7

a.forEach((element,index) => {

if(index==3){

}else{

    element.style.transform = `translate(-50%, -50%) rotate(${sat}deg)`

}

sat-=7
    
});







