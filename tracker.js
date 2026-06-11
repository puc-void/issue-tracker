function updateStats() {
    const totalJobs = document.querySelectorAll(
        "#all-jobs-section .card"
    ).length;

    document.getElementById("total-count").innerText = totalJobs;
    document.getElementById("job-count-text").innerText = `${totalJobs} jobs`;
}
updateStats();

function showSection(sectionId) {

    document.getElementById("all-jobs-section").classList.add("hidden");
    document.getElementById("interview-section").classList.add("hidden");
    document.getElementById("rejected-section").classList.add("hidden");

    document.getElementById(sectionId).classList.remove("hidden");
}
