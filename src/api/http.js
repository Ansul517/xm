// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    })
localStorage.removeItem('Authorization');
this.$router.push('/login');