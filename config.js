import mongoose from "mongoose";

// export const connect = async()=>{
//     try{
//         await mongoose.connect("mongodb://127.0.0.1:27017/emplyeeApp");
//         console.log("Db is created")
//     }catch(err){
//         console.log("there is an error")
//     }
// }


const url = "mongodb+srv://rkritik9958:w8E1VKOmYXHnGJoj@cluster0.0mc6rut.mongodb.net/ecom";

export const connect =async ()=>{
  
  await mongoose.connect(url);
  console.log("connected")  
    
}

