-- Digital Menu - PostgreSQL Setup
-- Run with: psql -U postgres -f setup.sql

-- 1. Kreiranje baze (ako ne postoji)
SELECT 'CREATE DATABASE digital_menu'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'digital_menu')\gexec

\c digital_menu

-- 2. Kreiranje tabele menu_items
DROP TABLE IF EXISTS menu_items;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(500),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Ubacivanje početnih podataka (sample jela)
INSERT INTO menu_items (name, category, price, image, description) VALUES
('Cevapi', 'Glavna jela', 850.00, '/images/cevapi.jpg', 'Tradicionalni cevapi sa lukom i ajvarom'),
('Pljeskavica', 'Glavna jela', 900.00, '/images/pljeskavica.jpg', 'Domaca pljeskavica sa kajmakom'),
('Sarma', 'Glavna jela', 750.00, '/images/sarma.jpg', 'Kisela sarma sa kuvanim mesom'),
('Burek', 'Glavna jela', 600.00, '/images/burek.jpg', 'Burek sa mesom, pecen na tradicionalni nacin'),
('Raznjici', 'Glavna jela', 950.00, '/images/raznjici.jpg', 'Raznjici sa povrcem i lepinjom'),
('Karadjordjeva snicla', 'Glavna jela', 1200.00, '/images/karadjordjeva.jpg', 'Karadjordjeva snicla sa kajmakom i pomfritom'),
('Jagnjece pecenje', 'Glavna jela', 1500.00, '/images/jagnjece.jpg', 'Jagnjece pecenje sa pecenim krompirom'),
('Gulas', 'Glavna jela', 880.00, '/images/gulas.jpg', 'Gulas sa knedlama'),
('Pizza Margherita', 'Glavna jela', 750.00, '/images/pizza-margherita.jpg', 'Klasicna pizza sa paradajz sosom, kackavaljem i bosiljkom'),
('Pizza Capricciosa', 'Glavna jela', 850.00, '/images/pizza-capricciosa.jpg', 'Pizza sa sunkom, pecurkama, maslinama i kackavaljem'),
('Omlet', 'Dorucak', 450.00, '/images/omlet.jpg', 'Svez omlet sa kackavaljem i povrcem'),
('Jaja na oko', 'Dorucak', 380.00, '/images/jaja-na-oko.jpg', 'Jaja na oko sa slaninom i hlebom'),
('Kajgana', 'Dorucak', 400.00, '/images/kajgana.jpg', 'Kajgana sa lukom i hlebom'),
('Palacinke sa dzemom', 'Dorucak', 320.00, '/images/palacinke-dzem.jpg', 'Slatke palacinke sa dzemom'),
('Palacinke sa nutelom', 'Dorucak', 350.00, '/images/palacinke-nutela.jpg', 'Palacinke sa nutelom i slagom'),
('Sendvic sa sunkom', 'Dorucak', 420.00, '/images/sendvic-sunka.jpg', 'Svez sendvic sa sunkom i kackavaljem'),
('Espresso', 'Pica', 180.00, '/images/espresso.jpg', 'Jaka espresso kafa'),
('Kapucino', 'Pica', 250.00, '/images/cappuccino.jpg', 'Kapucino sa penom'),
('Nescafe', 'Pica', 200.00, '/images/nescafe.jpg', 'Topli Nescafe'),
('Sok od pomorandze', 'Pica', 250.00, '/images/sok-pomorandza.jpg', 'Svez sok od pomorandze'),
('Sok od jabuke', 'Pica', 220.00, '/images/sok-jabuka.jpg', 'Prirodni sok od jabuke'),
('Coca-Cola', 'Pica', 280.00, '/images/coca-cola.jpg', 'Hladna Coca-Cola'),
('Fanta', 'Pica', 280.00, '/images/fanta.jpg', 'Hladna Fanta'),
('Mineralna voda', 'Pica', 150.00, '/images/voda.jpg', 'Prirodna mineralna voda'),
('Pivo', 'Pica', 320.00, '/images/pivo.jpg', 'Lokalno pivo na tocku'),
('Vino crveno', 'Pica', 550.00, '/images/vino-crveno.jpg', 'Crveno vino po casi'),
('Vino belo', 'Pica', 550.00, '/images/vino-belo.jpg', 'Belo vino po casi'),
('Domaci sok', 'Pica', 180.00, '/images/domaci-sok.jpg', 'Domaci sok od voca');

-- 4. Provera broja unetih stavki
SELECT COUNT(*) as total_items FROM menu_items;

-- 5. Prikaz svih stavki
SELECT * FROM menu_items ORDER BY category, name;
