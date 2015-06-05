Projects = new Mongo.Collection('projects');

Meteor.methods({
  projectInsert: function (projectAttributes) {
    check(projectAttributes, {
      title: String,
      description: String
    });

    var project = _.extend(projectAttributes, {
      completed: false,
      features: []
    });

    var projectId = Projects.insert(project);
    return {
      _id: projectId
    };
  }
});