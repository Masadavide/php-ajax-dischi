const app = new Vue({
    el: '#app',
    data: {
        Arraydischi : [],
    },
    mounted: function () {
        axios
            .get('http://localhost/php-ajax-dischi/Milestone2/index.php')
            .then( (risposta) => {
                this.Arraydischi = (risposta.data)
                console.log(this.Arraydischi)
            })
            .catch(function (error){
                console.log(error)
            })
    }
})