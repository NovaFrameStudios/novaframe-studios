const totalPages = 34;
let currentPage = 1;

const mangaImage = document.getElementById("mangaImage");
const pageNumber = document.getElementById("pageNumber");
const nextBtn = document.getElementById("nextBtn");

function updatePage() {
    mangaImage.src = `assets/images/page${currentPage}.png`;
    pageNumber.textContent = `Page ${currentPage} / ${totalPages}`;

    document.querySelector("button[onclick='previousPage()']").disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

updatePage();
mangaImage.addEventListener("click", () => {
    nextPage();
});
