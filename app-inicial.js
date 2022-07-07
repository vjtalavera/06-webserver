
const http = require('http');


http.createServer ((req, res) => {

    console.log(req.headers);

    //res.writeHead(200, {'Content-Type': 'application/json'});

    res.setHeader ('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead (200, {'Content-Type': 'application/csv'});
/*     const persona = {
        id: 1,
        nombre: 'Pérez Peña'
    }
    
    res.write(JSON.stringify(persona));
 */ 
    res.write('id nombre\n')
    res.write('1, juana')
    res.end();

})
.listen (8100)

console.log('escuchando en el puerto', 8100);

