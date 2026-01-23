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

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}
