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
    // alert("test");
}

function navbar(){
    var check_nav = document.querySelector("input[name=nav-checkbox]");

    if(check_nav.checked){
        document.getElementById("nav-menu").style.display="block";
    }else{
        document.getElementById("nav-menu").style.display="none";
    }
}