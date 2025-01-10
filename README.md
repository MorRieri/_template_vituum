# Vite + Pug + Sass boilerplate

Author: https://github.com/danyalll1/Vite-Pug-boilerplate

## Установка проекта
```
npm install
```

### Разработка
```
npm run dev
```

### Билд
```
npm run build
```

### Src and hrefs
  All src and hrefs(like images, scripts and styles) in .pug files must begining from /src ...

### Подключение скриптов и стилей
  Скрипты и стили подключаются в layout
  ```
 html(lang="ru")
  head
    link(rel="stylesheet" href="/src/styles/app.sass")
    script(type='module' src="/src/scripts/app.js")
  ```

### Javascript
  - Библиотеки, установленние через npm генерятся в файл libs.js
  - JS к конкретным компонентам можно создавать в файле компонента и импортировать в src/scripts/index.js в нужном порядке
  - JS относящийся к нескольким компонентам можно создавать в папке src/scripts/components
