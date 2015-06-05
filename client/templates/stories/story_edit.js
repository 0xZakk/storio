Template.storyEdit.events({
  'click .story-edit-btns .glyphicon-pencil': function (e) {
    e.preventDefault();
    Stories.update(this._id, {$set: {editable: true}});
  },
  'click .story-edit-btns .glyphicon-floppy-disk': function (e) {
    e.preventDefault();
    Stories.update(this._id, {$set: {editable: false}});
  },
  'click .story-edit-btns .glyphicon-ok': function (e) {
    e.preventDefault();
    Stories.update(this._id, {$set: {completed: true}});
  },
  'click .story-edit-btns .glyphicon-wrench': function (e) {
    e.preventDefault();
    Stories.update(this._id, {$set: {completed: false}});
  },
  'click .story-edit-btns .glyphicon-remove': function (e) {
    e.preventDefault();
    Stories.remove(this._id);
  }
});

Template.storyEdit.helpers({
  status: function () {
    var status = this.completed;

    if (status) {
      return "success";
    }
  }
});