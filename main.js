// JavaScript Document
// JavaScript Document
/*
JavaScript document
document,write,getElementById,querySelector
for,var,let,const,add,style,
eventListener,classList,parentElement
children,nextElementSibling
previousElementSibling
querySelectorAll,getElementsByTagName
createElement,createTextNode,appendChild
removeChild,insertBefore,function
innerHTML,Math,sqrt,pow,random,floor,ceil
max,date new Date(),object,array,
date.get FullYear,Month,Hours,Minutes
Day,constractor,pop,push,shift,unshift
splice,slice,sort,href,protocol,hostname,port,pathname,break,continue,while,do
if,else if,else,switch,case,default,
Number,parseInt,prompt,parseFloat,toString()
toFixed,toPrecision,length,charAt,
toUpperCase,concat,addEventListener
background,color,this,textAlign,style,mouseover,mouseout
click,textContent,string,typeof,result,window,location,alert,setInterval,setTimeout
attribute*/


window.addEventListener("resize",function(){
   let h1 = document.querySelector("h1");
   h1.style.color="red";
   //h1.innerHTML="Hey there please careful while using this site...";
   var height =window.innerHeight;
   var width =window.innerWidth;
   h1.innerHTML=`Height = ${height} and Width = ${width}`;
   
   
});


var details =document.querySelector("details");
var summary =document.querySelector("summary");

var count =0;
details.addEventListener("toggle",function(){
   count++;
   if(count==1){
      alert("U have clicked a button...");
   }
   else{
      count=0;
      
   }
});


// focus event

const input = document.querySelector("input");
input.addEventListener("focus",function(){
   let NameMsg =document.getElementById("NameMsg");
   //NameMsg.innerHTML="Focussed!";
   
});

input.addEventListener("blur",function(e){
   let NameMsg =document.getElementById("NameMsg");
   //NameMsg.innerHTML="Blurred!";
   
   
});

input.addEventListener("blur",function(e){
   let message =document.getElementById("message");
   message.innerHTML=e.target.value;
   var text =["A","B"];
   for(i=0;i<text.length;i++){
      if(e.target.value === text[i] ){
      message.innerHTML="✅";
   }
      else{
      message.innerHTML="Not Valid ❌";
      const form = document.querySelector("form");
      form.addEventListener("submit",function(){
         var name =document.querySelector("#name");
         name.setAttribute(required);
      });
      
   }
   
   }
   
});


// copy,cut,paste
window.addEventListener("",function(){
   alert("You have copied some text...");
});

// BOM

{
   let x = window.location.href;
   //document.write(x);
   var bom =document.querySelector("#bom");
   // bom.innerHTML=x;
}


// popUp Boxes
// alert,prompt,confirm


/*var cnf = confirm("Are you sure?");
if(cnf === true){
   document.write("Deleted");
   var cb =document.querySelector("#confirmBtn");
   //cb.innerHTML="Deleted":
}
else{
   document.write("Not Deleted");
   var confirmBtn =document.querySelector("#confirmBtn");
   //confirmBtn.innerHTML="Not Deleted";
}*/

// Timing event



/*setTimeout(()=>{
   document.write("Hello im Timing event");
},2000);
*/
// setInterval

/*function time(){
   var date =new Date();
   var seconds =date.getSeconds();
   document.write(seconds);
}



setInterval(()=>{
   time(y);
},1000);


*/

   function time(){
      var date =new Date();
      var seconds =date.getSeconds();
      var saveBtnMsg =document.querySelector("#saveBtnMsg");
      saveBtnMsg.innerHTML=seconds;
      
      setInterval(time,500);
   }

time();

// Try catch



{
   document.querySelector("#check").addEventListener("click",open);

   
  
   function open(){
      var num =document.querySelector("#text").value;
      var textMsg =document.querySelector("#textMsg");
   
      // alert("hi");
      try{
      if(num < 5){
         throw "Wrong input1"
      }
      else if(num > 10){
         throw "Wrong input2"
      }
      else{
         throw "Okey"
      }
   }catch(err){
      // document.write(err);
      textMsg.innerHTML=err;
   }
   
   }
   
}









