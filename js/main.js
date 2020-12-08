//navigation
function showNav() {
  let openBtn = document.querySelector(".container");
  openBtn.addEventListener("click", () => {
    // document.querySelector(".index-nav").style.height = "40vh";
    // document.querySelector(".index-nav").style.width = "40vw";
    document.querySelector(".index-nav").style.opacity = "1";
    document.querySelector(".close").style.opacity = "1";
  });
}
showNav();
function hideNav() {
  let closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".index-nav").style.opacity = "0";
    document.querySelector(".close").style.opacity = "0";
  });
}
hideNav();

//scroll animation//
function scrollto(section) {
  $("html,body").animate(
    {
      scrollTop: $("#" + section).offset().top,
    },
    "slow"
  );
}
