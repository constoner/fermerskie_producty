# Курсовой проект модуля "Вёрстка React-компонентов" в [html-academy](https://htmlacademy.ru/)

Макет [в Фигме](https://www.figma.com/file/CXOyZGW7suelJAT8uO0Lxg/%F0%9F%A7%91_%F0%9F%8C%BE%D0%A4%D0%B5%D1%80%D0%BC%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD?node-id=0%3A1&t=nrHkzIyfxLc1qAwo-0)
___

### Техническое задание

- Приложение должно быть реализована как SPA - переходы между страницами должны происходить без перезагрузуки.
- Все макеты нужно верстать фиксированно, без адаптива.
- Сайт нужно верстать только под обычные экраны без ретины.
- Сайт должен корректно работать и отображаться во всех последних версиях популярных браузеров.
- Все данные полученная не от пользователя, а из моковых данных, считаются безопасной и не требует проверок на безопасноть (XSS и другие атаки).
___

### Шапка:
Шапка сайта состоит из **логотипа** и **навигации**. 
- **Навигация** содержит ссылки на страницы сайта позволяя переходить по ресурсу.
- **Логотип** является ссылкой на главную страницу.
___

### Главная страница:
- Главная страница не содержит интерактива, её нужно просто сверстать по макетам.
- Блок с преимуществами фермерских продуктов и не достатками магазинных, должен отрисовываться на основе данных. (в реальном приложении такие данные приходят с сервера, а у вас они будут храниться в файле). 
>Возможны ситуации, при которых, список преимуществ окажется пустым,
>в таких случаях нужно скрыть блок преимуществ от пользователя.
___

### Страница оформления заказа:

- Располагается по **url** `/order`.
- При выборе продукта в блоке "Выберите продукт", блок с детальным описанием продуктов должен автоматически скролится к выбранному продукту, что бы показать его описание. Цена так же должна пересчитаться, с учётом выбранного продукта.
- При снятии галочки с выбранного продукта, блок с детальным описанием продуктов автоматически скролится не должен, а цена должна быть пересчитана с учётом удалённого из корзины продукта.
- Так же пользователь должен иметь возможность самостоятельно скролить блок с карточками детального описания товаров.

- Карточки товаров с детальным описанием продуктов должны содержать табы, при клике по заголовкам которым, отображается соотвествующая
информация о продукте. Информация отображается в соответствии с макетами.
- Адрес доставки не валидируется, это просто текстовое поле, куда пользователь может вводить любой текст.
- Если поле ввода адреса пустое, или не выбран ни один продукт, то кнопка купить должна быть задисейблена.
- Клик по кнопки "Купить" выводит в alert сообщение с описанием заказа.
- Список продуктов должен отрисовываться на основе данных. (в реальном приложении такие данные приходят с сервера, а у вас они будут храниться в файле). 
>Возможны ситуации, при которых, список продуктов окажется пустым,
>в таких вместо формы офомрления заказа, нужно выводить сообщение 
>*"Продукты были слишком вкусные и их разобрали."*,
>дизайн сообщения остаётся на усмотрение разработчика.
___

### Подвал:

Состоит из **логотипа** и **копирайта**.
**Логотип** является ссылкой на *главную страницу*.
___