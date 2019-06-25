// var clients = [];
//
// function findClient (clientId) {
//     return clients[findClientKey(clientId)];
// }
//
// function findClientKey (clientId) {
//     for (var key = 0; key < clients.length; key++) {
//         if (clients[key].id == clientId) {
//             return key;
//         }
//     }
// }
//
// var clientService = {
//     findAll(fn) {
//         axios
//             .get('/api/v1/clients')
//             .then(response => fn(response))
//     .catch(error => console.log(error))
//     },
//
//     findById(id, fn) {
//         axios
//             .get('/api/v1/clients/' + id)
//             .then(response => fn(response))
//     .catch(error => console.log(error))
//     },
//
//     create(product, fn) {
//         axios
//             .post('/api/v1/clients', product)
//             .then(response => fn(response))
//     .catch(error => console.log(error))
//     },
//
//     update(id, product, fn) {
//         axios
//             .put('/api/v1/clients/' + id, product)
//             .then(response => fn(response))
//     .catch(error => console.log(error))
//     },
//
//     deleteClient(id, fn) {
//         axios
//             .delete('/api/v1/clients/' + id)
//             .then(response => fn(response))
//     .catch(error => console.log(error))
//     }
// }
//
// var List = Vue.extend({
//     template: '#client-list',
//     data: function () {
//         return {clients: [], searchKey: ''};
//     },
//     computed: {
//         filteredClients() {
//             return this.clients.filter((client) => {
//                 return client.name.indexOf(this.searchKey) > -1
//                     || client.lastName.indexOf(this.searchKey) > -1
//                     || client.phone.toString().indexOf(this.searchKey) > -1
//             })
//         }
//     },
//     mounted() {
//        clientService.findAll(r => {this.clients = r.data; clients = r.data})
//     }
// });
//
// var CallCenter = Vue.extend({
//     template: '#client',
//     data: function () {
//         return {client: findClient(this.$route.params.client_id)};
//     }
// });
//
// var ClientEdit = Vue.extend({
//     template: '#client-edit',
//     data: function () {
//         return {product: findClient(this.$route.params.client_id)};
//     },
//     methods: {
//         updateclient: function () {
//             clientService.update(this.client.id, this.client, r => router.push('/'))
//         }
//     }
// });
//
// var ClientDelete = Vue.extend({
//     template: '#client-delete',
//     data: function () {
//         return {client: findClient(this.$route.params.client_id)};
//     },
//     methods: {
//         deleteClient: function () {
//             ClientService.deleteClient(this.client.id, r => router.push('/'))
//         }
//     }
// });
//
// var AddClient = Vue.extend({
//     template: '#add-client',
//     data() {
//         return {
//             client: {name: '', lastName: '', phone: 0}
//         }
//     },
//     methods: {
//         createClient() {
//             clientService.create(this.client, r => router.push('/'))
//         }
//     }
// });
//
// var router = new VueRouter({
//     routes: [
//         {path: '/', component: List},
//         {path: '/product/:product_id', component: Product, name: 'product'},
//         {path: '/add-product', component: AddProduct},
//         {path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit'},
//         {path: '/product/:product_id/delete', component: ProductDelete, name: 'product-delete'}
//     ]
// });
//
// new Vue({
//     router
// }).$mount('#app')