
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
const load = document.getElementById("load");
  load.addEventListener("click", ()=>{
    let file = document.createElement("input");
    file.setAttribute("type", "file");
    file.setAttribute("accept", ".txt");
    file.style.display = 'none';
    document.body.appendChild(file);
    file.addEventListener('change', getFile);
    file.click();
    document.body.removeChild(file);
});

function getFile(event) {
  const input = event.target
  if ('files' in input && input.files.length > 0) {
    placeFileContent(
      document.getElementById('script'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
  readFileContent(file).then(content => {
    target.textContent = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

var winbox = new WinBox("HappiJS");
winbox.body.innerHTML = "<textarea id='soul'></textarea>";

winbox.minimize();