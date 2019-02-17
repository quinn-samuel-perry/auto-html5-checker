const FeatureModel = require('./FeatureModel')

class HtmlFeature extends FeatureModel {
    constructor(standardModel) {
        super(standardModel)
        // this.appliesToPage()
    }
    // check if this feature applies to this page/script
    appliesToPage(htmlString) {
        this.loadDataFile()
        if (this.ignore) {
            console.log(`Ignoring feature ${this.StandardModel.keyname}, for some reason probably`)
            return true
        }
        // this.getTagName()
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
        let selectorOutput = this.SelectorComparison(applies)

        if (selectorOutput) {
            // console.info(`Found ${searchTagOutput.length} instances of <${this.tagName}> in page`)
        } else {
            // console.info(`This HTML feature does not apply to the page`)
        }
        return selectorOutput
    }

}

module.exports = HtmlFeature