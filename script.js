// ==UserScript==
// @name         Kinopoisk Free
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Добавляет кнопку для перехода на kinopoisk.cx
// @author       Miserz_
// @match        https://www.kinopoisk.ru/*
// @grant        none
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
        const buttonsContainer = document.querySelector('.styles_buttonsContainer__HREZO');
        if (buttonsContainer) {
            // Создаем новую кнопку
            const newButton = document.createElement('button');
            newButton.innerText = 'Смотреть';

            // Добавляем класс для стилизации
            newButton.classList.add('custom-redirect-button');

            // Добавляем обработчик события для кнопки
            newButton.addEventListener('click', changeDomain);

            // Добавляем кнопку в контейнер
            buttonsContainer.appendChild(newButton);

            // Добавляем стили через <style>
            const style = document.createElement('style');
            style.textContent = `
                .custom-redirect-button {
                    background: rgb(37, 99, 235);
                    color: white;
                    padding: 1.5rem 3rem;
                    border-radius: 999px;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 250ms;
                }

                .custom-redirect-button:hover {
                    transform: scale(1.05);
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Запускаем функцию добавления кнопки после загрузки страницы
    window.addEventListener('load', addButton);
})();
