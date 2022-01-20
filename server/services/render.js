exports.homeRoutes = (req, res) => {
    res.render('index',{ users : "New Data"});
}

exports.new_user = (req, res) => {
    res.render('new_user');
}

exports.upt_user = (req, res) => {
    res.render('upt_user');
}