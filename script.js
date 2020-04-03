 
  
  function toggleTheme() {
    if (localStorage.getItem('theme') !== '') {
        themeButton.children[0].setAttribute('fill', '#6ee559');
        themeButton.children[1].setAttribute('cx', '45');
        root.id = '';
        localStorage.setItem('theme', root.id);
        localStorage.setItem('themeButtonFill', '#6ee559');
        localStorage.setItem('themeButtonX', '45');
      } else {
        themeButton.children[0].setAttribute('fill', '#ddd');
        themeButton.children[1].setAttribute('cx', '15');
        root.id = 'dark';
        localStorage.setItem('theme', root.id);
        localStorage.setItem('themeButtonFill', '#ddd');
        localStorage.setItem('themeButtonX', '15');
      }
    };
  
  var root = document.documentElement;
  var themeButton = document.getElementById('themeButton');
  
  if (localStorage.getItem('theme')) {
    themeButton.children[0].setAttribute('fill', localStorage.getItem('themeButtonFill'));
    themeButton.children[1].setAttribute('cx', localStorage.getItem('themeButtonX'));
    root.id = 'dark'
  }