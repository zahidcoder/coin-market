class BlogDetailsDTO{
    constructor(blog) {
    this.content = blog.content;
    this.title = blog.title;
    this.photo = blog.photoPath;
    this.createtedAt = blog.createdAt;
    this.authorName = blog.author.name;
    this.authorUsername = blog.author.username;
}
}

module.exports = BlogDetailsDTO;