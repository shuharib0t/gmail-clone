export default function Controls({
  chooseInbox,
  chooseStarred,
  chooseSent,
  chooseDrafts,
  chooseLabels,
  chooseMore
}) {
  function inbox() {
    chooseInbox.classList.add('selected');
    chooseStarred.classList.remove('selected'); 
    chooseSent.classList.remove('selected');
    chooseDrafts.classList.remove('selected');
    chooseLabels.classList.remove('selected');
    chooseMore.classList.remove('selected');
  }

  function starred() {
    chooseStarred.classList.add('selected');
    chooseInbox.classList.remove('selected');
    chooseSent.classList.remove('selected');
    chooseDrafts.classList.remove('selected');
    chooseLabels.classList.remove('selected');
    chooseMore.classList.remove('selected');
  }

  function sent() {
    chooseSent.classList.add('selected');
    chooseInbox.classList.remove('selected');
    chooseStarred.classList.remove('selected');
    chooseDrafts.classList.remove('selected');
    chooseLabels.classList.remove('selected');
    chooseMore.classList.remove('selected');
  }

  function drafts() {
    chooseDrafts.classList.add('selected');
    chooseInbox.classList.remove('selected');
    chooseStarred.classList.remove('selected');
    chooseSent.classList.remove('selected');
    chooseLabels.classList.remove('selected');
    chooseMore.classList.remove('selected');
  }

  function labels() {
    chooseLabels.classList.add('selected');
    chooseInbox.classList.remove('selected');
    chooseStarred.classList.remove('selected');
    chooseSent.classList.remove('selected');
    chooseDrafts.classList.remove('selected');
    chooseMore.classList.remove('selected');
  }

  function more() {
    chooseMore.classList.add('selected');
    chooseInbox.classList.remove('selected');
    chooseStarred.classList.remove('selected');
    chooseSent.classList.remove('selected');
    chooseDrafts.classList.remove('selected');
    chooseLabels.classList.remove('selected');
  }

  return {
    inbox,
    starred,
    sent,
    drafts,
    labels,
    more
  }
}