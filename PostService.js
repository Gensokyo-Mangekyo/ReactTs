import post from "./Post.js"
import multer from 'multer';


class PostService {

    async GetPosts(req,resp) {
        const objs = await post.find()
        resp.send(objs)
    }

    async SetPost(req,resp) {
         const {author,content,title} = req.body
         if (req.file) {
         const image = req.file.filename
         if (author && content && title && image) {
            var myDate = new Date();
            var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
            var fullDate =  myDate.getDate() + " " + months[myDate.getMonth()] + 
                " " + myDate.getFullYear();
         const obj = await post.create({author,content,title,image,date: fullDate})
         resp.send(obj)
         }
         else resp.send(undefined)
         }
         else resp.send(undefined)
    }

    async GetPostById(req,resp) {
        const {id} = req.params
        if (id) {
        const postById = await post.findById(id)
        resp.send(postById)
        }
    }

    async GetPostByName(req,resp) {
        const {title} = req.params
        const allPost = await post.find();
        var includeText = [];
      allPost.forEach(value => { if (value.title.includes(title)) {
            includeText.push(value) 
    }})
        resp.send(includeText)
    }
}

export default new PostService()