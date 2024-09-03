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
            branchName: (console.log('BRANCH_NAME:', process.env.BRANCH_NAME), process.env.BRANCH_NAME || 'branch'),
            neonApiKey: (console.log('NEON_API_KEY:', process.env.NEON_API_KEY), process.env.NEON_API_KEY),
            neonProjectName: (console.log('NEON_PROJECT_NAME:', process.env.NEON_PROJECT_NAME), process.env.NEON_PROJECT_NAME),
            neonRole: (console.log('NEON_ROLE:', process.env.NEON_ROLE), process.env.NEON_ROLE),
        },
    },
};
