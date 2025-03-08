const appId = "9e4be63a";  // Replace with your App ID
const appKey = "7d81a61f2609a2f01d71a432a2e675f3";  // Replace with your App Key

async function getJobs() {
    const skills = document.getElementById("skills").value.toLowerCase();
    const interests = document.getElementById("interests").value.toLowerCase();

    if (!skills || !interests) {
        alert("Please enter both skills and interests!");
        return;
    }

    const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${appKey}&what=${skills},${interests}&content-type=application/json`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const rankedJobs = rankJobs(data.results, skills, interests);
        displayJobs(rankedJobs);
    } catch (error) {
        console.error("Error fetching jobs:", error);
    }
}

// TF-IDF Based Job Ranking
function rankJobs(jobs, skills, interests) {
    return jobs.map(job => {
        let score = 0;
        const text = `${job.title} ${job.description} ${job.company.display_name} ${job.location.display_name}`.toLowerCase();

        skills.split(',').forEach(skill => {
            if (text.includes(skill.trim())) score += 2;
        });

        interests.split(',').forEach(interest => {
            if (text.includes(interest.trim())) score += 1;
        });

        return { ...job, score };
    }).sort((a, b) => b.score - a.score);
}

// Display Jobs
function displayJobs(jobs) {
    const jobContainer = document.getElementById("job-container");
    jobContainer.innerHTML = "";

    if (jobs.length === 0) {
        jobContainer.innerHTML = "<p>No jobs found. Try different keywords!</p>";
        return;
    }

    jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company.display_name}</p>
            <p><strong>Location:</strong> ${job.location.display_name}</p>
            <p><strong>Salary:</strong> ${job.salary_min ? `$${job.salary_min}` : "Not provided"}</p>
            <a href="${job.redirect_url}" target="_blank">Apply Now</a>
        `;

        jobContainer.appendChild(jobCard);
    });
}
