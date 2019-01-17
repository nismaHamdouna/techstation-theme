
// Copyright protection //

$(document).on("contextmenu",function(e){ // Disable right click 
   e.preventDefault();
}); // End 

document.onkeydown = function(b) { // Disable  Ctrl + I U S P X A O V C, for view source //

        if (b.ctrlKey && 
            (b.keyCode === 85  || // u
             b.keyCode === 80  || // p
             b.keyCode === 83  || // s
             b.keyCode === 73  || // i
             b.keyCode === 79  || // o
             //b.keyCode === 86  || // v
             b.keyCode === 88  || // x
             b.keyCode === 67  || // c
             b.keyCode === 65  || // a
             b.keyCode === 116 || // a
             b.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(b) {

    if(b.ctrlKey)
   {
    return false;
   }
else
   {
   return true;
   }
}); // End 

$(document).keydown(function(event){ // Disable F12
    if(event.keyCode==123){
    return false;
   }
else if(event.ctrlKey && event.shiftKey && event.keyCode==73){        
      return false;  //Prevent from ctrl+shift+i
   }
}); // End 



