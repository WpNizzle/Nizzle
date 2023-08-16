const issuesList = document.getElementById('issues-list');

const issues = JSON.parse(localStorage.getItem('issues')) || [];
issues.forEach(issue => {
  const issueItem = document.createElement('div');
  issueItem.classList.add('border', 'p-4', 'mb-4');
  issueItem.innerHTML = `
    <h3 class="font-semibold">${issue.name}</h3>
    <p>${issue.issue}</p>
    <p class="text-gray-500">${issue.email}</p>
  `;
  issuesList.appendChild(issueItem);
});
