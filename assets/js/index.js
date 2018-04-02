var mediumApiGatewayUrl = 'https://elementary-br-medium-api-gateway.now.sh/';

$(function () {
    PreencheHtmlComPosts(3);
});


RetornaPostsMediumHtml = function (numPosts, callback) {
    var htmlCode = '';

    $.get(mediumApiGatewayUrl, function (res) {

    })
        .done(function (res) {
            for (var i = 0; i < numPosts; i++) {
                htmlCode += '<h4 class="posttitle"><a href="https://medium.com/elementarybr/' + res.payload.posts[i].uniqueSlug + '" title="' + res.payload.posts[i].title + '" target="_blank">' + res.payload.posts[i].title + '</a></h4>';
                htmlCode += '<p class="postexcerpt">' + res.payload.posts[i].virtuals.subtitle + '</p>';

                if (i < numPosts - 1) {
                    htmlCode += '<hr />';
                }
            }
            callback(htmlCode);
        });

    return htmlCode;
};

PreencheHtmlComPosts = function (numPosts) {
    var codigoHtml = RetornaPostsMediumHtml(numPosts, function (html) {
        $("#post-area").html(html);
    });
};
