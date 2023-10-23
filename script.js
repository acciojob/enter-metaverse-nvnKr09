//your JS code here. If required.
const enterButton = document.getElementById("enterBtn");
const status = document.getElementById("status");
const h1 = document.getElementById("h1");

enterButton.addEventListener("click", function() {
    status.textContent = "Entered Metaverse";
	h1.appendChild(status);
});