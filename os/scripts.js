document.getElementById('login-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.login-screen').style.display = 'none';
        
        const loadingContainer = document.querySelector('.loading-container');
        loadingContainer.classList.add('visible');
        
        let progress = 0;
        const progressBar = document.querySelector('.loading-progress');
        const percentText = document.querySelector('.percent');
        
        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = progress + '%';
            percentText.textContent = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loadingContainer.classList.add('fade-out');
                    loadingContainer.classList.remove('visible');
                    const content = document.querySelector('.content');
                    content.style.display = 'block';
                    setTimeout(() => content.style.opacity = 1, 10);
                }, 500);
            }
        }, 30);
    }
});
