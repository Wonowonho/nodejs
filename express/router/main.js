module.exports = function(app)
{
    app.get('/',function(req,res) {
        res.end('index.html');
    });
    // app.get('/', function(req,res) {
    //     res.end('about.html');
    // });
}