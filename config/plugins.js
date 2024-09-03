module.exports = {
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

    'strapi-neon-tech-db-branches': {
        enabled: true,
        config: {
            branchName: process.env.BRANCH_NAME || 'branch', // Usar la variable BRANCH_NAME
            neonApiKey: process.env.NEON_API_KEY, // Usar la variable de entorno NEON_API_KEY
            neonProjectName: process.env.NEON_PROJECT_NAME, // Usar la variable de entorno NEON_PROJECT_NAME
            neonRole: process.env.NEON_ROLE, // Usar la variable de entorno NEON_ROLE
        },
    },
};
