const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const issue = document.getElementById('issue').value;

  const supportData = {
    name: name,
    email: email,
    issue: issue
  };

  const issues = JSON.parse(localStorage.getItem('issues')) || [];
  issues.push(supportData);
  localStorage.setItem('issues', JSON.stringify(issues));

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('issue').value = '';

  alert('Issue submitted successfully.');
});
