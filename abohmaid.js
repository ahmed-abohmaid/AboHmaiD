// Up Bottun
let span = document.querySelector(".up");
// skills-sprogress
let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  // Up Bottun
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
  // skills-sprogress
  if (window.scrollY >= section.offsetTop - 260) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// Up Bottun
span.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
