$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });

  $(".card").on("click", function() {
    // Mengarahkan ke halaman HTML lain, misalnya "halaman_lain.html"
    window.location.href = "pages/chill_rose.html";
  });
});