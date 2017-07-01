document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
var btn=document.getElementsByClassName('btn');
for (i=0;i<9; i++){
    btn[i].value=i+1;
}
{ btn[9].value=0;
 btn[10].value='/';
 btn[11].value='*';
 btn[12].value='+';
 btn[13].value='-';
 btn[14].value='c';
 btn[15].value='=';
 btn[16].value='.';
}


var check2 = true;
var mainField = document.getElementById('box');
var check = true;
function fillTheField(gm,calc){
if (calc){
    if (mainField.value != 0 && mainField.value != '' ) {
        if(check2){
            mainField.value += gm;
            check = true;
            check2 = false;
        }
        else{
            mainField.value = mainField.value.slice(0,-1)+gm;
        }
    }    
}
else{
    if(check){
    if (mainField.value != 0) {
        mainField.value += gm;
        check2 = true;
    }
    else {
        mainField.value = gm;
        check2 = true;
    }
}
else{
        mainField.value = gm;
        check2 = true;
        
        check = true;
} 
}
}
function Clear(){
     mainField.value = 0 ;
}
function equal(){
     check = false;
     mainField.value = eval(mainField.value);
}
function backspace(){
    if(mainField.value.length>1){
    mainField.value = mainField.value.slice(0,-1);
    }
    else{
        mainField.value=0;
    }
}
Clear()
document.addEventListener("keyup", gm);
function gm(key){
     //alert(key.keyCode)
     if(key.keyCode == '48'){
        fillTheField(0);
    }
    else if(key.keyCode == '49'){
        fillTheField(1);
    }
    else if(key.keyCode == '50'){
        fillTheField(2);
    }
    else if(key.keyCode == '51'){
        fillTheField(3);
    }
    else if(key.keyCode == '52'){
        fillTheField(4);
    }
    else if(key.keyCode == '53'){
        fillTheField(5);
    }
    else if(key.keyCode == '54'){
        fillTheField(6);
    }
    else if(key.keyCode == '55'){
        fillTheField(7);
    }
    else if(key.which == '56'){
        if(key.keyCode== '16'){
        fillTheField('*');            
        }
        else{
        fillTheField(8);           
        }
    }
    else if(key.keyCode == '57'){
        fillTheField(9);
    }
    else if((key.keyCode == '88'||key.keyCode == '56')){
        fillTheField('*',true);
    }
    else if(key.keyCode == '61'){
        fillTheField('+',true);
    }
    else if(key.keyCode == '173'){
        fillTheField('-',true);
    }
    else if(key.keyCode == '191'){
        fillTheField('/',true);
    }
    else if(key.keyCode == '190'){
        fillTheField('.',true);
    }
    
    else if(key.keyCode == '110'){
        fillTheField('.',true);
    }
    else if(key.keyCode == '13'){
        equal()
    }
    else if(key.keyCode == '46'){
        Clear()
    }
    else if(key.keyCode == '8'){
        backspace()
    }
    
}
document.onkeydown = function (e) {
    if(e.keyCode == '191'){
        return false;
    }
}
document.addEventListener("copy", function(e){
    e.clipboardData.setData ('text/plain',box.value);
    e.preventDefault()
});
document.addEventListener('paste', function (evt) {
  var paste=(evt.clipboardData.getData('text/plain'));
  var chkPaste = true;
  for(i=0;i<paste.length;i++){
        var str=paste.slice(i,i+1);
        if (str!=0&&str!=1&&str!=2&&str!=3&&str!=4&&str!=5&&str!=6&&str!=7&&str!=1&&str!=8&&str!=9&&str!='.'){
            chkPaste=false;
        }
  }
  if(chkPaste){
     check2 = true;     
     if(box.value!=0&&box.value!=''){
          box.value+=paste;
     }
     else{
         box.value=paste;
     }
  }
//   if(typeof paste=='number'){
//     box.value +=paste;      
//   }
//   else{
//       alert(typeof paste)
//   }
});
// function(e){
//     e.clipbordData.setData ('text/plain',box.value);
//     e.preventDefault()
// }