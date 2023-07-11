const env = {
    apiUrl: process.env.NODE_ENV === 'production' ? 'https://api.givemeamovie.cn' : 'http://localhost:5004',
    debug: false
};

export default env;