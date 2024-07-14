module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'https://ep-ancient-bar-a5zvhyuw.us-east-2.aws.neon.tech'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'mktattoodb'), // Asegúrate de que coincida con tu base de datos en Neon
        username: env('DATABASE_USERNAME', 'mktattoodb_owner'), // Asegúrate de que coincida con tu usuario en Neon
        password: env('DATABASE_PASSWORD', 'NrGiZ38pSdug'), // Asegúrate de que coincida con tu contraseña en Neon
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', true), // Asegúrate de que este valor esté configurado según la configuración de SSL en Neon
        },
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true), // Asegúrate de que este valor coincida con la configuración de SSL en Neon
      },
    },
  },
});


