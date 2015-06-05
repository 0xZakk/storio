Meteor.publish('projects', function() {
  return Projects.find();
});

Meteor.publish('features', function(projectId){
  check(projectId, String);
  return Features.find({projectId: projectId});
});

Meteor.publish('stories', function(projectId){
  check(projectId, String);
  return Stories.find({projectId: projectId});
});