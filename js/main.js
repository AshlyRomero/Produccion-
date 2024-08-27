function showPanel(panelId) {
    // Hide all panels
    document.querySelector('.login').classList.remove('active');
    document.querySelector('.main-panel').classList.remove('active');
    document.querySelector('.task-form').classList.remove('active');
    document.querySelector('.register-form').classList.remove('active');
    
    // Show the requested panel
    document.querySelector(`.${panelId}`).classList.add('active');
}

// Initial panel
showPanel('login');
