import {
  chooseInbox,
  chooseStarred,
  chooseSent,
  chooseDrafts,
  chooseLabels,
  chooseMore
} from './elements.js'

export default function ({
  controls,
}) {

  chooseInbox.addEventListener("click", () => {
    controls.inbox();
  });

  chooseStarred.addEventListener("click", () => {
    controls.starred();
  });
  
  chooseSent.addEventListener("click", () => {
    controls.sent();
  });

  chooseDrafts.addEventListener("click", () => {
    controls.drafts();
  });

  chooseLabels.addEventListener("click", () => {
    controls.labels();
  });
  
  chooseMore.addEventListener("click", () => {
    controls.more();
  });
}