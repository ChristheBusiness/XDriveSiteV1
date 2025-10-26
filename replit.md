# X-Drive - Website Școală de Șoferi

## Prezentare Generală
Website de prezentare pentru X-Drive, o școală de șoferi din Chiajna, București, România. Site-ul este complet responsive și optimizat pentru dispozitive mobile și desktop.

## Stare Curentă
✅ **Complet Funcțional** - Website-ul este gata de folosit cu toate funcționalitățile implementate.

## Caracteristici Implementate

### Frontend
- **Pagina Principală (Acasă)**: Hero section cu imagine generată, slogan atrăgător și statistici cheie
- **Despre Noi**: Informații despre școală, instructori și caracteristici distinctive
- **Cursuri**: Descrieri detaliate pentru Categoria B, Ore Suplimentare și Curs Teoretic
- **Tarife**: Pachete de prețuri (Start, Standard, Premium) cu caracteristici detaliate
- **Contact**: Formular funcțional, informații de contact, hartă Google Maps și linkuri sociale
- **Design**: Modern, curat, culori galben-portocaliu și negru (brand X-Drive)
- **Navigare**: Meniu fix în partea de sus cu smooth scroll
- **Responsive**: Complet optimizat pentru mobile (hamburger menu, layout adaptat)

### Backend
- **API Contact**: 
  - `POST /api/contact` - Salvează mesajele din formular
  - `GET /api/contact` - Recuperează toate mesajele (pentru administrare viitoare)
- **Validare**: Schema Zod pentru validarea datelor de contact
- **Stocare**: In-memory storage (poate fi schimbat cu baza de date PostgreSQL)

### Tehnologii
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, Wouter (routing)
- **Backend**: Express.js, Node.js
- **Validare**: Zod, Drizzle-Zod
- **State Management**: TanStack Query (React Query)
- **Formulare**: React Hook Form

## Structura Proiectului

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.tsx - Secțiune hero cu CTA
│   │   │   ├── Navigation.tsx - Meniu fix cu smooth scroll
│   │   │   ├── About.tsx - Despre școală
│   │   │   ├── Courses.tsx - Cursuri disponibile
│   │   │   ├── Pricing.tsx - Pachete și tarife
│   │   │   ├── Contact.tsx - Formular contact funcțional
│   │   │   ├── CTA.tsx - Call-to-action section
│   │   │   ├── Footer.tsx - Footer cu linkuri
│   │   │   └── ui/ - Componente Shadcn UI
│   │   ├── pages/
│   │   │   └── Home.tsx - Pagina principală
│   │   └── App.tsx - Router și setup
├── server/
│   ├── routes.ts - API endpoints pentru contact
│   └── storage.ts - Storage interface și implementare in-memory
├── shared/
│   └── schema.ts - Schema și tipuri partajate (ContactMessage)
└── design_guidelines.md - Ghid de design și stilizare
```

## Cum Funcționează

### Formularul de Contact
1. Utilizatorul completează formularul (nume, email, telefon, mesaj)
2. La trimitere, datele sunt validate cu Zod
3. Mesajul este salvat în storage prin POST /api/contact
4. Utilizatorul primește confirmare prin toast notification
5. Formularul se resetează automat

### Navigare
- Click pe elementele din meniu → smooth scroll la secțiunea respectivă
- Butoanele "Înscrie-te Acum" → scroll automat la secțiunea Contact
- Mobile: hamburger menu cu toate linkurile

## Design
- **Culori Brand**: Galben-portocaliu (#F59E0B aprox.) și negru
- **Font**: Inter și Poppins pentru lizibilitate
- **Stil**: Modern, curat, inspiră încredere
- **Componente**: Shadcn UI pentru consistență și calitate

## Modificări Viitoare Recomandate

1. **Persistență**: Schimbă MemStorage cu PostgreSQL pentru stocare permanentă
2. **Admin Panel**: Interfață pentru vizualizarea mesajelor de contact
3. **Email Notifications**: Trimitere email când se primește un mesaj nou
4. **Validare Client**: Feedback instantaneu în formular înainte de trimitere
5. **Securitate**: Protejează GET /api/contact cu autentificare pentru admin

## Conținut Temporar
- Textele sunt generice dar realiste (pot fi înlocuite cu conținut real)
- Adresă: "Str. Exemplu nr. 123, Chiajna, Ilfov"
- Telefon: "+40 722 123 456"
- Email: "contact@x-drive.ro"
- Prețuri orientative (2.800 - 3.800 RON)

## Testare
✅ Formular de contact testat end-to-end:
- Trimitere date
- Salvare în backend
- Confirmare vizuală
- Resetare formular

## Note
- Website-ul este un mockup profesional, ușor de personalizat ulterior
- Toate datele pot fi actualizate prin editarea componentelor respective
- Design-ul respectă principiile de accesibilitate și UX modern
