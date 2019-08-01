(function() {
  // Set up rellax and reticool
  const rellax = new Rellax('.rellax');
  const reticool = new RETICOOL({
    color: '#dc7c7c',
    lockColor: '#984343',
    content: 'J&A'
  });

  // Set up scrollout and splitting
  function splitImage() {
    let scroll;
    if(document.body.clientWidth > 740) {
      Splitting();
      setTimeout(()=>{ 
        ScrollOut({
          targets: '[data-scroll]',
          cssProps: {
            viewportY: true,
          }
        }).update();
      },100);
    } else {
      ScrollOut().teardown();
    }
  }
  splitImage();
  window.addEventListener('resize', splitImage);

  window.scrollTo(0,0);
  // Open hamburger menu
  const hamburger = document.getElementById('hamBtn');
  hamburger.addEventListener('click', () => {
    document.body.classList.toggle('opened');
  });
}());