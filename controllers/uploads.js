const path = require('path')
const { response } = require("express");
// const { fileURLToPath } = require('url');
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

const uploadfile = ( req, res = response ) => {
      
        if ( !req.files || Object.keys(req.files).length === 0 || !req.files.doc ) {
            res.status(400).json({ msg: 'No files were uploaded.' });
            return;
        }
      
        // file uploaded
        const { doc } = req.files; 
        // const nameSplit = file.name.split('.');
        // const extension = nameSplited[ nameSplit.length - 1 ];

        res.json({ extension });
      
        // use path to directing to the route
        const uploadPath = path.join( __dirname, '../uploads/', doc.name );
      
        doc.mv( uploadPath, (err) => {
            if ( err ) {
                return res.status(500).json({ err });
            }
        
            res.json({ msg: 'File uploaded to ' + uploadPath });
        });
    
}

module.exports = {
    uploadfile
}