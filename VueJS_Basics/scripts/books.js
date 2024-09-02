const books = Vue.createApp({
    data() {
        return {
            showBooks: true,
            btitle: 'Atomic Habit',
            bauthor: 'Bryan Santiago',
            year: 2008
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});

books.mount('#books')