// 메뉴바 햄버거 버튼이 992px 미만일 때 보여지는 토글
var toggle = document.querySelector('.nav-toggle');
var menu = document.querySelector('.nav-menu');
var login = document.querySelector('.nav-login');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    login.classList.toggle('active');
});

