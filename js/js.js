
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

$("#porfolio").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".video-section").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#contact-button").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".form-section").offset().top  // класс объекта к которому приезжаем
  }, 600); // Скорость прокрутки
});

$("#about").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".inform-section").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#contacts").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".form-section").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#porfolio2").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".video-section").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#about2").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".inform-section").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#contacts2").click(function() { // ID откуда кливаем
  $('html, body').animate({
      scrollTop: $(".form-section").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$(document).ready(function() {
  function setProgress(index) {
    var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
  
    $progressBar
      .css('background-size', `${calc}% 100%`)
      .attr('aria-valuenow', calc);
  
  }
  
  var $slider = $('.slider-1');
  var $progressBar = $('.progress');
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    setProgress(nextSlide);
  });
  
    //for tab 1
    $slider.slick({
      dots: false,
      infinite: false,
      arrows: true,
      speed: 500,
      lazyLoad: 'ondemand',
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      slidesToShow: 1,
      slidesToScroll: 1,
  });


  setProgress(0);


  function setProgress2(index) {
    var calc2 = ((index + 1) / ($slider2.slick('getSlick').slideCount)) * 100;
  
    $progressBar2
      .css('background-size', `${calc2}% 100%`)
      .attr('aria-valuenow', calc2);
  
  }
  
  var $slider2 = $('.slider-2');
  var $progressBar2 = $('.progress2');
  
  $slider2.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    setProgress2(nextSlide);
  });
  
    //for tab 1
    $slider2.slick({
      dots: false,
      infinite: false,
      arrows: true,
      speed: 500,
      lazyLoad: 'ondemand',
      prevArrow: $('.prev2'),
      nextArrow: $('.next2'),
      slidesToShow: 1,
      slidesToScroll: 1,
  });

  setProgress2(0);


  function setProgress3(index) {
    var calc3 = ((index + 1) / ($slider3.slick('getSlick').slideCount)) * 100;
  
    $progressBar3
      .css('background-size', `${calc3}% 100%`)
      .attr('aria-valuenow', calc3);
  
  }
  
  var $slider3 = $('.slider-3');
  var $progressBar3 = $('.progress3');
  
  $slider3.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    setProgress3(nextSlide);
  });
  
    //for tab 1
    $slider3.slick({
      dots: false,
      infinite: false,
      arrows: true,
      speed: 500,
      lazyLoad: 'ondemand',
      prevArrow: $('.prev3'),
      nextArrow: $('.next3'),
      slidesToShow: 1,
      slidesToScroll: 1,
  });


  setProgress3(0);



  function setProgress4(index) {
    var calc4 = ((index + 1) / ($slider4.slick('getSlick').slideCount)) * 100;
  
    $progressBar4
      .css('background-size', `${calc4}% 100%`)
      .attr('aria-valuenow', calc4);
  
  }
  
  var $slider4 = $('.slider-4');
  var $progressBar4 = $('.progress4');
  
  $slider4.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    setProgress4(nextSlide);
  });
  
    //for tab 1
    $slider4.slick({
      dots: false,
      infinite: false,
      arrows: true,
      speed: 500,
      lazyLoad: 'ondemand',
      prevArrow: $('.prev4'),
      nextArrow: $('.next4'),
      slidesToShow: 1,
      slidesToScroll: 1,
  });


  setProgress4(0);

});