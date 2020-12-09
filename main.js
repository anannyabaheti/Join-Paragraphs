
function getpara1p(){
    var paragraph_input=[];
    for (var i=1; i<=6; i++){
     paragraph_input.push(document.getElementById("text_input_box_"+i).value);
     
    }
    document.getElementById("showtext_here").innerHTML=paragraph_input.join(".");
}
function getpara2p(){
    var paragraph1_input=[];
    for (var i=1; i<=6; i++){
     paragraph1_input.push(document.getElementById("text_input_box"+i).value);
     
    }
    document.getElementById("showtext_here1").innerHTML=paragraph1_input.join(".");
}