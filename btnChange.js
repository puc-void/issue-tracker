document.querySelectorAll(".interview-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        const badge = card.querySelector(".status-badge");

        badge.innerText = "Interview";
        badge.classList.remove(
            "badge-info",
            "badge-soft",
            "badge-error"
        );
        badge.classList.add("badge-success");
        updateStats();

    });

});
document.querySelectorAll(".rejected-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        const badge = card.querySelector(".status-badge");

        badge.innerText = "Rejected";
        badge.classList.remove(
            "badge-info",
            "badge-success",
            "badge-soft"
        );
        badge.classList.add("badge-error");
        updateStats();
    });

});



//button color change korar jonno
function setActive(clickedBtn) {

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("btn-primary");
    });

    clickedBtn.classList.add("btn-primary");
    
}



//delete button press korle card remove hobe and stats update hobe
document.querySelectorAll(".delete-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        card.remove();

        updateStats();

    });

});
