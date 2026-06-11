function updateStats() {
    const totalJobs = document.querySelectorAll(
        "#all-jobs-section .card"
    ).length;

    document.getElementById("total-count").innerText = totalJobs;
    document.getElementById("job-count-text").innerText = `${totalJobs} jobs`;
}

updateStats();