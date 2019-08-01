
const age21 = 662695446000;
const age20 = 630720000000;
const age19 = 599184000000;
const age18 = 567648000000;
//If the age requirment is lowered from 21, simply use an alternative age variable provided above in the If statments below.

function mySubmitFunction(e) {
  let day = document.getElementById("dayValue").value;
  let month = document.getElementById("monthValue").value;
  let year = document.getElementById("yearValue").value;
  let monthNumber;

  monthNumber = month === "January" ? 01 :
    month === "February" ? 02 :
    month === "March" ? 03 :
    month === "April" ? 04 :
    month === "May" ? 05 :
    month === "June" ? 06 :
    month === "July" ? 07 :
    month === "August" ? 08 :
    month === "September" ? 09 :
    month === "October" ? 10 :
    month === "November" ? 11 :
    month === "December" ? 12 :
    "Please fill in month";

  let date = new Date()
  let userAge = new Date(year, monthNumber - 1, day)
  let mSecDifference = Math.abs(date - userAge);
  let mSecDifferenceString = JSON.stringify(mSecDifference);

  if (mSecDifference >= age21) {
    console.log("User is of age.")
    document.getElementById("over21Button").setAttribute("style", "visibility: visible; height: 10%; margin: 10px");
    document.getElementById("21Memo").innerHTML = "Welcome!  You're old enough to enjoy this site!";
    document.getElementById("submitAgeForm").setAttribute("style", "visibility: hidden; height: 0px; width: 0%");
    document.getElementById("submitButton").setAttribute("style", "visibility: hidden; height: 0px; width: 0%");

  } else if (mSecDifference < age21) {
    console.log("User is too young.")
    document.getElementById("under21Button").setAttribute("style", "visibility: visible; height: 10%; margin: 10px");
    document.getElementById("21Memo").innerHTML = "Sorry!  You're too young!  But Enjoy our Soda Site!";
    document.getElementById("submitAgeForm").setAttribute("style", "visibility: hidden; height: 0px; width: 0%");
    document.getElementById("submitButton").setAttribute("style", "visibility: hidden; height: 0px; width: 0%");

  } else {
    console.log("Age not provided.")
    document.getElementById("21Memo").innerHTML = "Full DOB must be provided to continue.";

  }

  if (document.getElementById("rememberMe").checked) {
    localStorage.setItem('mSecDifference', mSecDifferenceString);
  }
  e.preventDefault();
}

const ofAgeAppear = () => {
  if (localStorage.getItem("mSecDifference")) {
    let localStorageParse = JSON.parse(localStorage.getItem("mSecDifference"));
    if (localStorageParse >= age21) {
      console.log("Local storage; person is old enough.")
      document.getElementById("over21Button").setAttribute("style", "visibility: visible; height: 10%; margin: 10px");
      document.getElementById("21Memo").innerHTML = "Welcome!  You're old enough to enjoy this site!";
      document.getElementById("submitAgeForm").setAttribute("style", "visibility: hidden; height: 0px; width: 0%");
      document.getElementById("submitButton").setAttribute("style", "visibility: hidden; height: 0px; width: 0%");
    } else if (localStorageParse < age21) {
      console.log("Local storage; person is too young.")
      document.getElementById("under21Button").setAttribute("style", "visibility: visible; height: 10%; margin: 10px");
      document.getElementById("21Memo").innerHTML = "Sorry!  You're too young!  But Enjoy our Soda Site!";
      document.getElementById("submitAgeForm").setAttribute("style", "visibility: hidden; height: 0px; width: 0%");
      document.getElementById("submitButton").setAttribute("style", "visibility: hidden; height: 0px; width: 0%");
    } else {
      console.log("Local Storage not provided")

    }
  } else {
    console.log("Continue to landing without local storage")
  }
};
