# 📝 Simple Note - Backend

### Stack:  
* nodejs
* express
* postgreSQL

## 🔗 API:

⌛ <small>в начале heroku-сервер просыпается, нужно немного подождать...</small>

### Base URL: `https://simple-notes-back.herokuapp.com`

### GET:

* /`test` - для теста :)
* /`notes` - получить все заметки
* /`notes`/`id_заметки` - конкретная заметка (по id)

### POST:

* /`notes` - для создания новой заметки;
    * Отправить:
  ```typescript
  type example = {
    title: string | null, // Заголовок заметки
    text: string | null // Текст заметки
  }
    ```  

### PUT (update):

* /`notes`/`id_заметки` - обновить заметку
    * Отправить:
  ```typescript
    type example = {
    title: string | null // Заголовок заметки
    text: string | null // Текст заметки
    color: ColorType // типы цветов заметки: blue | green | violet | mustard | dark |default
  }
  ```

### DELETE:
* /`notes`/`id_заметки` - удалить заметку по id

## 📃 Pages:

* home page - `/`
* notes - `/notes`
* settings - `/settings`