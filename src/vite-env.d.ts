/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // Add other environment variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

