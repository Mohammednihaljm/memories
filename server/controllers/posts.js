import postMessage from "../models/postMessage.js";


export const getPosts = async(req, res) => {
  try {
    const postMessages= await postMessage.find()
    // console.log(postMessages)
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({messages:error.message})
  }
};


export const createPost=async(req,res)=>{
  try {
    // const body=req.body;
    const post=req.body
   const newpost= new postMessage(post)
       await postMessage.save()
       res.status(201).json(newpost)
  } catch (error) {
    res.status(404).json({messages:error.message})
    
  }
}