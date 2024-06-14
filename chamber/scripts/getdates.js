   document.addEventListener("DOMContentLoaded", () => {   
    
    document.getElementById("year").innerHTML = new Date().getFullYear();

    document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
   });


//For Join Page hidden element//
var timeNow = Date.now();

document.getElementById("datenow").value = timeNow;