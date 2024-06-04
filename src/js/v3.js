$(document).ready(function() {
  const $copyBtn = document.querySelector("[data-copyfrom='copy_id1']")

  if ($copyBtn) {
    $copyBtn.addEventListener('click', e => {
      e.preventDefault()
  
      const $copyFrom = $copyBtn.getAttribute('data-copyfrom')
      const $copyValue = document.querySelector(`[data-copysrc=${$copyFrom}]`).textContent
      navigator.clipboard.writeText($copyValue);
    })
  }

  $('.benefits__title').on('click', function(e) {
    $(this).siblings('.benefits__text').slideToggle()
    $(this).toggleClass('active')
  })
})