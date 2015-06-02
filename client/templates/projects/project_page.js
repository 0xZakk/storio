Template.projectPage.events({
  'click .project-edit-btns .glyphicon-remove': function (e) {
    e.preventDefault();

    if (confirm("Delete this project?")) {
      var currentProjectId = this._id;
      Projects.remove(currentProjectId);
      Router.go('projectsList');
    }
  },
  'click .glyphicon-pencil': function () {
    Router.go('projectEdit');
  },
  'click .glyphicon-plus': function () {
    return Session.set('newFeature', true);
  }
});

Template.projectPage.helpers({
  newFeature: function () {
    return Session.get('newFeature', false);
  }
});

Template.projectPage.helpers({
  features: function () {
    return Features.find({projectId: this._id});
  }
});