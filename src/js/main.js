(function() {
  const rellax = new Rellax('.rellax');
  const reticool = new RETICOOL({
    color: '#dc7c7c',
    lockColor: '#984343',
    content: 'J&A'
  });
  const hamburger = document.getElementById('hamBtn');
  hamburger.addEventListener('click', () => {
    document.body.classList.toggle('opened');
  });
}());