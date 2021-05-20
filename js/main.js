if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
document.getElementById("menu").addEventListener("click", ()=>{
  document.body.classList.toggle("side");
  document.body.classList.remove("read");
  setTimeout(() => {
    document.querySelector("#fill").classList = "hide";
  }, 1000);
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

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 100 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
function isVisible(){
  let objects = document.querySelectorAll(".img");
  objects.forEach(object =>{
    if (isInViewport(object)){
      object.classList.add("isVisible")
    } else {
      object.classList.remove("isVisible")
    }
  });
}
isVisible();


const load = document.querySelector("#load");

window.addEventListener("scroll", function(){
  isVisible();
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  var docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
  var output = (scrollTop / (docHeight - 1000)) * 100;
  /* load.querySelector("span").textContent = "PROGRESS: " + Math.round(output) + "%"; */
  load.querySelector("div").style.width = output + "%";
  if (output > 10){
    document.querySelector("#down").style.opacity = "0";
  }
  if (output < 10){
    document.querySelector("#down").style.opacity = "1";
  }
});

let projects = document.querySelectorAll(".project");
projects.forEach(project =>{
  project.addEventListener("click", ()=>{
    document.body.classList.add("side");
    if (project.classList.contains("p2")){
      document.querySelector("#fill").classList = "p2"
    } else if (project.classList.contains("p3")){
      document.querySelector("#fill").classList = "p3"
    } else if (project.classList.contains("p4")){
      document.querySelector("#fill").classList = "p4"
    } else if (project.classList.contains("p5")){
      document.querySelector("#fill").classList = "p5"
    } else if (project.classList.contains("p6")){
      document.querySelector("#fill").classList = "p6"
    } else if (project.classList.contains("p7")){
      document.querySelector("#fill").classList = "p7"
    } else if (project.classList.contains("p8")){
      document.querySelector("#fill").classList = "p8"
    } else if (project.classList.contains("p9")){
      document.querySelector("#fill").classList = "p9"
    }
  });
});

let links = document.querySelectorAll(".link");
links.forEach(link =>{
  link.addEventListener("click", ()=>{
    document.body.classList.toggle("side");
    document.querySelector("#fill").classList = "hide";
    document.body.classList.remove("read");
  });
});
document.querySelector("#read").addEventListener("click", ()=>{
  document.body.classList.toggle("side");
  document.body.classList.toggle("read");
});