import  { Router } from 'express'
import multer from 'multer';
import PostService from './PostService.js';
import FileUpload from './FileUpload.js'

const router = new Router()



router.get("/posts",PostService.GetPosts)
router.post("/setpost",PostService.SetPost)
router.get("/posts/:title",PostService.GetPostByName)
router.get("/post/:id",PostService.GetPostById)

export default router