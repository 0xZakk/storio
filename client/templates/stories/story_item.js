Template.storyItem.helpers({
  status: function () {
    var status = this.completed;

    if (status) {
      return "success";
    }
  }
});