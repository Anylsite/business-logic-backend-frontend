/**
 * Sensors Model
 *
 * A model that is responsible to get sensors data from the backend.
 * This model currently is connected to the FileSystem, however, it could extends the Blockchain
 * base model and read data from Blockchain
 *
 * @type {FileModel}
 */
const FileModel = require('./adapters/FileSystem');

/**
 * Sensors model extending the FileSystemModel
 */
class Sensors extends FileModel {
}

module.exports = Sensors;
