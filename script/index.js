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