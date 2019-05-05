function checkDates() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  today = mm + '/' + dd + '/' + yyyy;

//  var div = document.getElementById('calendarHolder');
//var divs = div.getElementsByTagName('div');
divs=document.getElementById("calendarHolder").querySelectorAll("#calendarHolder>div");
var divArray = [];
for (var i = 0; i < divs.length; i += 1) {
  if((i+1) < dd ){
    //divs[i].style.backgroundColor = "grey";
    divs[i].style.display = 'none';
  }
 // divArray.push(divs[i].innerHTML);
}
  //alert("Page is loaded: " + today + " " + divs.length);
}