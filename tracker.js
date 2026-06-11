const totalJobs = document.querySelectorAll(
    "#all-jobs-section .card"
).length;

document.getElementById("total-count").innerText = totalJobs;
document.getElementById("job-count-text").innerText = `${totalJobs} jobs`;


function showSection(sectionId) {

    const allJobs=document.getElementById("all-jobs-section");
    const interview=document.getElementById("interview-section");
    const rejected=document.getElementById("rejected-section");

    allJobs.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");

    const selected = document.getElementById(sectionId);
    selected.classList.remove("hidden");


    // Implementation for showing a specific section
}
