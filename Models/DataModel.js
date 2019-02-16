class DataModel {
    constructor(dataKey, dataObject) {
        this.keyname = dataKey
        this.title = dataObject.title
        this.description = dataObject.description
        this.spec = dataObject.spec
        this.status = dataObject.status
        this.links = dataObject.links
    }
}
class LinksModel {
    constructor() {
        this.url = '';
        this.title = '';
    }
}
module.exports = DataModel
