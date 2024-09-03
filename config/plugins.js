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
            branchName: process.env.BRANCH_NAME || 'nueva-rama', // Default branch name if env var is missing
            neonApiKey: "zg0zxpnuj2emhun5t3n8s24pm3b1qjft2myi239u28hqa9wboz6csb0dej1ax5kc", // get it from here: https://console.neon.tech/app/settings/api-keys
            neonProjectName: "mk-tattoo", // the neon project under wich your DB runs
            neonRole: "mktattoodb_owner", // create it manually under roles for your project first
            // Otros parámetros de configuración si los hay
        },
    },
};
