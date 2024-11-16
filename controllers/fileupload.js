import File from "../modals/File.js"

export const Fileupload =async (req, res) => {
    console.log(req)

    const fileobj = {
        path: req.file.path,
        name: req.file.originalname
    }

    try{
        const file = await File.create(fileobj)
        console.log("File uploaded",file)
        res.status(200).json({path:`http://localhost:5000/file/${file._id   }`})

    }catch(error)   {
        console.log("Something went wrong",error.message)
        res.status(500).json({error:error.message})
    }
}

export const downloadImage=async(req,res)=>{
    try{
        const file=await File.findById(req.params.fileid)
        file.downloadContent++;

        await file.save();
        res.download(file.path,file.name)
    }catch(error){
        console.log("Something went wrong",error.message)
        res.status(500).json({error:error.message})
    }
}