const FeatureModel = require('./FeatureModel')

class HtmlFeature extends FeatureModel {
    constructor(standardModel) {
        super(standardModel)
        // this.appliesToPage()
    }
    // check if this feature applies to this page/script
    appliesToPage(htmlString) {
        // this.getTagName()
        this.loadDataFile()
        let applies = false
        if (this.isAttribute) {
            // selector tag name
            applies = this.searchHtmlSelector(htmlString)
        } else {
            // lookup tag name
            applies = this.searchHtmlTag(htmlString)
        }
        //convert to array for comparison check
        applies = Array.from(applies)
        // default Comparison Selector is OR
        this.SelectorComparison(applies)

        if (applies) {
            // console.info(`Found ${searchTagOutput.length} instances of <${this.tagName}> in page`)
        } else {
            // console.info(`This HTML feature does not apply to the page`)
        }
        return applies
    }

}

module.exports = HtmlFeature