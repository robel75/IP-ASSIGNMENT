const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSubMenu(button){
  button.nextElementSibling.classList.toggle('show') //submenu shows
  button.classList.toggle('rotate') //submenu expand button rotates
  if (sidebar.classList.contains('close')){ //fixes the issue of the elements
    sidebar.classList.toggle('close')       //going out of the sidebar when sidebar is closed
    toggleButton.classList.toggle('rotate')
  }
}

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}
