window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 600); // Adjust the timing if needed
});
document.querySelector('.custom-btn.btn-14').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=Z5k3Lzjehzo', '_blank');
  });
  
