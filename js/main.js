import Controls from './controls.js'
import Events from './events.js'
import {
  chooseInbox,
  chooseStarred,
  chooseSent,
  chooseDrafts,
  chooseLabels,
  chooseMore
} from './elements.js'

const controls = Controls ({
  chooseInbox,
  chooseStarred,
  chooseSent,
  chooseDrafts,
  chooseLabels,
  chooseMore
})

Events({controls})