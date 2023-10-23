//your JS code here. If required.
const enterButton = document.getElementById("enterBtn");
const status = document.getElementById("status");

enterButton.addEventListener("click", function() {
    status.innerHTML = '<h1>Entered Metaverse</h1>';
});