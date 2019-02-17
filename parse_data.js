const fs = require('fs')
const CanIUseModel = require('./Models/CanIUseModel')

const DATAPATH = 'data/data.json'

const loadCanIUseBufferIntoCanIUseModelTheseFunctionNamesAreLong = dataPath => {
    var canIUseBuffer = fs.readFileSync(dataPath)
    canIUseData = canIUseBuffer.toString('utf-8')
    return JSON.parse(canIUseData)
}

const canIUseDataModel = loadCanIUseBufferIntoCanIUseModelTheseFunctionNamesAreLong(DATAPATH)

const mah_model = new CanIUseModel(canIUseDataModel);

mah_model.CheckFeatureOnPage_html()