Locator = require './locator'

class BuildLocator extends Locator
  @dimensions [
    'affectedProject',
    'branch',
    'buildType'
    'canceled',
    'count',
    'failedToStart',
    'id',
    'personal',
    'pinned',
    'running',
    'state',
    'status',
    'tags',
    'user'
  ]

module.exports = BuildLocator
