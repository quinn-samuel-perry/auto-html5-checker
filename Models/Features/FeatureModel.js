const jsdom = require('jsdom')
const { JSDOM } = jsdom;
const fs = require('fs')

class FeatureModel {
    constructor(standardModel) {
        this.StandardModel = standardModel
        this.testFile = null
        this.dataLocation = 'data/mydata.json'
        this.selector = false
        // this.spec = featureModel.spec
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
            const document = dom.window.document
            const body = document.body
            // surround selector in [] to make it searchable
            const searchableSelector = `[${this.selector}]`
            const selectorInstances = body.querySelectorAll(searchableSelector)
            // console.info(selectorInstances)
            if (selectorInstances == null) {
                // console.warn(`Tag ${this.tagName} could not be found within file ${this.testFile}`)
                return false
            }
            return selectorInstances
        }
        return false
    }
    // returns false when nothing found
    searchHtmlTag(htmlString) {
        // console.info("Searching for Living standard HTML feature")
        if (htmlString == "" || htmlString == null)
            htmlString = this.loadTestData()

        if (htmlString != "" && htmlString != null) {
            const dom = new JSDOM(htmlString)
            //get html element
            const document = dom.window.document
            const body = document.body
            // body.toString()
            const tagNameInstances = body.querySelectorAll(this.tagName)
            // console.info(tagNameInstances)
            if (tagNameInstances == null) {
                // console.warn(`Tag ${this.tagName} could not be found within file ${this.testFile}`)
                return false
            }
            return tagNameInstances
        }
        return false
    }
    loadDataFile() {
        // console.log(`Loading DataFile: ${this.StandardModel.keyname}`)
        var mah_string = this.loadFile(this.dataLocation)
        const mystuff = JSON.parse(mah_string)

        const myDataThings = mystuff[this.StandardModel.keyname]

        if (myDataThings != null) {
            this.testFile = myDataThings.testFile
            this.tagName = myDataThings.tag
            this.tagAttribute = myDataThings.tagAttribute
            this.isAttribute = myDataThings.isAttribute
        }
    }
    loadFile(filePath) {
        var myBuffer = fs.readFileSync(filePath)
        const mah_string = myBuffer.toString('utf-8')
        return mah_string
    }
}

module.exports = FeatureModel 