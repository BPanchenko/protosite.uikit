<h1>protosite.uikit</h1>
<a href="http://ui.protosite.rocks" target="_blank">ui.protosite.rocks</a>

<h2>Описание методологии BEMIT для определения классов CSS</h2>

<h3>Пространство имен</h3>
<p>
    `o-`: Объект - самостоятельная часть интерфейса с индивидуальным поведением. Внешний вид объекта зависит от контекста использования, поэтому необходимо быть осторожным при изменении CSS. Пользователь может менять состояние объекта взаимодействуя с отдельными его компонентами.
</p>
<p>
    `c-`: Компонент - составная часть пользовательского интерфейса. Внешний вид может различатся в зависимости от контекста использования или темы оформления интерфейса. Компонент может быть как статичным, так и динамичным - пользователь меняет его состояние в результате непосредственного воздействия на него.
</p>
<p>
    `u-`: Утилита - вспомогательный класс CSS. Утилиты имеют очень специфическую роль, могут содержать в себе лишь одно правило и не связаны с контекстом использования. Утилиты служат для коррекции положения, внешнего вида и поведения элементов.
</p>
<p>
    `t-`: Тема оформления интерфейса. Класс с такой приставкой изменяет внешний вид компонентов приложения.
</p>
<p>
    `s-`: Стиль контекста определяет косметический вид определенной области приложения. Стиль оформления подобен теме, но при этом может переопределять поведение элементов. Злоупотребление такими классами может привести к ухудшению качества CSS.
</p>
<p>
    `is-`,`has-`: Эти приставки означают что в данный момент времени косметический вид элемента определен его состоянием. При измении состояния такие классы CSS удаляются или заменяются на другие. Хорошей практикой является использование атриботов `aria-` в качестве индикаторов состояния, классами CSS лучше не злоупотреблять.
</p>
<p>
    `_`: Хак(костыль, кряк) - временное (будем надеяться) решение некой проблемы в виде нового класса. Такой класс обычно переопределяет CSS правила других классов элемента.
</p>
<p>
    `js-`: Приставка определяет селектор используемый вашим js-приложением для получения ссылки на элемент DOM-дерева. Ссылка на элемент позволяет менять его состояние (пространства `is-` и `has-`), содержимое, отслеживать события или просто удалить. Если вы не js-разработчик, то не обращайте внимания на эти классы.
</p>
<p>
    `qa-`: Аналогично пространству имен `js-` класс с этой приставкой необходим для поиска и связывания элементов DOM в автоматизированных тестах.
</p>