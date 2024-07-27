import axios from "axios";

class BlogsService {
    api
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/api/blog`
        })


    }

    getAllBlogsCards() {
        return this.api.get('?lang=spa')
    }
    getAllBlogsArticles(readMoreLinkSpa) {
        return this.api.get(`${readMoreLinkSpa}?lang=spa`)
    }



}

const blogsService = new BlogsService()

export default blogsService