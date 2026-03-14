# Digital Menu Backend

## Postavljanje baze podataka

### 1. Instaliraj PostgreSQL
- Windows: Preuzmi sa https://postgresql.org/download/windows/
- Docker: `docker run --name postgres -e POSTGRES_PASSWORD=lozinka -p 5432:5432 -d postgres:15`

### 2. Podesi .env fajl
Kopiraj `.env.example` u `.env` i popuni:
```env
DB_USER=postgres
DB_PASSWORD=lozinka
DB_HOST=localhost
DB_PORT=5432
DB_NAME=digital_menu
```

### 3. Pokreni setup baze
```bash
# Za lokalni PostgreSQL (default user 'postgres')
npm run setup-db-local

# Ili ručno:
psql -U postgres -f setup.sql
```

### 4. Pokreni backend
```bash
npm install
npm run dev
```

### 5. Testiraj API
Otvori `http://localhost:5000/api/menu` u browseru – treba da vrati listu jela.

## Dostupne skripte
- `npm start` – pokreće server
- `npm run dev` – pokreće server sa nodemon (auto-restart)
- `npm run setup-db` – postavlja bazu koristeći .env promenljive
- `npm run setup-db-local` – postavlja bazu za lokalni PostgreSQL (user=postgres)
