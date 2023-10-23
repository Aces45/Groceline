const app = Vue.createApp({
    data: function () {
        return {
            navitems: [
                {name:'Home', id:'home', class:"active"},
                {name:'Shop', id:'shop'},
                {name:'Cart', id:'cart'},
                {name:'About Us', id:'about'},
                {name:'Profile', id:'profile'},
                {name:'Signup', id:'signup'},
                {name:'Login', id:'login'},                
            ]
        }
    }
})