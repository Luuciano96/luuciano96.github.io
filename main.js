
// SCRIPT PARA EL MENÚ EN CELULARES 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }



// SCRIPT PARA EL SLIDESHOW DE IMAGENES

var slideIndex = [1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);



function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds 
}

// SCRIPT PARA AGRANDAR LAS IMAGENES
//your code for stuff should go here
$('#Fullscreen').css('height', $(document).outerWidth() + 'px');
//for when you click on an image
$('.myImage').click(function () {
    var src = $(this).attr('src'); //get the source attribute of the clicked image
    $('#Fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
    $('#Fullscreen').fadeIn();
});
$('#Fullscreen').click(function () {
    $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
});

// SCRIPT PARA EL CONTADOR AUTOMÁTICO DE STATS

/*Number.prototype.format = function(n) {
    var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
    return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
};

$('.count').each(function () {
    $(this).prop('counter', 0).animate({
        counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'easeOutExpo',
        step: function (step) {
            $(this).text('' + step.format());
        }
    });
});*/

// SCRIPT PARA EL CONTADOR AUTOMÁTICO DE STATS

