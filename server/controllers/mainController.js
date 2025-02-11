exports.homepage = function(req, res) {
    res.render('index', { 
        locals: { // always write locals inside render
            title: "Notes App",
            description: "Created using NodeJS"
        },
        layout: "../views/layouts/front-page",
    });
}

exports.about = function(req, res) {
    res.render('about', { 
        locals: { // always write locals inside render
            title: "About - Note App",
            description: "Created using NodeJS"
        }
    });
}

exports.error = function(req, res) {
    res.render('error', { 
        locals: { // always write locals inside render
            title: "ERROR 404",
            description: "Page Not Found"
        }
    });
}