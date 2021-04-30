let menu = document.getElementById("menu");
menu.addEventListener("click", ()=>{side()});
function side(){
  document.body.classList.toggle("side");
}
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

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
let objects = document.querySelectorAll("*");
objects.forEach(object =>{
  if (isInViewport(object)){
    object.classList.add("isVisible")
  } else {
    object.classList.remove("isVisible")
  }
});
window.addEventListener("scroll", function(){
  objects = document.querySelectorAll("*");
  objects.forEach(object =>{
    if (isInViewport(object)){
      object.classList.add("isVisible")
    } else {
      object.classList.remove("isVisible")
    }
  })
});