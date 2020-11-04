function header() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function plan(){ 
  if ( !document.detail.goalamount.value == "" && !document.detail.invamount.value == "" )
  document.getElementById("result").style.display = "block";

  var gamt = document.getElementById("goalamount").value;
  var iamt = document.getElementById("invamount").value;
  var roi =[3.5,5.5,8,16,9,12,8,8];
  
  // if( document.getElementById("type").value)
  for(var i=0;i<8;i++)
  {
  var y =(Math.log(gamt / iamt) / Math.log(1 + roi[i]/ 100));
  var m = ((y-Math.floor(y)) * 12).toFixed(0);
  y=Math.floor(y);
  
  var goal=document.getElementById(i+1+"G");
  goal.textContent="Goal Amount : "+gamt;

  var res1=document.getElementById(i+1+"A");
  res1.textContent="Total Amount invested : "+iamt;
  
  var res2=document.getElementById(i+1+"B");
  res2.textContent="Earned Interest : "+(gamt-iamt);
  
  var res3=document.getElementById(i+1+"C");
  res3.textContent="Time taken :"+y+" years  and "+m+"months";
  }


}