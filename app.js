// app.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const leadRoutes = require('./routes/leadRoutes');
const path = require('path');


dotenv.config();

const app = express();

// Подключаем базу данных
connectDB();

// Мидлвар для парсинга JSON тела запросов
app.use(express.json());

// Маршруты
app.use('/api', leadRoutes);

// Маршрут для отображения веб-морды
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
