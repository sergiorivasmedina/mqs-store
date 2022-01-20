var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')
require('dotenv').config()

const bucketName = process.env.AWS_BUCKET_NAME;

const s3 = new aws.S3();

exports.uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: bucketName,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            let filename = file.originalname.replace(' ', '_').replace('/', '_')
            cb(null, `items/${Date.now()}-${filename}`)
        }
    })
})

// downloads a file from s3
function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream();
}
exports.getFileStream = getFileStream;