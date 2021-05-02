let soul, code, script;

document.getElementById('file').addEventListener('change', getFile)

function getFile(event) {
    soul = open("soul.html", "soul", "width=540,height=360,status=no,location=no,toolbar=no,menubar=no");
    soul.onload = function() {
        const input = event.target
        if ('files' in input && input.files.length > 0) {
            placeFileContent(soul.document.getElementById('code'), input.files[0]);
        }
        setTimeout(() => {
            document.getElementById('script').textContent = (soul.document.getElementById('code').value);
        }, 500);
        code = soul.document.getElementById("code");
        code.addEventListener("keyup", ()=>{
            document.getElementById("script").remove();
            script = document.createElement("script");
            document.body.appendChild(script);
            script.id = "script";
            script.textContent = code.value;
        });
    }
}

function placeFileContent(target, file) {
    readFileContent(file).then(content => {
    target.value = content
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