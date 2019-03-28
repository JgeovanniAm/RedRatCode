(function () {
    function renderBlog(data) {
        const _wrapper = document.querySelector('.blogSection__wrapper');
        generate(data, _wrapper).elements();
    }
    fetchJSON('json/data.json', renderBlog);
}());