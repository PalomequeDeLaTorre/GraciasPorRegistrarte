const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurar la carpeta para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log('Servidor en funcionamiento en http://localhost:3000/');
});


  