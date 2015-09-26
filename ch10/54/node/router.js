// Load the ID generator.
var genid = require('./id.js')(36, 8);

module.exports = function(app, redisClient) {
    // GET /
    app.get('/', function(req, res) {
        res.render('home');
    });

    // POST /process-create
    app.post('/process-create', function(req, res) {
        // Get URL from request body
        var url = req.body.url;
        // Generate an ID
        var id = genid();
        // Save it
        redisClient.hset('urls', id, url, function() {
            redisClient.hset('clicks', id, 0, function() {
                res.redirect(302, '/success?id=' + id);
            });
        });
    });

    // GET /success
    app.get('/success', function(req, res) {
        res.render('success', {
            id: req.query.id
        });
    });

    // GET /:id/stats
    app.get('/:id/stats', function(req, res, next) {
        redisClient.hget('clicks', req.params.id, function(err, clicks) {
            redisClient.hget('urls', req.params.id, function(err, url) {
                if(err) throw err;
                if(url === null) return next();
                res.render('stats', {
                    clicks: clicks,
                    url: url,
                    id: req.params.id
                });
            });
        });
    });

    // GET /:id
    app.get('/:id', function(req, res, next) {
        redisClient.hincrby('clicks', req.params.id, 1, function() {
            redisClient.hget('urls', req.params.id, function(err, url) {
                if(err) throw err;
                if(url === null) return next();
                res.redirect(302, url);
            });
        });
    });
};