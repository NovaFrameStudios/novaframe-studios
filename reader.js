const pages = [
    "assets/images/page1.png",
    "assets/images/page2.png",
    "assets/images/page3.png",
    "assets/images/page4.png",
    "assets/images/page5.png",
    "assets/images/page6.png",
    "assets/images/page7.png",
    "assets/images/page8.png",
    "assets/images/page9.png",
    "assets/images/page10.png",
    "assets/images/page11.png",
    "assets/images/page12.png",
    "assets/images/page13.png",
    "assets/images/page14.png",
    "assets/images/page15.png",
    "assets/images/page16.png",
    "assets/images/page17.png",
    "assets/images/page18.png",
    "assets/images/page19.png",
    "assets/images/page20.png",
    "assets/images/page21.png",
    "assets/images/page22.png",
    "assets/images/page23.png",
    "assets/images/page24.png",
    "assets/images/page25.png",
    "assets/images/page26.png",
    "assets/images/page27.png",
    "assets/images/page28.png",
    "assets/images/page29.png",
    "assets/images/page30.png",
    "assets/images/page31.png",
    "assets/images/page32.png",
    "assets/images/page33.png",
    "assets/images/page34.png"
];

let currentPage = 0;

function updateReader() {
    document.getElementById("mangaImage").src = pages[currentPage];
    document.getElementById("pageNumber").textContent =
        "Page " + (currentPage + 1) + " / " + pages.length;

    document.getElementById("nextBtn").disabled =
        currentPage === pages.length - 1;

    document.querySelector('button[onclick="previousPage()"]').disabled =
        currentPage === 0;
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateReader();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        updateReader();
    }
}

window.onload = updateReader;
