exports.homepage = function(req, res) {
    res.render('index', { 
        locals1: { // always write locals inside render
            title: "Note App",
            description: "Creates using NodeJS"
        }
    });
}