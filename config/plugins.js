// config/plugins.js

module.exports = {
    // Configuración del plugin de Cloudinary
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: process.env.CLOUDINARY_NAME,
                api_key: process.env.CLOUDINARY_KEY,
                api_secret: process.env.CLOUDINARY_SECRET,
            },
        },
    },

    // Configuración del plugin `strapi-neon-tech-db-branches`
    'strapi-neon-tech-db-branches': {
        enabled: true,
        config: {
            branchName: process.env.BRANCH_NAME, // Debe coincidir con 'nueva-rama'
            // Otros parámetros de configuración si los hay
        },
    },
};
