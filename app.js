new Vue({
    el: "#app",
    data:{
        email: "",
        password: "",
        outputEmail: "",
        outputPassword:""
    },
   methods: {
    submit(){
        if (this.email && this.password) {
            this.outputEmail = this.email
            this.outputPassword = this.password

            this.email = "",
            this.password = ""
 }
    }
   }

})