const { createApp } = Vue
  createApp({
    data() {
      return {
        productos:[],
        
        url:'http://pablodelapuente.pythonanywhere.com/productos',
        error:false,
        cargando:true,
      
        id:0,
        nombre:"", 
        id_producto:"",
        descripcion:"",
        precio:0,
        imagen:""
        
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(producto) {
            const url = this.url+'/' + producto;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) 
                .then(res => {
			 alert('Producto Eliminado')
                    location.reload();
                })
        },
        grabar(){
            let producto = {
                nombre:this.nombre,
                precio: this.precio,
                descripcion: this.descripcion,
                imagen:this.imagen,
                id_producto:this.id_producto
            }
            var options = {
                body:JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Producto grabado")
                    window.location.href = "productos_crud.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
