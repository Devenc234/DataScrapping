// var name = "codemzy";
// $.get('https://www.freecodecamp.com/' + name, function(response) {
//   console.log(response);
// });


// $.get('http://dme.ap.nic.in/ma/nims.html', function(response) {
//   console.log(response);
// });

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}