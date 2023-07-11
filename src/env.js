const env = {
    apiUrl: process.env.NODE_ENV === 'production' ? 'https://givemeamovie.cn/api' : 'http://localhost:5004',
    debug: false
};

export default env;