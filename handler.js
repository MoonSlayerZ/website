const toggleButton = document.getElementById('legendary');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    sleep(500); 
});