Структура проекта:

Основные файлы и папки:
.env – конфиденциальные данные (например, URL для подключения к MongoDB).
app.js – основной файл сервера.
Папка models/ – модели данных (например, для вебхуков).
Папка controllers/ – обработчики запросов.
Папка routes/ – маршруты для обработки запросов.
Папка config/ – настройки, например, подключение к базе данных.
Файл .env:

Содержит переменные для MongoDB URI и порта сервера.
Подключение к MongoDB:

Файл config/db.js содержит логику подключения к базе данных.
Модель Webhook:

В файле models/Lead.js описывается схема данных для вебхуков (событие, полезная нагрузка и временная метка).
Контроллер:

В файле controllers/leadController.js реализуется логика получения вебхуков и сохранения их в базе данных.
Маршрут:

В файле routes/webhookRoutes.js создается маршрут для обработки POST-запросов на /webhook.
Основной файл приложения:

В app.js запускается сервер, подключается база данных и настраиваются маршруты.

{
  "_id": "someUniqueId",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "source": "facebook",
  "status": "new",
  "assignedTo": "sales_team",
  "timestamp": "2025-02-05T12:34:56.789Z",
  "additionalData": {"campaign": "winter_promo"},
  "utmInfo": {
    "utmSource": "google",
    "utmMedium": "cpc",
    "utmCampaign": "holiday_sale",
    "utmTerm": "shoes",
    "utmContent": "ad_1"
  }
}
