# 🌸 Mis 60 Años - Manu (Digital Invitation & Guestbook RSVP)

An interactive, responsive digital invitation card and guestbook web application designed for celebrating **Manu's 60th Birthday**.

Guests can explore event details with scroll-driven animations, find ceremony and reception venues via integrated Google Maps, and confirm their attendance with the number of guests through a real-time guest notebook powered by Firebase.

---

## ✨ Features

- **Interactive Scroll Animations**: Smooth scroll-triggered entry effects, photo gallery transitions, and animated event cards using Motion (`motion/react`).
- **Event Schedule & Itinerary**: Complete itinerary overview (Ceremony, Reception, Dinner, Cake, and Party).
- **Google Maps Integration**: Direct location links and interactive bounce pins for both the church and reception hall.
- **RSVP & Guest Registration**:
  - Interactive confirmation form (Name / Family name & number of attendees).
  - Real-time guest registration stored in Cloud Firestore.
  - Secure anonymous authentication via Firebase Auth.
  - Form validation with error handling and user feedback.
- **Responsive & Elegant Design**: Mobile-friendly, vintage-styled invitation card layout with custom corners and typography.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Animations**: [Motion](https://motion.dev/) (`motion/react`)
- **Backend / Database**: [Firebase](https://firebase.google.com/) (Cloud Firestore & Authentication)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/AvisPhoenix/mis-60-manu.git
cd mis-60-manu
npm install
```

### 3. Environment Variables

Create a `.env` or `.env.local` file in the root of the project with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Running the Project

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the invitation.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds the production-ready assets into `dist/`. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs Oxlint to check code quality. |

---

## 📂 Project Structure

```text
mis-60-manu/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, gallery photos, and icons
│   ├── App.css          # Main styles and responsive layouts
│   ├── App.tsx          # Main invitation card and RSVP logic
│   ├── index.css        # Global CSS resets and base styles
│   ├── main.tsx         # Application root mount
│   └── vite-env.d.ts    # Vite environment type definitions
├── .gitignore           # Git ignore rules
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

---

## 📄 License

This project is licensed under the terms defined in the [LICENSE](LICENSE) file.
