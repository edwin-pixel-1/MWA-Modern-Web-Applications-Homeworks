{
    const fs = require('fs');
    const http = require('http');
    const path = require('path');

    const server = http.createServer(function (req, res) {
        console.log('Start reading async');
        const pathUrl = path.join(__dirname, '../../files/file3.txt');
        fs.readFile(pathUrl, function(err, data){
            console.log('Finish reading async');
            res.write(data);
            res.end('End file')
        });
        
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!');
        
        console.log('End process');
    });
    server.listen(4000, () => console.log('Port 4000 Running...'));
}