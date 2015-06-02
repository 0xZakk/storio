Template.projectEdit.events({
  'submit form': function (e) {
    e.preventDefault();

    var currentProjectId = this._id;
    var projectProperties = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    };

    Projects.update(currentProjectId, {$set: projectProperties}, function(error){
      if (error) {
        throwError(error.reason);
      } else{
        Router.go('projectPage', {_id: currentProjectId});
      }
    });
  }
});