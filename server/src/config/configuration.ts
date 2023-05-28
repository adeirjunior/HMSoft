const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USERNAME,
  },
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET,
      expire: process.env.JWT_EXPIRES_IN,
    },
  },
});

export default configuration;
export const env = configuration();
