(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  const mediaQuery = window.matchMedia('(min-width: 768px)')
  const mediaQueryTwo = window.matchMedia('(max-width: 767px)')
  const clActive = document.querySelectorAll('.offer_card_blk')
  
  if (mediaQueryTwo.matches) {
      clActive.forEach(clActives => {
          clActives.classList.remove('active')
      })
  }
  
  
  if (mediaQuery.matches) {
      var btn = document.querySelectorAll('.info')
          var item = document.querySelectorAll('.offer_card_texts')
  
          btn.forEach(btns => {
              btns.addEventListener('click', (e) => {
                  e.preventDefault()
                  oldremove()
                  btns.parentElement.parentElement.classList.add('active')
              })
          })
          function oldremove() {
              btn.forEach(btns => {
                  btns.parentElement.parentElement.classList.remove('active')
              })
          }
  }
 
})(jQuery);
