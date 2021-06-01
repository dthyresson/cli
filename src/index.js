const process = require('process')

const updateNotifier = require('update-notifier')

const pkg = require('../package.json')

// 12 hours
const UPDATE_CHECK_INTERVAL = 432e5

process.env.OCLIF_TS_NODE = '0'

try {
  updateNotifier({
    pkg,
    updateCheckInterval: UPDATE_CHECK_INTERVAL,
  }).notify()
} catch (error) {
  console.log('Error checking for updates:')
  console.log(error)
}

module.exports = require('@oclif/command')
