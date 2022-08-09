const h_m_link = document.querySelector('#h_m_link');
let s_container = document.querySelector('.s_container');

h_m_link.addEventListener('click', function() {
    s_container.style.left = 0;
})

h_m_link.addEventListener('blur', function() {
    s_container.style.left = '-200px';
})