const jsdom = require('jsdom')
const { JSDOM } = jsdom;
const fs = require('fs')

class FeatureModel {
    constructor(standardModel) {
        this.StandardModel = standardModel
        this.testFile = null
        this.dataLocation = 'data/mydata.json'
        this.selector = false
        this.comparison = 'OR' // should be specified for 

        this.Selector_OR = comparisonOutput => comparisonOutput.filter(x => x != null).length != 0
        this.Selector_AND = comparisonOutput => comparisonOutput.filter(x => x != null).length == comparisonOutput.length
        // this.Selector_XOR = comparisonOutput => comparisonOutput.filter(x => x != null).length == comparisonOutput.length / 2
    }
    loadTestData() {
        // load the html test file, for reasons 
        // A) an example of how the tag works
        // B) to verify JSDom isn't fucked
        let htmlString = null
        if (this.testFile != null && this.testFile != "")
            htmlString = this.loadFile(this.testFile)
        return htmlString
    }
    // returns false when nothing found
    searchHtmlSelector(htmlString) {
        // console.info("Searching for Living standard HTML feature")
        if (htmlString == "" || htmlString == null)
            htmlString = this.loadTestData()

        if (htmlString != "" && htmlString != null) {
            const dom = new JSDOM(htmlString)
            //get html element
            const body = dom.window.document.body

            const makeSelectorSearchable = x => `[${x}]`

            if (Array.isArray(this.tagAttribute))
                return this.tagName.map(x => makeSelectorSearchable(x)).map(x => body.querySelectorAll(x))
            else
                return body.querySelectorAll(makeSelectorSearchable(this.tagAttribute))
        }
        return [null]
    }
    // returns false when nothing found
    searchHtmlTag(htmlString) {
        // console.info("Searching for Living standard HTML feature")
        if (htmlString == "" || htmlString == null)
            htmlString = this.loadTestData()

        if (htmlString != "" && htmlString != null) {
            const dom = new JSDOM(htmlString)
            //get body element
            const body = dom.window.document.body

            if (Array.isArray(this.tagName))
                return this.tagName.map(x => body.querySelectorAll(x))
            else
                return body.querySelectorAll(this.tagName)
        }
        return [null]
    }
    loadDataFile() {
        // console.log(`Loading DataFile: ${this.StandardModel.keyname}`)
        var mah_string = this.loadFile(this.dataLocation)
        const mystuff = JSON.parse(mah_string)

        const myDataThings = mystuff[this.StandardModel.keyname]

        if (myDataThings != null) {
            this.testFile = myDataThings.testFile
            this.tagName = myDataThings.tag

            this.isAttribute = myDataThings.isAttribute
            this.tagAttribute = myDataThings.tagAttribute
        }
    }
    loadFile(filePath) {
        var myBuffer = fs.readFileSync(filePath)
        const mah_string = myBuffer.toString('utf-8')
        return mah_string
    }

    SelectorComparison(comparisonOutput) {
        if (this.comparison === 'OR')
            return this.Selector_OR(comparisonOutput)
    }
}

module.exports = FeatureModel 