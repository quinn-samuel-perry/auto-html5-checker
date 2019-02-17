const jsdom = require('jsdom')
const { JSDOM } = jsdom;
const fs = require('fs')

class FeatureModel {
    constructor(featureModel) {
        this.FeatureModel = featureModel
        this.testFile = null
        this.dataLocation = 'data/mydata.json'
        // this.spec = featureModel.spec
    }
    // returns false when nothing found
    searchHtmlTag(htmlString) {
        console.log("Searching for Living standard HTML feature")
        if (htmlString == "" || htmlString == null) {
            // load the html test file, for reasons 
            // A) an example of how the tag works
            // B) to verify JSDom isn't fucked
            if (this.testFile != null)
                htmlString = this.loadFile(this.testFile)
        }
        if (htmlString != "" && htmlString != null) {
            const dom = new JSDOM(htmlString)
            //get html element
            const document = dom.window.document
            const body = document.body
            // body.toString()
            const tagNameInstances = body.querySelectorAll(this.tagName)
            console.log(tagNameInstances)
            if (tagNameInstances == null) {
                console.warn(`Tag ${this.tagName} could not be found within file ${this.testFile}`)
                return false
            }
            return tagNameInstances
        }
        return false
    }
    loadDataFile() {
        console.log(`Loading DataFile: ${this.FeatureModel.keyname}`)
        var mah_string = this.loadFile(this.dataLocation)
        const mystuff = JSON.parse(mah_string)

        const myDataThings = mystuff[this.FeatureModel.keyname]

        this.testFile = myDataThings == null ? null : myDataThings.testFile
        this.tagName = myDataThings == null ? null : myDataThings.tag
    }
    loadFile(filePath) {
        var myBuffer = fs.readFileSync(filePath)
        const mah_string = myBuffer.toString('utf-8')
        return mah_string
    }
}

module.exports = FeatureModel 