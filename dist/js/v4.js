
$(document).ready(function(){
  function setBodyheight() {
    const h = $('#footer').height() + $('#header').height() + $('.navcontent').height()
    $('.vhblock').css('min-height', `calc(100vh - ${h}`)
  }

  setBodyheight();
})


