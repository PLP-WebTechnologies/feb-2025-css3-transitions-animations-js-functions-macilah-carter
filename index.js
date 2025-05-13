document.getElementById('triggerBtn').addEventListener('click', () => {
    document.getElementById('box1').classList.add('bounce');
    document.getElementById('box2').classList.add('fade');
    document.getElementById('box3').classList.add('slide');
    document.getElementById('box4').classList.add('rotate');
    document.getElementById('box5').classList.add('scale');
  
    // Optional: save to localStorage
    localStorage.setItem('animationsTriggered', 'true');
  });
  
  // Optional: auto-trigger if already saved
  if (localStorage.getItem('animationsTriggered') === 'true') {
    document.getElementById('box1').classList.add('bounce');
    document.getElementById('box2').classList.add('fade');
    document.getElementById('box3').classList.add('slide');
    document.getElementById('box4').classList.add('rotate');
    document.getElementById('box5').classList.add('scale');
  }
  