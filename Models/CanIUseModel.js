const AgentModel = require('./AgentModel')
const EraModel = require('./EraModel')
const StatusModel = require('./StatusModel')
const CategoryModel = require('./CategoryModel')
const StandardModel = require('./Standards/StandardModel')
const LivingStandardModel = require('./Standards/LivingStandardFeature')

class CanIUseModel {
    constructor(dataModel) {
        this.eras = []
        this.agents = []
        this.statuses = []
        this.categories = []
        this.lastUpdated = dataModel.updated
        // i called this datas, because data wasn't a nice pretty salmon colour in my editor
        this.datas = []

        this.LoadAgents(dataModel.agents)
        //console.table(this.agents)

        this.LoadEras(dataModel.eras)
        // console.table(this.eras)

        this.LoadStatuses(dataModel.statuses)
        // console.table(this.statuses)

        this.LoadCategories(dataModel.cats)
        // console.table(this.categories)

        this.LoadFeatures(dataModel.data)
        //console.table(this.datas)

    }
    LoadEras(eraObjects) {
        Object.keys(eraObjects).forEach(objKey => {
            var actuallyObject = eraObjects[objKey]
            var newEraModel = new EraModel(objKey, actuallyObject)
            this.eras.push(newEraModel)
        });
    }
    LoadAgents(agentObjects) {
        Object.keys(agentObjects).forEach(objKey => {
            var actuallyObject = agentObjects[objKey]
            var newAgentModel = new AgentModel(objKey, actuallyObject)
            this.agents.push(newAgentModel)
        });
    }
    LoadStatuses(statusObjects) {
        Object.keys(statusObjects).forEach(objKey => {
            var actuallyObject = statusObjects[objKey]
            var newStatusModel = new StatusModel(objKey, actuallyObject)
            this.statuses.push(newStatusModel)
        });
    }
    LoadCategories(categoryObjects) {
        Object.keys(categoryObjects).forEach(objKey => {
            var actuallyObject = categoryObjects[objKey]
            var newCategoryModel = new CategoryModel(objKey, actuallyObject)
            this.categories.push(newCategoryModel)
        });
    }
    LoadFeatures(featureObjects) {
        Object.keys(featureObjects).forEach(objKey => {
            var featureObject = featureObjects[objKey]
            var newFeatureModel = null
            if (featureObject.status == "ls") {
                newFeatureModel = new LivingStandardModel(objKey, featureObject)
            } else {
                // newFeatureModel = new FeatureModels.FeatureModel(objKey, featureObject)
            }
            // newFeatureModel.getTagName()
            this.datas.push(newFeatureModel)
        });
    }
}

module.exports = CanIUseModel
