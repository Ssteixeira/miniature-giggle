function showLove() {
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
  }
  
  function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }
  