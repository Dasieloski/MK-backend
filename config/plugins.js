module.exports = {

    'strapi-neon-tech-db-branches': {
        enabled: true,
        config: {
            neonApiKey: "bjp5p0zhqi4gw9p6l6u561sm7lu6ildyc7z3c3m7rmaeirf9yi47jbggk8pn4hky", // get it from here: https://console.neon.tech/app/settings/api-keys
            neonProjectName: "mktattoodb", // the neon project under wich your DB runs
            neonRole: "mktattoodb_owner", // create it manually under roles for your project first
            gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
        }
    },

}