//slideshow.js

var myIndex = 0;  // Start from the first image
carousel();  // Start the carousel function

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  // Hide all images initially
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}  // Reset to the first image if we exceed the number of images
    x[myIndex-1].style.display = "block";  // Show the current image
    setTimeout(carousel, 2000);  // Change image every 2 seconds
}


