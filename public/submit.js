const fileInputElement = document.getElementById("file")
const formElement = document.querySelector("form")

fileInputElement.onchange = () => {
    let data = new FormData(formElement)
    fetch("http://localhost:5500/share", {
        method: "POST",
        body: data
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
}
