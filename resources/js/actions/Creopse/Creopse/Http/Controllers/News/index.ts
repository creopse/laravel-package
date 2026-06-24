import ArticleController from './ArticleController'
import CategoryController from './CategoryController'
import CommentController from './CommentController'
import TagController from './TagController'

const News = {
    ArticleController: Object.assign(ArticleController, ArticleController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    CommentController: Object.assign(CommentController, CommentController),
    TagController: Object.assign(TagController, TagController),
}

export default News