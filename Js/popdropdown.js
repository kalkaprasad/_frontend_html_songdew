function pop() {
    document.getElementById("mypop").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    
    if (!event.target.matches('#droppop')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-pop");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

    if (!event.target.matches('#popu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-popular");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

  function pupular() {
    document.getElementById("mypopu").classList.toggle("show");
  }
  
  