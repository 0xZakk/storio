Template.storySubmit.onCreated(function(){
  Session.set('storySubmitErrors', false);
});

Template.storySubmit.events({
  'click .story-new-btns .glyphicon-floppy-disk': function (e) {
    e.preventDefault();

    var userStory = {
      projectId: this.projectId,
      featureId: this._id,
      role: $('#role').val(),
      action: $('#action').val(),
      benefit: $('#benefit').val()
    };

    var errors = validateStory(userStory);
    if (errors)
      return Session.set('storySubmitErrors', true);

    Meteor.call('storyInsert', userStory, function(error, result) {
      if (error) { return throwError(error.reason); }
      $('#role').val("");
      $('#action').val("");
      $('#benefit').val("");
      Session.set('storySubmitErrors', false);
    });
  },
});

Template.storySubmit.helpers({
  errorClass: function () {
    return !!Session.get('storySubmitErrors') ? 'danger' : '';
  }
});

