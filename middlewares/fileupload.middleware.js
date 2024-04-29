import multer from "multer";

const storage = multer.diskStorage({
    
    destination:(req, file, cb) =>{
        console.log(file,"yoyo")
        return cb(null, './uploads/')
    },
    
    filename:(req, file, cb) =>{
       return cb(
            null,
            new Date().toISOString().replace(/:/g, '_') + file.originalname
        )
    }
    
},
console.log("working check mul")
)

 const uploadss = multer({
    storage:storage
})

export default uploadss