window.onload=function () {
    onload1();
    onload2();
    onload3();
}

function onload1 () {
    var btn0=document.getElementsByClassName("btn")[0];
    var btn1=document.getElementsByClassName("btn")[1];
    var btn2=document.getElementsByClassName("btn")[2];
    var btn3=document.getElementsByClassName("btn")[3];
    var btn4=document.getElementsByClassName("btn")[4];
    var btn5=document.getElementsByClassName("btn")[5];
    var btn6=document.getElementsByClassName("btn")[6];
    var btn7=document.getElementsByClassName("btn")[7];
    var btn8=document.getElementsByClassName("btn")[8];
    
    var popUp0=document.getElementsByClassName("popUp")[0];
    var popUp1=document.getElementsByClassName("popUp")[1];
    var popUp2=document.getElementsByClassName("popUp")[2];
    var popUp3=document.getElementsByClassName("popUp")[3];
    var popUp4=document.getElementsByClassName("popUp")[4];
    var popUp5=document.getElementsByClassName("popUp")[5];
    var popUp6=document.getElementsByClassName("popUp")[6];
    var popUp7=document.getElementsByClassName("popUp")[7];
    var popUp8=document.getElementsByClassName("popUp")[8];

    var close0=document.getElementsByClassName("close")[0];
    var close1=document.getElementsByClassName("close")[1];
    var close2=document.getElementsByClassName("close")[2];
    var close3=document.getElementsByClassName("close")[3];
    var close4=document.getElementsByClassName("close")[4];
    var close5=document.getElementsByClassName("close")[5];
    var close6=document.getElementsByClassName("close")[6];
    var close7=document.getElementsByClassName("close")[7];
    var close8=document.getElementsByClassName("close")[8];

    btn0.onclick=function () {
        popUp0.style.display="block";
    }
    close0.onclick=function () {
        popUp0.style.display="none";
    }

    btn1.onclick=function () {
        popUp1.style.display="block";
    }
    close1.onclick=function () {
        popUp1.style.display="none";
    }

    btn2.onclick=function () {
        popUp2.style.display="block";
    }
    close2.onclick=function () {
        popUp2.style.display="none";
    }

    btn3.onclick=function () {
        popUp3.style.display="block";
    }
    close3.onclick=function () {
        popUp3.style.display="none";
    }

    btn4.onclick=function () {
        popUp4.style.display="block";
    }
    close4.onclick=function () {
        popUp4.style.display="none";
    }

    btn5.onclick=function () {
        popUp5.style.display="block";
    }
    close5.onclick=function () {
        popUp5.style.display="none";
    }

    btn6.onclick=function () {
        popUp6.style.display="block";
    }
    close6.onclick=function () {
        popUp6.style.display="none";
    }

    btn7.onclick=function () {
        popUp7.style.display="block";
    }
    close7.onclick=function () {
        popUp7.style.display="none";
    }

    btn8.onclick=function () {
        popUp8.style.display="block";
    }
    close8.onclick=function () {
        popUp8.style.display="none";
    }

    window.onclick=function (event) {
        if(event.target == popUp0){
        popUp0.style.display="none";
        } else if (event.target == popUp1){
        popUp1.style.display="none";
        } else if (event.target == popUp2){
        popUp2.style.display="none";
        } else if (event.target == popUp3){
        popUp3.style.display="none";
        } else if (event.target == popUp4){
        popUp4.style.display="none";
        } else if (event.target == popUp5){
        popUp5.style.display="none";
        } else if (event.target == popUp6){
        popUp6.style.display="none";
        } else if (event.target == popUp7){
        popUp7.style.display="none";
        } else if (event.target == popUp8){
        popUp8.style.display="none";
        }
    }
}

function onload2 () {
    let arrowRight=document.getElementsByClassName("arrowRight")[0];
    let arrowLeft=document.getElementsByClassName("arrowLeft")[0];
    
    let vidId=2;
    let i=0;

    arrowRight.onclick=function(){
        if (i<vidId) {
            document.getElementsByClassName("musicVids")[i+1].style.display="block";
            document.getElementsByClassName("musicVids")[i].style.display="none";
            document.getElementsByClassName("musicVids")[i].
            getElementsByTagName("iframe")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            i++;
        } else {
            document.getElementsByClassName("musicVids")[0].style.display="block";
            document.getElementsByClassName("musicVids")[2].style.display="none";
            document.getElementsByClassName("musicVids")[2].
            getElementsByTagName("iframe")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            i=0;
        }
    }

    arrowLeft.onclick=function(){
        if (i>0) {
            document.getElementsByClassName("musicVids")[i-1].style.display="block";
            document.getElementsByClassName("musicVids")[i].style.display="none";
            document.getElementsByClassName("musicVids")[i].
            getElementsByTagName("iframe")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            i--;
        } else {
            document.getElementsByClassName("musicVids")[2].style.display="block";
            document.getElementsByClassName("musicVids")[0].style.display="none";
            document.getElementsByClassName("musicVids")[0].
            getElementsByTagName("iframe")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            i=2;
        }
    }
}

function onload3 () {
    let introArrowRight=document.getElementsByClassName("introArrowRight")[0];
    let introArrowLeft=document.getElementsByClassName("introArrowLeft")[0];
    
    let boxId=2;
    let i=0;

    introArrowRight.onclick=function(){
        if (i<boxId) {
            document.getElementsByClassName("intro-imageAndText")[i+1].style.display="block";
            document.getElementsByClassName("intro-imageAndText")[i].style.display="none";
            i++;
        } else {
            document.getElementsByClassName("intro-imageAndText")[0].style.display="block";
            document.getElementsByClassName("intro-imageAndText")[2].style.display="none";
            i=0;
        }
    }

    introArrowLeft.onclick=function(){
        if (i>0) {
            document.getElementsByClassName("intro-imageAndText")[i-1].style.display="block";
            document.getElementsByClassName("intro-imageAndText")[i].style.display="none";
            i--;
        } else {
            document.getElementsByClassName("intro-imageAndText")[2].style.display="block";
            document.getElementsByClassName("intro-imageAndText")[0].style.display="none";
            i=2;
        }
    }
}