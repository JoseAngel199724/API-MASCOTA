// El modelo obtiene los datos de la base de datos 
// No se encarga de validad las datos ni logica de negocios


// Mandando a llamar la conexión a la base de datos
const db = require('./config');



const create = (bodyMascota)=>{
    return db
    .insert(bodyMascota)
    .into('mascotas ')
    .returning(['mascotas_id', 'name', 'bread', 'age', 'active'])
}

const findAll = ()=>{
    return db 
    .select ('*')
    .from('mascotas')
    .where({active: true});

}

const findOne = (idMascota) => {
    return db
    .insert('*')
    .from('mascotas')
    .where({mascota_id: idMascota, active: true})
}

const update =(idMascota, bodyMascota)=>{
    return db
    .update(bodyMascota)
    .form('mascotas')
    .where(['mascotas_id', 'name', 'bread', 'age', 'active'])
}
const loginDelete =()=>{

   return db
            .update({ active: false })
            .from('mascotas')
            .where({ mascota_id: idMascota })
}

module.exports={
    create,
    findAll,
    findOne,
    update,
    loginDelete,
}