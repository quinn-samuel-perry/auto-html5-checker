const UsageModel = require('./UsageModel')
const VersionModel = require('./VersionModel')

class AgentModel {
    constructor(canIUseName, agentObject) {
        this._caniuseName = canIUseName
        this.browser = agentObject.browser
        this.abbr = agentObject.abbr
        this.prefix = agentObject.prefix
        this.type = agentObject.type
        this.usage_global = []
        this.versions = []

        this.LoadUsageGlobal(agentObject.usage_global)
        // console.table(this.usage_global)

        this.LoadVersions(agentObject.versions)
        // console.table(this.versions)
    }
    LoadUsageGlobal(usageObjects) {
        Object.keys(usageObjects).forEach(objKey => {
            var actuallyObject = usageObjects[objKey]
            var newUsageModel = new UsageModel(objKey, actuallyObject)
            this.usage_global.push(newUsageModel)
        });
    }
    LoadVersions(versionArray) {
        versionArray.map((versionstring) => {
            var newVersionModel = new VersionModel(versionstring)
            this.versions.push(newVersionModel)
        });
    }
}

module.exports = AgentModel