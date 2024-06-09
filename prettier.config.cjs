module.exports = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
    {
        files: "*.astro",
        options: {
        parser: "astro",
        },
    },
    ],
};