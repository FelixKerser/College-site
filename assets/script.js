document.addEventListener('DOMContentLoaded', function () {
    let burgerMenuIcon = document.getElementsByClassName('burger-menu-icon')[0];
    let closebtn = document.getElementsByClassName('close-menu')[0]
    let mobMenuWrapper = document.getElementsByClassName('mob-menu__wrapper')[0];

    // Добавляем обработчик события клика на иконку бургера
    burgerMenuIcon.addEventListener('click', function () {
        // Переключаем класс mob-menu-active на объекте mob-menu__wrapper
        mobMenuWrapper.classList.toggle('mob-menu-active');
    });

    closebtn.addEventListener('click', function () {
        // Переключаем класс mob-menu-active на объекте mob-menu__wrapper
        mobMenuWrapper.classList.toggle('mob-menu-active');
    });

    $(document).mouseup(function (e) {
        var container = $(".mob-menu__wrapper");
        if (container.has(e.target).length === 0){
            mobMenuWrapper.classList.remove('mob-menu-active');
        }
    });
});
