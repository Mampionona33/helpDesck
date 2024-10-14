/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#F59E0B",
        background: "#F9FAFB",
        text: "#1F2937",
        accent: "#10B981",
        error: "#EF4444",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "lg-soft":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        lg: "1rem",
      },
    },
  },
  plugins: [],
};
