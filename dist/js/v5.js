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
}
 showTooltip()