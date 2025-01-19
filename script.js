const API_URL = 'https://store.chriis411.workers.dev';

// Fetch content from the Worker
async function fetchContent() {
  try {
    const response = await fetch(`${API_URL}/get-content`);
    const data = await response.json();
    document.getElementById('content-text').textContent = data.content;
  } catch (error) {
    console.error('Error fetching content:', error);
  }
}

// Save content to the Worker
async function saveContent() {
  const newContent = document.getElementById('new-content').value;
  if (newContent) {
    try {
      const response = await fetch(`${API_URL}/set-content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newContent }),
      });
      if (response.ok) {
        alert('Content updated successfully!');
      } else {
        alert('Failed to update content.');
      }
    } catch (error) {
      console.error('Error updating content:', error);
      alert('An error occurred. Please try again.');
    }
  } else {
    alert('Please enter some content.');
  }
}

// Attach event listeners
document.getElementById('save-btn')?.addEventListener('click', saveContent);
window.addEventListener('DOMContentLoaded', fetchContent);
