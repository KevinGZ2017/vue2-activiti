module.exports = (req, res, next) => {
    //res.header('Content-Type', 'post，get')
    if (req.method === 'POST') {

        // Converts POST to GET and move payload to query params
        // This way it will make JSON Server that it's GET request
        req.method = 'GET'
        //req.query = req.body
    }
    next()
}