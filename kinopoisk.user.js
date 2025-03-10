// ==UserScript==
// @name         Kinopoisk Free
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Этот скрипт добавляет кнопку "Смотреть" на сайт Кинопоиск. Кнопка позволяет быстро перейти на альтернативную версию сайта, где можно бесплатно смотреть фильмы и сериалы.
// @author       Miserz_
// @match        https://www.kinopoisk.ru/*
// @grant        none
// @homepageURL    https://github.com/Miserz/Kinopoisk-Free
// @updateURL      https://raw.githubusercontent.com/Miserz/Kinopoisk-Free/master/kinopoisk.user.js
// @downloadURL    https://raw.githubusercontent.com/Miserz/Kinopoisk-Free/master/kinopoisk.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Функция для изменения домена с .ru на .cx
    function changeDomain() {
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace('.ru', '.cx');
        window.location.href = newUrl;
    }

    // Функция для добавления кнопки
    function addButton() {
        const buttonsContainer = document.querySelector('.styles_root__lMV74');
        if (buttonsContainer) {
            // Создаем новую кнопку
            const newButton = document.createElement('button');
            newButton.innerText = 'Смотреть';

            // Добавляем класс для стилизации
            newButton.classList.add('custom-redirect-button');

            // Добавляем обработчик события для кнопки
            newButton.addEventListener('click', changeDomain);

            // Добавляем кнопку в контейне
            buttonsContainer.appendChild(newButton);

            // Добавляем стили через <style>
            const style = document.createElement('style');
            style.textContent = `
                .custom-redirect-button {
                    background: rgb(37, 99, 235);
                    color: white;
                    margin-top: 2rem;
                    padding: 1.5rem 3rem;
                    border-radius: 999px;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    box-shadow: 0px 0px 50px 10px rgba(37, 99, 235, 0.4);

                    transition: 250ms;
                }

                .custom-redirect-button:hover {
                    transform: scale(1.05);
                    background: rgb(23, 73, 181);
                    box-shadow: 0px 0px 50px 10px rgba(37, 99, 235, 0.5);

                }
            `;
            document.head.appendChild(style);
        }
    }

    // Запускаем функцию добавления кнопки после загрузки страницы
    window.addEventListener('load', addButton);
})();
