//un callback es una funcion que se ejecuta dentro de otra funcion o que se ejecuta
// cuando ocurre x accion7


//setTimeout accion 
setTimeout(() => {
    //console.log('hola mundo')
}, 4000);

getUsuarioById = (id, callback) => {
    let user = {
        nombre: 'luis',
        id
    }

    if(id === 20){
        callback('el usuario no existe en la BD')
    }else{
        callback(null, user);
    }
};

getUsuarioById(10, (err, user)=>{
    if (err){
        return console.log(err);
    }
    

    console.log('usuario de bd ', user)
});