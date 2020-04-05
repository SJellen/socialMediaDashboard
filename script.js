 
  
  function toggleTheme() {
    if (localStorage.getItem('theme') !== '') {
      
        root.id = '';
        localStorage.setItem('theme', root.id);
     
      } else {
   
        root.id = 'dark';
        localStorage.setItem('theme', root.id);
  
      }
    };
  
const root = document.documentElement;
 