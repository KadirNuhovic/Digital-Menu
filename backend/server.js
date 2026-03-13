const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Mock podaci - ovo simulira bazu podataka dok ne povežemo pravu
const menuItems = [
  { id: 1, name: "Premium Burger", category: "Glavno jelo", price: 850, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60", desc: "100% junetina, cheddar, karamelizovani luk." },
  { id: 2, name: "Pizza Napolitana", category: "Pizza", price: 920, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60", desc: "Pelat, mozzarella di bufala, svež bosiljak." },
  { id: 3, name: "Cezar Salata", category: "Salate", price: 650, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop&q=60", desc: "Piletina, krutoni, parmezan, dresing." },
  { id: 4, name: "Pasta Carbonara", category: "Pasta", price: 880, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&auto=format&fit=crop&q=60", desc: "Špagete, guanciale, pecorino, jaje." },
  { id: 5, name: "Sushi Set", category: "Azijska", price: 1450, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=60", desc: "12 komada: losos nigiri, tuna maki, california roll." },
  { id: 6, name: "Čokoladni Mus", category: "Dezert", price: 420, image: "https://images.unsplash.com/photo-1541783245831-57d6fb48e533?w=500&auto=format&fit=crop&q=60", desc: "Tamna belgijska čokolada, šumsko voće." },
];

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.listen(port, () => {
  console.log(`Server pokrenut na http://localhost:${port}`);
});