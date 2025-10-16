import { ref } from "vue";

class AuthService {
    constructor() {
        this.jwt = ref('');
        this.error = ref('');
    }

    getToken() {
        return this.jwt.value;
    }

    getError() {
        return this.error.value;
    }
    
    async login(email, password) {
        try {
            const response = await fetch('https://hfp69ilv.directus.app/auth/login', {
                method: 'POST',
                headers: { accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if ('errors' in data) {
                this.error.value = 'Login failed: ' + data.errors.map(err => err.message).join(', ');
                return false;
            }

            this.jwt.value = data.data.access_token;
            return true;

        }
        catch (error) {
            this.error.value = 'Login failed ';
            return false
        }
    }
}

export default AuthService;