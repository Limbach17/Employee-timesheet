

var person;

var role;

var startDate;

var salary;







$(document).ready()

{

    $("#submit").click(SubmitHandler);

    

}



// Initialize Firebase

var config = {

    apiKey: "AIzaSyAoUWHh2k4K_qQQ901g-sfyfQEThLiCIX8",

    authDomain: "employeetimesheet-6f873.firebaseapp.com",

    databaseURL: "https://employeetimesheet-6f873.firebaseio.com",

    projectId: "employeetimesheet-6f873",

    storageBucket: "employeetimesheet-6f873.appspot.com",

    messagingSenderId: "699756672853"

};



firebase.initializeApp(config);



var database = firebase.database();



function GetMonths() {

  

    var tempDate = new Date(startDate);

    var tempNow = Date.now();

    var diff = new Date(tempNow - tempDate);

    var tempMonths = diff.getUTCMonth();

    console.log(tempMonths);

    return tempMonths;

}



function SubmitHandler(event) {

    event.preventDefault();



    ReadInfo();

    writeEmployee();



}











function ReadInfo() {

     person = $("#person").val().trim();

     role = $("#title").val().trim();

     startDate = $("#startDate").val().trim();

     rate = $("#rate").val();

}



function writeEmployee() {

  



    var employee = $("<tr>");



    var tdPerson = $("<td>");

    tdPerson.text(person);



    var tdRole = $("<td>");

    tdRole.text(role);



    var tdStartDate = $("<td>");

    tdStartDate.text(startDate);



    var tdMonthsWorked = $("<td>");

    var mons = GetMonths();

    tdMonthsWorked.text(mons);



    var tdMonthlyRate = $("<td>");

    tdMonthlyRate.text(rate);



    var tdTotalBilled = $("<td>");

    var total = rate * tdMonthsWorked;

    tdTotalBilled.text(total);



    employee.append(tdPerson);

    employee.append(tdRole);

    employee.append(tdStartDate);

    employee.append(tdMonthsWorked);

    employee.append(tdMonthlyRate);

    employee.append(tdTotalBilled);

    $("#tbody").append(employee);





}


