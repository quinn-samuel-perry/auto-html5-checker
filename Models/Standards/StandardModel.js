const HtmlFeature = require('../Features/HtmlFeatureModel')

class StandardModel {
    constructor(standardKey, standardObject) {
        this.keyname = standardKey
        this.title = standardObject.title
        this.description = standardObject.description
        this.status = standardObject.status
        this.links = standardObject.links
        this.spec = standardObject.spec
        // default value of getTagName is false, duh
        // this.getTagName = false; //
        this.feature = null
    }
    initFeature() {
        if (this.isHtmlFeature())
            this.feature = new HtmlFeature(this)
    }
    isDomFeature() {
        new Error("isDomFeature is not defined for this feature type")
    }
    isHtmlFeature() {
        new Error("isHtmlFeature is not defined for this feature type")
    }
}

module.exports = StandardModel