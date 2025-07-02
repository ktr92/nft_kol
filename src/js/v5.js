function showTooltip() {
  $(".oversize__icon").on("mouseover", function () {
    $(this)
      .closest(".tooltipv2")
      .find(".tooltipv2__tooltip")
      .css("visibility", "visible")

    const x = $(this)[0].getBoundingClientRect().left
    const y = $(this)[0].getBoundingClientRect().top

    $(this)
      .closest(".tooltipv2").find(".tooltipv2__tooltip").css("left", x)
      .closest(".tooltipv2").find(".tooltipv2__tooltip").css("top", y)
  })
  $(".oversize__icon").on("mouseout", function () {
    $(this)
      .closest(".tooltipv2")
      .find(".tooltipv2__tooltip")
      .css("visibility", "hidden")
  })
  $(".oversize__icon").on("click", function (e) {
   e.stopPropagation()
  })
}
 showTooltip()


const stickyElement = document.querySelector('.tableblock__header');

window.addEventListener('scroll', function() {
  const elementPosition = stickyElement.getBoundingClientRect();

  if (elementPosition.top <= 0 && elementPosition.bottom > 0) {
    // Элемент находится в зоне видимости и "прилип"
    stickyElement.classList.add('sticky-applied'); // Добавляем класс, если нужно
    // Можно добавить другие действия, например, изменение цвета или анимацию
  } else {
    // Элемент уже не "прилип"
    stickyElement.classList.remove('sticky-applied');
    // Удаляем класс или другие изменения
  }
});