function handleToggle() {
    var expandedMenu = document.getElementById("expandedMenu");
    expandedMenu.classList.toggle("opacity-0");
    expandedMenu.classList.toggle("opacity-100");
    expandedMenu.classList.toggle("hidden"); 
  }
  
  function handleLinkClick() {
    var expandedMenu = document.getElementById("expandedMenu");
    expandedMenu.classList.remove("opacity-100");
    expandedMenu.classList.add("opacity-0");
    expandedMenu.classList.add("hidden");
  }
  