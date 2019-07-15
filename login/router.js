module.exports = function(app, fs, path) {
    app.get('/', function(req, res) {
        console.log('/ accessed');
        res.render('index', {
            title: "login-main"
        });
    })
}