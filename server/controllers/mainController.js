exports.homepage = function(req, res) {
    res.render('index', { 
        locals1: { // always write locals inside render
            title: "Notes App",
            description: "Created using NodeJS"
        },
        layout: "../views/layouts/front-page",
    });
}

exports.about = function(req, res) {
    res.render('about', { 
        locals1: { // always write locals inside render
            title: "About - Note App",
            description: "Created using NodeJS"
        }
    });
}