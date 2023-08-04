## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:serve - запуск frontend проекта в dev режиме
```

----

## Скрипты

- `start:serve` - Запуск frontend проекта на webpack dev server

- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером

- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

- `npm run storybook:dev` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда

- `npm run test:unit` - Запуск unit тестов с jest

- `npm run test:ui:init` - Инициализация скриншотных тестов с loki
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:report` - Генерация отчета для скриншотных тестов

- `npm run prepare` - прекоммит хуки

----

## Тесты

В проекте используются 3 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook:dev`

Подробнее о [Storybook](/docs/storybook.md)

----

## Конфигурация проекта

Вся конфигурация хранится в /config
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

----

## Pre commit хуки

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

