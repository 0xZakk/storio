Template.featureEdit.events({
  'click .glyphicon-floppy-disk': function (e, template) {
    e.preventDefault();

    var featureId = this._id;
    var title = $('#title').val();
    var description = $('#description').val();

    Meteor.call('featureUpdate', featureId, title, description, function( error, result){
      if (error) { return throwError(error.reason); }
      Features.update(featureId, {$set: {editable: false}});
    });
  }
});