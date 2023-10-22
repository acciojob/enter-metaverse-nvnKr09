//your JS code here. If required.
const enterButton = document.getElementById("enterBtn");
        const statusParagraph = document.getElementById("status");
        const metaverseStatus = document.getElementById("h1-status");

        enterButton.addEventListener("click", function() {
            // hiding the paragraph
            statusParagraph.style.display = "none";
            
            // Displaying the h1 element
            metaverseStatus.style.display = "block";
        });