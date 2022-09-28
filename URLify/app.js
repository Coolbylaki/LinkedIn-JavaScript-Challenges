function urlify(blogTitle) {
    const punctuation = /[.,/#!$^&*;:{}=\-_`~()'"]/g;

    const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
    return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}