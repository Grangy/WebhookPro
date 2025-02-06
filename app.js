const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const leadRoutes = require('./routes/leadRoutes');

dotenv.config();

const app = express();

// CORS: Разрешаем все домены (если фронтенд и API на одном домене, можно не использовать CORS)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Подключаем базу данных
connectDB();

// Мидлвар для парсинга JSON тела запросов
app.use(express.json());

// Раздача статики для фронтенда
app.use(express.static(path.join(__dirname, 'views')));

// Маршрут для фронтенда
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Маршрут для API
app.use('/api', leadRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
