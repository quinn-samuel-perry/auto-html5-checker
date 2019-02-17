const StandardModel = require('./../Standards/StandardModel')

class LivingStandardModel extends StandardModel {
    // providerString = "html.spec.whatwg.org"
    constructor(featureKey, featureObject) {
        super(featureKey, featureObject)
        this.htmlProviderString = "html.spec.whatwg.org"
        this.domProviderString = "dom.spec.whatwg.org"
        this.parsedHtml = false
        this.initFeature(featureObject)
    }
    isHtmlFeature() {
        return this.spec.indexOf(this.htmlProviderString) > -1
    }

    isDomFeature() {
        return this.spec.indexOf(this.domProviderString) > -1
    }
}

module.exports = LivingStandardModel
