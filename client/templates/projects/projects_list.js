Template.projectsList.helpers({
  projects: function(){
    return Projects.find();
  }
});

Template.projectsList.events({
  'click .glyphicon-plus': function () {
    Router.go('projectSubmit');
  }
});