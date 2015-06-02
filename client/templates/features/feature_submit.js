Template.featureSubmit.events({
  'click .glyphicon-floppy-disk': function (e, template) {
    e.preventDefault();

    var feature = {
      projectId: template.data._id,
      title: $('#title').val(),
      description: $('#description').val(),
    };

    Meteor.call('featureInsert', feature, function( error, result){
      if (error) { return throwError(error.reason); }
      Session.set('newFeature', false);
    });
  }
});