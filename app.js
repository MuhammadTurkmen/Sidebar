const toggleBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')

toggleBtn.addEventListener('click', function() {
    console.log(sidebar.classList)
    if(sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    }
    else {
        sidebar.classList.add('show-sidebar')
    }
})