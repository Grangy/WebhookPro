// controllers/leadController.js
const Lead = require('../models/Lead');

exports.receiveLead = async (req, res) => {
  try {
    const { name, email, phone, source, status, assignedTo, additionalData, utmInfo } = req.body;

    // Проверим, что обязательные поля присутствуют
    if (!name || !phone || !source) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newLead = new Lead({
      name,
      email,
      phone,
      source,
      status,
      assignedTo,
      additionalData,
      utmInfo // передаем объект utmInfo, который содержит все UTM-параметры
    });

    await newLead.save();

    res.status(200).json({ message: 'Lead received and stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
