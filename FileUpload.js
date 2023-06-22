import multer from "multer";

const storageConfig = multer.diskStorage({ //Устанавливаем конфигурацию файла
    destination: (req, file, cb) =>{
        cb(null, "images"); 
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname); //Файл должен сохранятся  с ориг именем
    }
});

const Filter = (req, file, cb) => { //Устанавливаем фильтрацию файла
  
    if(file.mimetype === "image/png" || 
    file.mimetype === "image/jpg"|| 
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
    
 }




export default multer({storage: storageConfig, fileFilter: Filter }).single("image")