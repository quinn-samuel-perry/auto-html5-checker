const FeatureModel = require('./FeatureModel')

class HtmlFeature extends FeatureModel {
    constructor(featureModel) {
        super(featureModel)

        // this.appliesToPage()
    }
    // check if this feature applies to this page/script
    appliesToPage(htmlString) {
        // this.getTagName()
        this.loadDataFile()
        // lookup tag name
        const searchTagOutput = this.searchHtmlTag()
        if (searchTagOutput) {
            console.info(`Found ${searchTagOutput.length} instances of <${this.tagName}> in page`)

        } else {
            console.info(`This HTML feature does not apply to the page`)
        }


    }
}

module.exports = HtmlFeature