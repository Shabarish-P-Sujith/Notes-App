exports.homepage = function(req, res) {
    res.render('dashboard/dashboard', { 
        locals: { // always write locals inside render
            title: "Dashboard",
            description: "Dashboard for Notes App"
        },
        layout: "../views/layouts/dashboard",
    });
}