const totalJobs = document.querySelectorAll(
    "#all-jobs-section .card"
).length;

document.getElementById("total-count").innerText = totalJobs;
document.getElementById("job-count-text").innerText = `${totalJobs} jobs`;


function showSection(sectionId) {

    document.getElementById("all-jobs-section").classList.add("hidden");
    document.getElementById("interview-section").classList.add("hidden");
    document.getElementById("rejected-section").classList.add("hidden");

    document.getElementById(sectionId).classList.remove("hidden");
}




//bade change korar jonno
document.querySelectorAll(".interview-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".card");

        const badge = card.querySelector(".status-badge");

        badge.innerText = "Interview";

        badge.classList.remove("badge-outline");
        badge.classList.add("badge-success");

    });

});


//button color change korar jonno
function setActive(clickedBtn) {

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("btn-primary");
    });

    clickedBtn.classList.add("btn-primary");
}
