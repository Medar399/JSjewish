//import { resolve } from "dns";

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

//las promesas se pueden resolver de 3 maneras sustituye de manera muy eficaz a un callback
// sucess, failed y pending

const getEmploye = id => {
    return new Promise ((resolve, reject) => {
        const employeDB = employes.find(employe => employe.id === id); // es pending
        //console.log(employeDB);

        if(!employeDB){
           reject(`no existe usuario con el id ${id}`); // es failed
        }else{
           resolve(employeDB)
        }
    });
}

const getSalary = employe => {
    return new Promise ((resolve, reject) => {
        const salaryDB = salaries.find(salary => {
            return salary.id === employe.id;
        })
    
        if(!salaryDB){
            reject(`No se encontro salario para el usuario ${employe.name}`)
        }else{
            resolve({
                nombre: employe.name,
                salario: salaryDB.salary,
                id: employe.id
            })
        }
    });
}


getEmploye(2)//ejecutamos primera promesa
    .then(cachamosElUsuario => {
        getSalary(cachamosElUsuario)//ejecutamos segunda promesa
            .then(resp => console.log(`El empleado ${resp.nombre} tiene un salario de ${resp.salario} bolas`))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))