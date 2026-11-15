/* Taj Medical & General Store — Firebase project configuration */
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAgbG_7FUCN8HvKGdRrdSdxy_iJuz-y3No",
  authDomain: "taj-medical-store-9a3ad.firebaseapp.com",
  projectId: "taj-medical-store-9a3ad",
  storageBucket: "taj-medical-store-9a3ad.firebasestorage.app",
  messagingSenderId: "967567684282",
  appId: "1:967567684282:web:c83ea8b96d943ff9550883",
  measurementId: "G-EWPP2YM9L8"
};

export const ADMIN_EMAIL_FOR_RULES = 'farhanalipervez@gmail.com';
export function isFirebaseConfigured() {
  return Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId);
}
window.isFirebaseConfiguredGlobal = isFirebaseConfigured();

export const ADMIN_EMAIL = ADMIN_EMAIL_FOR_RULES;

// Public HTTPS base used to create QR links that work outside the shop network.
export const DEFAULT_PUBLIC_BASE_URL = 'https://tajmedics.github.io/invoices/';
