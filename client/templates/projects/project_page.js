Template.projectPage.events({
  'click .project-edit-btns .glyphicon-remove': function (e) {
    e.preventDefault();

    if (confirm("Delete this project?")) {
      var currentProjectId = this._id;
      Projects.remove(currentProjectId);
      Router.go('projectsList');
    }
  },
  'click .project-edit-btns .glyphicon-pencil': function () {
    Router.go('projectEdit');
  },
  'click .project-edit-btns .glyphicon-plus': function () {
    return Session.set('newFeature', true);
  }
});

Template.projectPage.helpers({
  newFeature: function () {
    return Session.get('newFeature', false);
  },
  features: function () {
    return Features.find({projectId: this._id});
  }
});