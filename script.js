// When the admin saves new content, update the text in index.html
document.getElementById('save-btn')?.addEventListener('click', function() {
    const newContent = document.getElementById('new-content').value;
    
    if (newContent) {
        localStorage.setItem('content', newContent);
        alert('Content updated successfully!');
    } else {
        alert('Please enter some content.');
    }
});

// On the main page, load the saved content if available
window.addEventListener('DOMContentLoaded', function() {
    const savedContent = localStorage.getItem('content');
    if (savedContent) {
        document.getElementById('content-text').textContent = savedContent;
    }
});