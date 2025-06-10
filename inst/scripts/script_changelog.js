
let commits = document.getElementsByClassName("commits");

function showCommits() {
  fetch("https://api.github.com/repos/seankmaden/seankmaden.github.io/commits")
    .then(response => response.json())
    .then(commits => {
      document.getElementById("commits").innerHTML = commits.map(commit =>
        `<p><a href="${commit.html_url}">${commit.commit.message}</a></p>`
      ).join("");
    });
}

showCommits();