function changeTab(evt, content, active) {

  var i, tabcontent, tablinks, areactive;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  areactive = document.getElementsByClassName("active-line");
  for (i = 0; i < areactive.length; i++){
      areactive[i].setAttribute('style', 'display: none !important');
  }

  tablinks = document.getElementsByClassName("tab-title");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  evt.target.className += " active";
  
  document.getElementById(content).style.display = "block";
  document.getElementById(active).setAttribute('style', 'display: flex !important');
  
}

$('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })

function changeList(evt, list, line){
    var i, clist, cline, clinewrapper, cline;

    clist = document.getElementsByClassName(list);
    for (i = 0; i < clist.length; i++){
        clist[i].className = clist[i].className.replace(" sd-l-active", "");
    }

    evt.target.className += " sd-l-active";

    cline = document.getElementsByClassName(line);
    for (i = 0; i < cline.length; i++){
        cline[i].className = cline[i].className.replace(" selected-list", "");
    }

    clinewrapper = evt.target.closest('.col');

    cline=clinewrapper.querySelector("."+line);

    cline.className += " selected-list";
}

$(function(){
  var i, listindex;
  var carouselDc = $('#dcuyte-carousel');
  var carouselDcLi = $('.dc-l');
  var carouselDcItems = carouselDc.find('.carousel-item');
  
  var carouselYt = $('#yte-carousel');
  var carouselYtLi = $('.yt-l');
  var carouselYtItems = carouselYt.find('.carousel-item');

  var carouselDp = $('#dpham-carousel');
  var carouselDpLi = $('.dp-l');
  var carouselDpItems = carouselDp.find('.carousel-item');
  

  carouselDc.carousel().on('slid.bs.carousel', function (event) {
    for (i=0;i<carouselDcLi.length;i++){
      carouselDcLi[i].className = carouselDcLi[i].className.replace(" sd-l-active","");
    };
    $('.dc-line').each(function(){
      $(this).removeClass("selected-list");
    });
    for (i=0;i<carouselDcLi.length;i++){
      if (carouselDcLi[i].getAttribute("data-slide-to")==carouselDcItems.siblings('.active').index()) {
        carouselDcLi[i].className += " sd-l-active";
        listindex=i;
      }
    };
    carouselDcLi[listindex].closest('.col').querySelector(".active-line").className += " selected-list";
  })

  carouselYt.carousel().on('slid.bs.carousel', function (event) {
    for (i=0;i<carouselYtLi.length;i++){
      carouselYtLi[i].className = carouselYtLi[i].className.replace(" sd-l-active","");
    };
    $('.yt-line').each(function(){
      $(this).removeClass("selected-list");
    });
    for (i=0;i<carouselYtLi.length;i++){
      if (carouselYtLi[i].getAttribute("data-slide-to")==carouselYtItems.siblings('.active').index()) {
        carouselYtLi[i].className += " sd-l-active";
        listindex=i;
      }
    };
    carouselYtLi[listindex].closest('.col').querySelector(".active-line").className += " selected-list";
  })

  carouselDp.carousel().on('slid.bs.carousel', function (event) {
    for (i=0;i<carouselDpLi.length;i++){
      carouselDpLi[i].className = carouselDpLi[i].className.replace(" sd-l-active","");
    };
    $('.dp-line').each(function(){
      $(this).removeClass("selected-list");
    });
    for (i=0;i<carouselDpLi.length;i++){
      if (carouselDpLi[i].getAttribute("data-slide-to")==carouselDpItems.siblings('.active').index()) {
        carouselDpLi[i].className += " sd-l-active";
        listindex=i;
      }
    };
    carouselDpLi[listindex].closest('.col').querySelector(".active-line").className += " selected-list";
  })
})

$('#carousels-prev').click(function(){
  $('.pd-carousel').carousel('prev');
})

$('#carousels-next').click(function(){
  $('.pd-carousel').carousel('next');
})

function showImage(event) {
  var i,otherImgs;
  var otherImgs = document.getElementsByClassName('product-dt-image');
  for (i=0;i < otherImgs.length; i++){
    otherImgs[i].className = otherImgs[i].className.replace(" active-image","");
  }

  var newImg=event.target.closest('.other-img');
  event.target.closest('.product-dt-image').className += " active-image";
  var curImg = document.getElementById('mainThumb');

  curImg.src  = newImg.src;
}

(function () {
  var promoMonth;
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
 
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];

  var now = new Date();
  promoMonth = months[now.getMonth()+1]
  var promo = promoMonth + " 1, " + now.getFullYear()+" 00:00:00";
  let offer= promo,
      countDown = new Date(offer).getTime(),
      x = setInterval(function() {    
 
        let now = new Date().getTime(),
            distance = countDown - now;
 
          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      }, 0)
  }());