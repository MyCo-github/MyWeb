window.onload = ()=>{
    fetch("./api/header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header").innerHTML = data);    
    
     fetch("./api/footer.html")
     .then(response => response.text())
     .then(data => document.getElementById("footer").innerHTML = data);
}