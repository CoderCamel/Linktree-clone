const pageShareButton = document.querySelector(".share-button");
const shareButtons = document.querySelectorAll(".title-share-button");
console.log(shareButtons);

async function copyText(e) {
    e.preventDefault();     // prevents button going to the site
    const url = this.getAttribute("data-link");
    console.log(url);
    try {
        await navigator.clipboard.writeText(url);
        alert("Copied the URL: " + url);
    } catch (err) {
        console.error(err);
    }
}

pageShareButton.addEventListener("click", copyText);
shareButtons.forEach(shareButton => shareButton.addEventListener("click", copyText));