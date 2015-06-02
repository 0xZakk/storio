Template.projectSubmit.events({
  'submit form': function (e) {
    e.preventDefault();

    var project = {
      title: $(e.target).find("[name=title]").val(),
      description: $(e.target).find("[name=description]").val()
    };

    Meteor.call('projectInsert', project, function (error, result) {
      if (error) { return throwError(error.reason); }

      Router.go('projectPage', {_id: result._id});
    });
  }
});