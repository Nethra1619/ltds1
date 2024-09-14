 function showSection(section) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(sec => {
        if (sec.id === section) {
            sec.classList.add('active');
            loadContent(section);
        } else {
            sec.classList.remove('active');
        }
    });
}

function loadContent(section) {
    const contentDiv = document.getElementById(`${section}-content`);
    contentDiv.innerHTML = '';
    
    fetch(`examples/${section}.html`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        });
}

window.onload = function() {
    showSection('list'); // Show the list section by default
};
