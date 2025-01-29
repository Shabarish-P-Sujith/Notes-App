exports.homepage = function(req, res) {
    res.render('index', { 
        locals1: { // always write locals inside render
            title: "Note App",
            description: "Created using NodeJS"
        }
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