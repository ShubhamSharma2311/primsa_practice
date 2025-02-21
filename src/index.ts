import { PrismaClient } from "@prisma/client"; 
import { log } from "console";
const prisma = new PrismaClient();



async function createUser(email :string, password : string, firstname: string , lastname : string){
  let res = await  prisma.user.create({
        data : {
            email,
            password,
            firstname,
            lastname
        },
        select : {
            email : true,
            id : true
        }
    })
     console.log (res);
}


interface updateParams {
    firstname : string,
    lastname : string
}

async function updateUser(email : string , {firstname,lastname} : updateParams){

  let res = await  prisma.user.update({
       where :{ email},
       data : {
        firstname,
        lastname
       },
       
    })
    console.log(res);
    
}

updateUser ( 'ssk1@gmail.com' , { firstname :'Ankit' , lastname : 'sharma'})


