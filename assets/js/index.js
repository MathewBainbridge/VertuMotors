function showMobileMenu() {
    let navMenu = document.getElementById("navbar-links-list");
    let mainContent = document.getElementById("main-content");
    let isMenuShowing = navMenu.style.left === "0px";

    navMenu.style.left = isMenuShowing ? "-100%" : "0px";
    mainContent.style.overflow = isMenuShowing ? "unset" : "hidden";
    mainContent.style.height = isMenuShowing ? "inherit" : "90vh";
  }

  function showSearch() {
    let search = document.getElementById("search-bar");
    let isSearchShowing = search.style.left == "20rem";

    console.log(search.style.left, isSearchShowing);

    search.style.left = isSearchShowing ? "0" : "20rem";
  }