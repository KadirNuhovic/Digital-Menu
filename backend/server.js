const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/menu', async (req, res) => {
  try {
    // Dohvatamo podatke iz baze i mapiramo 'description' u 'desc' da bi frontend radio bez izmena
    const result = await pool.query('SELECT id, name, category, price, image, description as "desc" FROM menu_items');
    const rows = result.rows.map((row) => {
      const image =
        typeof row.image === 'string' && row.image.startsWith('/images/')
          ? `https://picsum.photos/seed/digital-menu-${row.id}/800/600`
          : row.image;

      return {
        ...row,
        image,
      };
    });

    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Greška na serveru');
  }
});

app.listen(port, () => {
  console.log(`Server pokrenut na http://localhost:${port}`);
});