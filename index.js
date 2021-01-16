let menubtn = document.getElementById('menubtn') 
let slidebar = document.getElementById('slidebar') 
let menu = document.getElementById('menu')
slidebar.style.right="-250px"
menubtn.onclick=function(){
    if(slidebar.style.right =="-230px"){
        slidebar.style.right="0";
        menu.src='img/close.png';
    }
    else{
        slidebar.style.right ="-230px";
        menu.src='img/list.png';
    }
    

} 