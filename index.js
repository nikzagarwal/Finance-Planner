function header() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function sipcall() {
  // if(document.getElementById("stepsip").style.display=="none")
  document.getElementById("stepsip").style.display = "block";
  // else
  // document.getElementById("stepsip").style.display="none";
}

function plan() {
  if (!document.detail.goalamount.value == "" && !document.detail.invamount.value == "")
    document.getElementById("result").style.display = "block";

  var gamt = document.getElementById("goalamount").value;
  var iamt = parseFloat(document.getElementById("invamount").value);
  var roi = [3.5, 5.5, 8, 16, 9, 12, 8, 8];

  if (document.getElementById("type").value == "One-Time")
    for (var i = 0; i < 8; i++) {
      var y = (Math.log(gamt / iamt) / Math.log(1 + roi[i] / 100));
      var m = ((y - Math.floor(y)) * 12).toFixed(0);
      y = Math.floor(y);

      var goal = document.getElementById(i + 1 + "G");
      goal.textContent = "Goal Amount : " + gamt;

      var res1 = document.getElementById(i + 1 + "A");
      res1.textContent = "Total Amount invested : " + iamt;

      var res2 = document.getElementById(i + 1 + "B");
      res2.textContent = "Earned Interest : " + (gamt - iamt);

      var res3 = document.getElementById(i + 1 + "C");
      res3.textContent = "Time taken :" + y + " years  and " + m + "months";
    }

  if (document.getElementById("type").value == "Sip")
    for (var i = 0; i < 8; i++) {
      var r = roi[i] / 1200;

      var m = Math.ceil(Math.log((gamt * r / iamt / (1 + r)) + 1) / Math.log(1 + r));
      var y = Math.floor(m / 12);
      m = m % 12;
      var goal = document.getElementById(i + 1 + "G");
      goal.textContent = "Goal Amount : " + gamt;

      var res1 = document.getElementById(i + 1 + "A");
      res1.textContent = "Total Amount invested : " + (iamt * (12 * y + m));

      var res2 = document.getElementById(i + 1 + "B");
      res2.textContent = "Earned Interest : " + (gamt - iamt * (12 * y + m));

      var res3 = document.getElementById(i + 1 + "C");
      res3.textContent = "Time taken :" + y + " years  and " + m + "months";
    }

  if (document.getElementById("type").value == "Step-Sip")
    for (var i = 0; i < 8; i++) {
      var r = roi[i] / 1200;
      var a = 0;
      var count = 0;
      var m = 0;
      var siprate = document.getElementById("sip%").value;
      var iamttemp = iamt;
      var total = 0;
      while (a < gamt) {
        total = total + iamt;
        a = a * (1 + r) + iamttemp;
        count++;
        if (count == 12) {
          iamttemp = iamttemp * (1 + siprate / 100);
          count = 0;
        }

        m++;
      }
      console.log(m);
      var y = Math.floor((m / 12));
      m = m % 12;
      var goal = document.getElementById(i + 1 + "G");
      goal.textContent = "Goal Amount : " + gamt;

      var res1 = document.getElementById(i + 1 + "A");
      res1.textContent = "Total Amount invested : " + total;

      var res2 = document.getElementById(i + 1 + "B");
      res2.textContent = "Earned Interest : " + (gamt - total);

      var res3 = document.getElementById(i + 1 + "C");
      res3.textContent = "Time taken :" + y + " years  and " + m + "months";
    }
}

function calculateloan() {
  if (!document.detail.loanamount.value == "" && !document.detail.tenure.value == "" && !document.detail.irate.value == "")
    document.getElementById("result").style.display = "block";

  var amt = document.getElementById("loanamount").value;
  var y = parseFloat(document.getElementById("tenure").value);
  var r = parseFloat(document.getElementById("irate").value);


  var goal = document.getElementById("eA");
  goal.textContent = "Loan Amount : " + amt;

  var goal = document.getElementById("eB");
  goal.textContent = "Loan Tenure : " + y;
  y=Math.floor(y*12);
  var goal = document.getElementById("eC");
  goal.textContent = "Interest Rate : " + r;
  r=r/1200;
  var install=(amt*r*((1+r)**y)/(((1+r)**y)-1)).toFixed(2);
  var goal = document.getElementById("eF");
  goal.textContent = "Total Amount paid : " + (install*y).toFixed(2);
  var goal = document.getElementById("eD");
  goal.textContent = "Total Interest paid : " + (install*y-amt).toFixed(2) +"%";

  var goal = document.getElementById("eE");
  goal.textContent = "Monthly Installment : " + install;

}