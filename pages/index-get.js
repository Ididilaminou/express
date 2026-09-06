'use strict'

const { readFile } = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)

const READ_OPTIONS = { encoding: 'utf-8' }
const INDEX_URL = ''

module.exports = async()=>{
    const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS)

    return contenu
}