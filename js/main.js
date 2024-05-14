const { createApp } = Vue

createApp({
    data() {
        return {
            list: [
                {
                    elemento: 'case',
                },
                {
                    elemento: 'libri',
                },
                {
                    elemento: 'auto',
                },
                {
                    elemento: 'fogli di giornale',
                },
            ],
            inputText: '',
            
        }
    }
}).mount('#app')