const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSubMenu(button){
  button.nextElementSibling.classList.toggle('show') //submenu shows
  button.classList.toggle('rotate') //submenu expand button rotates
  if (sidebar.classList.contains('close')){ //fixes the issue of the elements going out of the sidebar when sidebar is closed
    sidebar.classList.toggle('close')    //this removes close if sidebar contains close, which means it expands
    toggleButton.classList.toggle('rotate') //rotates the icon
  }
}

function toggleSidebar(){
    sidebar.classList.toggle('close') //closes sidebar if it was open or opens it if it was closed
    toggleButton.classList.toggle('rotate') //rotates the button
     //converts them to array so we can use forEach
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => { //finds all submenus that are currently open inside the sidebar
        ul.classList.remove('show') //close the submenu
        ul.previousElementSibling.classList.remove('rotate') //the button that was rotated when opened is back to default
    })
}
