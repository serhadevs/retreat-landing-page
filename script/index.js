function agenda(e){
    var x = parseInt(e);
    if(x ==1 ){
        if(document.getElementById('agenda-content-1').style.display != "none"){
            document.getElementById('agenda-content-1').style.display="none";
            document.getElementById('agenda-content-2').style.display="none";
            document.getElementById('agenda-content-3').style.display="none";
        }else{
            document.getElementById('agenda-content-1').style.display="block";
            document.getElementById('agenda-content-2').style.display="none";
            document.getElementById('agenda-content-3').style.display="none";
        }
    }

    if(x ==2 ){
        if(document.getElementById('agenda-content-2').style.display != "none"){
            document.getElementById('agenda-content-1').style.display="none";
            document.getElementById('agenda-content-2').style.display="none";
            document.getElementById('agenda-content-3').style.display="none";
        }else{
            document.getElementById('agenda-content-2').style.display="block";
            document.getElementById('agenda-content-1').style.display="none";
            document.getElementById('agenda-content-3').style.display="none";
        }
    }

    if(x==3){
        if(document.getElementById('agenda-content-3').style.display != "none"){
            document.getElementById('agenda-content-1').style.display="none";
            document.getElementById('agenda-content-2').style.display="none";
            document.getElementById('agenda-content-3').style.display="none";
        }else{
            document.getElementById('agenda-content-3').style.display="block";
            document.getElementById('agenda-content-1').style.display="none";
            document.getElementById('agenda-content-2').style.display="none";
        } 
    }
}

function navbarShow(){
    const x = document.querySelector('.nav-x-svg');
    const y = document.querySelector('.nav-hamburger-svg');
    document.getElementById("nav-menu").style.display = "block";
    y.style.display="none";
    x.style.display="block";
}

function navbarHide(){
    const x = document.querySelector('.nav-x-svg');
    const y = document.querySelector('.nav-hamburger-svg');
    document.getElementById("nav-menu").style.display = "none";
    y.style.display="block";
    x.style.display="none";
}
