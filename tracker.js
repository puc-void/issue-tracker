function updateStats() {
    const totalJobs = document.querySelectorAll(
        "#all-jobs-section .card"
    ).length;

    const interviewCount = document.querySelectorAll(
        ".status-badge.badge-success"
    ).length;

    const rejectedCount = document.querySelectorAll(
        ".status-badge.badge-error"
    ).length;

    document.getElementById("total-count").innerText = totalJobs;
    document.getElementById("job-count-text").innerText = `${totalJobs} jobs`;
    document.getElementById("interview-count").innerText = `${interviewCount}`;
    document.getElementById("rejected-count").innerText = `${rejectedCount}`;
}

function showSection(sectionId) {

    document.getElementById("all-jobs-section").classList.add("hidden");
    document.getElementById("interview-section").classList.add("hidden");
    document.getElementById("rejected-section").classList.add("hidden");

    document.getElementById(sectionId).classList.remove("hidden");
}
