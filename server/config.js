const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  host: process.env.HOST || "127.0.0.1"
};

export default config;
