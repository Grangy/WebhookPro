// app.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const leadRoutes = require('./routes/leadRoutes');

dotenv.config();

const app = express();

// Подключаем базу данных
connectDB();

// Мидлвар для парсинга JSON тела запросов
app.use(express.json());

// Маршруты
app.use('/api', leadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
