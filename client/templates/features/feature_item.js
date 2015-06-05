Template.featureItem.events({
  'click .feature-edit-btns .glyphicon-remove': function (e) {
    e.preventDefault();

    var featureId = this._id;
    
    if (confirm("Delete this feature?")) {
      Meteor.call('featureRemove', featureId, function (error, result) {
        if (error) { return throwError(error.reason); }
      });
    }
  },
  'click .feature-edit-btns .glyphicon-pencil': function (e) {
    e.preventDefault();
    var featureId = this._id;
    Features.update(featureId, {$set: {editable: true}});
  },
  'click .feature-edit-btns .glyphicon-plus': function (e) {
    e.preventDefault();

    var featureId = this._id;
    Features.update(featureId, {$set: {initiated: true}});
  },
  'click .story-new-btns .glyphicon-ok': function (e) {
    e.preventDefault();
    
    var featureId = this._id;
    Features.update(featureId, {$set: {initiated: false}});
  }
});

Template.featureItem.helpers({
  userStories: function () {
    return Stories.find({featureId: this._id});
  }
});