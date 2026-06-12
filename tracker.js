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

let currentTab = "all";

//filer korar jonno and tab show korar jonno
function showSection(type) {

    const allJobsSection = document.getElementById("all-jobs-section");
    const interviewSection = document.getElementById("interview-section");
    const rejectedSection = document.getElementById("rejected-section");

    const cards = document.querySelectorAll("#all-jobs-section .card");

    const interviewCount = document.querySelectorAll(
        '#all-jobs-section .card[data-status="interview"]'
    ).length;

    const rejectedCount = document.querySelectorAll(
        '#all-jobs-section .card[data-status="rejected"]'
    ).length;


    allJobsSection.classList.remove("hidden");
    interviewSection.classList.add("hidden");
    rejectedSection.classList.add("hidden");

    let visibleCount = 0;
    currentTab = type;

    cards.forEach(card => {

        if (type === "all") {

            card.classList.remove("hidden");
            visibleCount++;

        }

        else if (card.dataset.status === type) {

            card.classList.remove("hidden");
            visibleCount++;

        }

        else {

            card.classList.add("hidden");

        }

    });

    // khali thakle no job show korbe
    if (type === "interview" && interviewCount === 0) {

        allJobsSection.classList.add("hidden");
        interviewSection.classList.remove("hidden");

    }

    if (type === "rejected" && rejectedCount === 0) {

        allJobsSection.classList.add("hidden");
        rejectedSection.classList.remove("hidden");

    }


    const totalJobs = cards.length;

    document.getElementById("job-count-text").innerText =
        `${visibleCount} of ${totalJobs} jobs`;
}
