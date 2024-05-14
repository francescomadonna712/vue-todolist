const { createApp } = Vue

createApp({
    data() {
        return {
            inputText: '',
            newindex:'',
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
            
            newindex: 4

        }
    },
        methods: {
            addIdx:function(){
                if (this.inputText){
                    this.list.push({
                        index:this.newindex++,
                        elemento:this.inputText,
                    })
                }
                this.inputText=''
            }
    


},


}).mount('#app')