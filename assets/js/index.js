$('.icon').click(function() {
    $('span').toggleClass("cancel");
});




const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const form = document.querySelector("form");

cancelBtn.onclick = () => {

    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}


//search
$('.search-bar-popup').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.search-input').focus();
    $(this).toggleClass('active');

    e.preventDefault();
});