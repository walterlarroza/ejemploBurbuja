const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'sistema_reservas';

app.use(express.json());

// Ruta para obtener todas las reservas
app.get('/reservas', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoURL);
    const db = client.db(dbName);
    const reservas = await db.collection('reservas').find().toArray();
    res.json(reservas);
    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las reservas' });
  }
});

// Ruta para crear una reserva
app.post('/reservas', async (req, res) => {
  try {
    const reserva = req.body;
    const client = await MongoClient.connect(mongoURL);
    const db = client.db(dbName);
    const result = await db.collection('reservas').insertOne(reserva);
    res.json(result.ops[0]);
    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la reserva' });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
