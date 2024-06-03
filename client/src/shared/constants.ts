export const PROJECT_NAME = "SolTasker";
export const EMAIL = "";
export const RENDER_BACKEND_URL = "https://soltasker.onrender.com";
export const BACKEND_URL = import.meta.env.BACKEND_URL || (import.meta.env.VITE_VERCEL_ENV === "production" && RENDER_BACKEND_URL) || "http://localhost:8000";
export const COMMISSION_PERCENTAGE = 0.02;
