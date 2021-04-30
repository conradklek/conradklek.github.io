let logo = document.getElementById("logo");
logo.addEventListener("click", ()=>{dark()});
function dark(){
  let root = document.getElementById("root");
  if (root.textContent === ":root{--dark: white;--light: black;}"){
    root.textContent = ":root{--dark: black;--light: white;}"
  } else {
    root.textContent = ":root{--dark: white;--light: black;}"
  }
}
let menu = document.getElementById("menu");
menu.addEventListener("click", ()=>{side()});
function side(){
  document.body.classList.toggle("side");
}
let carets = document.querySelectorAll(".caret");
carets.forEach(caret => {
  caret.addEventListener("click", (e) =>{
    caret.parentElement.classList.toggle("active");
  });
});
let colors = ["blue", "cyan", "red", "magenta", "purple", "teal", "green", "cool", "gray", "warm"];
let book = document.getElementById("color");
for (let color of colors){
    for (let i = 10; i > 0; i--) {
        let swatch = document.createElement("div");
        book.appendChild(swatch);
        swatch.classList.add("b-" + color + (i * 10));
    }
}
let $colors = document.querySelectorAll("#color div");
$colors.forEach($color => {
  $color.addEventListener("click", (e) =>{
    document.body.classList = "side " + $color.className
  });
});
var proxy = {
  skew: 0
},
skewSetter = gsap.quickSetter("section", "skewY", "deg"),
clamp = gsap.utils.clamp(-20, 20);

ScrollTrigger.create({
  onUpdate: function onUpdate(self) {
    var skew = clamp(self.getVelocity() / -300);

    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: function onUpdate() {
          return skewSetter(proxy.skew);
        }
      });
    }
  }
});

gsap.set("section", {
  transformOrigin: "center",
  force3D: true
});