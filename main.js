// SCRIPT PARA EL CONTADOR AUTOMÁTICO DE STATS

let counts = document.querySelectorAll('.count');

counts.forEach((count)=>{

	const updateCount = ()=>{
  
  	let currentCount = parseInt(count.innerText);
    let targetCount = count.getAttribute('data-target');
    let increaseSpeed = 35;
    let increaseCount = parseInt(targetCount / increaseSpeed);
    
    	if(currentCount < targetCount){
        count.innerText = currentCount + increaseCount;
        }else{
        count.innerText = targetCount;
        }
        setTimeout(updateCount, increaseSpeed);
  }
updateCount();
})

// SWIPER LAUNCHER
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

var mySwiper = new Swiper('.swiper-container1', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

var mySwiper = new Swiper('.swiper-container2', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

var mySwiper = new Swiper('.swiper-container3', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})



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



