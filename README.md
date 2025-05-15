# Digital Diaries - Private Movie Screenings

A modern web application for booking private movie screenings with romantic setups and premium packages.

## Features

- Three premium packages: GOLD, DIAMOND, and PLATINUM
- Private screening rooms with romantic ambiance
- Multiple time slots available
- Easy booking system
- Secure payment integration (PhonePe)

## Tech Stack

- React with TypeScript
- Tailwind CSS for styling
- Firebase for backend and authentication
- Framer Motion for animations
- Lenis.js for smooth scrolling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a Firebase project and add your configuration to `src/config/firebase.ts`
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT
