const employes =[{
    id:1,
    name: 'marquito'
},{
    id:2,
    name: 'armandito'
},{
    id:3,
    name: 'moy'
}];

const salaries = [{
    id:1,
    salary: 1000
},{
    id:2,
    salary: 4000
}];

const getEmploye = (id, callback) => {
    const employeDB = employes.find(employe => employe.id === id);
    //console.log(employeDB);

    if(!employeDB){
        callback(`no existe usuario con el id ${id}`);
    }else{
        callback(null,employeDB)
    }

}



const getSalary = (employe, callback) => {
    const salaryDB = salaries.find(salary => {
        return salary.id === employe.id;
    })

    if(!salaryDB){
        callback(`No se encontro salario para el usuario ${employe.name}`)
    }else{
        callback(null, {
            nombre: employe.name,
            salario: salaryDB.salary,
            id: employe.id
        })
    }
}


getEmploye(2, (err, userDB) =>{
    if (err){
        return console.log(err);
    }
    getSalary(userDB, (err, resp)=>{
        if (err){
            return console.log(err);
        }
        //console.log(resp)
        const {nombre, salario} = resp;//destructuracion de objetos
        console.log(`el salario del ${nombre} es ${salario}`)
    })
})