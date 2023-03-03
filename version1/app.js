let toggler = document.getElementsByClassName("parent");
let i;
console.log(toggler);
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".child").classList.toggle("active");
    this.classList.toggle("parent-down");
  });
}
