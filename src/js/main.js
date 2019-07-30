(function() {
  // Set up rellax and reticool
  const rellax = new Rellax('.rellax');
  const reticool = new RETICOOL({
    color: '#dc7c7c',
    lockColor: '#984343',
    content: 'J&A'
  });

  // Set up scrollout and splitting
  Splitting();
  setTimeout(()=>{ 
    ScrollOut({
      targets: '[data-scroll]',
      cssProps: {
        viewportY: true,
      }
    }).update();
  },100);

  window.scrollTo(0,0);
  // Open hamburger menu
  const hamburger = document.getElementById('hamBtn');
  hamburger.addEventListener('click', () => {
    document.body.classList.toggle('opened');
  });
}());