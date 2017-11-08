<a href="http://uikit.protosite.rocks" target="_blank">http://uikit.protosite.rocks</a>
<hr>
<p>
    Front-end фреймворк описывающий вид и взаимодействие базовых компонент пользовательского интерфейса.
    <br>
    Внешний стиль описан по методологии <abbr><a href="http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/">BEMIT</a></abbr> с использованием пространств имен.
    <br>
    Компоненты и их взаимодействие с пользователем описано оболочкой <acronym>UI</acronym>, доступной из глобальной области видимости <code>window</code>.
</p>
<h4>Дирректории</h4>
<dl>
    <dt><code>base</code>:</dt>
    <dd>Стилизация элементов без классов;</dd>
    <dt><code>components</code>:</dt>
    <dd>Компоненты пользовательского интерфейса;</dd>
    <dt><code>objects</code>:</dt>
    <dd>Косметическая стилизация под абстрактные модули;</dd>
    <dt><code>settings</code>:</dt>
    <dd>Глобальные переменные;</dd>
    <dt><code>tools</code>:</dt>
    <dd>Примеси и функции;</dd>
    <dt><code>utilities</code>:</dt>
    <dd>вспомогательные классы CSS.</dd>
</dl>

<h2>Описание методологии BEMIT для определения классов CSS</h2>

<h4>Пространство имен</h4>
<p>
    <code>o-</code>: Объект - абстрактный модуль интерфейса с индивидуальным поведением. Внешний вид объекта зависит от контекста использования, поэтому необходимо быть осторожным при изменении CSS. Пользователь может менять состояние объекта взаимодействуя с отдельными его компонентами.
</p>
<p>
    <code>c-</code>: Компонент - составная часть пользовательского интерфейса. Внешний вид может различатся в зависимости от контекста использования или темы оформления интерфейса. Компонент может быть как статичным, так и динамичным - пользователь меняет его состояние в результате непосредственного воздействия на него.
</p>
<p>
    <code>u-</code>: Утилита - вспомогательный класс CSS. Утилиты имеют очень специфическую роль, могут содержать в себе лишь одно правило и не связаны с контекстом использования. Утилиты служат для коррекции положения, внешнего вида и поведения элементов.
</p>
<p>
    <code>t-</code>: Тема оформления интерфейса. Класс с такой приставкой изменяет внешний вид компонентов приложения.
</p>
<p>
    <code>s-</code>: Стиль контекста определяет косметический вид определенной области приложения. Стиль оформления подобен теме, но при этом может переопределять поведение элементов. Злоупотребление такими классами может привести к ухудшению качества CSS.
</p>
<p>
    <code>is-</code>,<code>has-</code>: Эти приставки означают что в данный момент времени косметический вид элемента определен его состоянием. При измении состояния такие классы CSS удаляются или заменяются на другие. Хорошей практикой является использование атриботов <code>aria-</code> в качестве индикаторов состояния, классами CSS лучше не злоупотреблять.
</p>
<p>
    <code>_</code>: Хак(костыль, кряк) - временное (будем надеяться) решение некой проблемы в виде нового класса. Такой класс обычно переопределяет CSS правила других классов элемента.
</p>
<p>
    <code>js-</code>: Приставка определяет селектор используемый вашим js-приложением для получения ссылки на элемент DOM-дерева. Ссылка на элемент позволяет менять его состояние (пространства <code>is-</code> и <code>has-</code>), содержимое, отслеживать события или просто удалить. Если вы не js-разработчик, то не обращайте внимания на эти классы.
</p>
<p>
    <code>qa-</code>: Аналогично пространству имен <code>js-</code> класс с этой приставкой необходим для поиска и связывания элементов DOM в автоматизированных тестах.
</p>