module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        32: "2rem",
      },
      borderRadius: {
        32: "2rem",
      },
      fontFamily: {
        headings: ["Jost"],
        paragraphs: ["Inter"],
      },
      colors: {
        "accent-1": "#fe5e44",
        "primary-100": "#feead9",
        "accent-2": "#eff1ff",
        "dark-blue-400": "#394392",
        "dark-blue-400": "#394392",
        "dark-black-900": "rgba(2, 4, 35, 0.7)",
        "dark-black-500": "#0e144a",
        "dark-100": "#eff1ff",
        "dark-200": "#a0aaec",
        "dark-300": "#6772c8",
        "primary-color-100": "#feead9",
        "primary-color-200": "#fed0b4",
        "primary-color-300": "#feaf8e",
        "primary-color-400": "#fe9172",
        "primary-color-500": "#fe5e44",
        "primary-color-600": "#da3c31",
        "primary-color-700": "#b62224",
        "primary-color-800": "#931521",
        "primary-color-900": "#790d1f",
        "monochrome-color-100": "#eff1ff",
        "monochrome-color-200": "#a0aaec",
        "monochrome-color-300": "#6772c8",
        "monochrome-color-400": "#394392",
        "monochrome-color-500": "#0e144a",
        "monochrome-color-600": "#0a0f3f",
        "monochrome-color-700": "#070a35",
        "monochrome-color-800": "#04072a",
        "monochrome-color-900": "#020423",
        "alert-color": "#b13774",
        "alert-color-background": "#fee5e2",
        "warning-color": "#d68b1c",
        "warning-color-background": "#fef5d3",
        "success-color": "#59a126",
        "success-color-background": "#f3fddb",
        "dark-500": "#0e144a",
        "dark-600": "#0a0f3f",
        "dark-800": "#04072a",
        "primary-100": "#feead9",
        "primary-200": "#fed0b4",
        "primary-500": "#fe5e44",
        success: "#59a126",
        warning: "#d68b1c",
        alert: "#b13774",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
