const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let likes = 0;
  for (let i = 0; i < blogs.length; i++) {
    likes = likes + blogs[i].likes;
  }
  return likes;
};

const mostLikes = (blogs) => {
  let max = 0;
  let mostLiked = { title: '', author: '', likes: 0 };
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].likes > max) {
      max = blogs[i].likes;
      mostLiked.title = blogs[i].title;
      mostLiked.author = blogs[i].author;
      mostLiked.likes = max;
    }
  }
  return mostLiked;
};

const mostBlogs = (blogs) => {
  let mostLikes = [];
  authors = blogs.map((blog) => blog.author);
  for (let i = 0; i < authors.length; i++) {
    let author = authors[i];
    let count = 1;
    for (let j = i + 1; j < blogs.length; j++) {
      if (authors[j] == author) {
        count++;
      }
    }
    if (mostLikes.findIndex((item) => item.author == author) < 0) {
      mostLikes.push({ author: author, blogs: count });
    }
  }

  let mostBlogs = Math.max.apply(
    Math,
    mostLikes.map(function (author) {
      return author.blogs;
    })
  );
  var obj = mostLikes.find(function (author) {
    return author.blogs == mostBlogs;
  });
  return obj;
};

let mostTotalLikes = (blogs) => {
  let mostLikes = [];
  blogPostLikes = blogs.map(({ author, likes }) => ({
    author,
    likes,
  }));
  for (let i = 0; i < blogPostLikes.length; i++) {
    let author = blogPostLikes[i].author;
    let likes = blogPostLikes[i].likes;
    for (let j = i + 1; j < blogPostLikes.length; j++) {
      if (blogPostLikes[j].author == author) {
        likes = likes + blogPostLikes[j].likes;
      }
    }
    if (mostLikes.findIndex((item) => item.author == author) < 0) {
      mostLikes.push({ author: author, likes: likes });
    }
  }

  let mostBlogs = Math.max.apply(
    Math,
    mostLikes.map(function (author) {
      return author.likes;
    })
  );
  var obj = mostLikes.find(function (author) {
    return author.likes == mostBlogs;
  });
  return obj;
};

module.exports = {
  dummy,
  totalLikes,
  mostLikes,
  mostBlogs,
  mostTotalLikes,
};
