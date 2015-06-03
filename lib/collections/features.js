Features = new Mongo.Collection('features');

Meteor.methods({
  featureInsert: function (featureAttributes) {
    check(featureAttributes, {
      projectId: String,
      title: String,
      description: String
    });

    var feature = _.extend(featureAttributes, {
      completed: false,
      userStories: []
    });

    Features.insert(feature);
  },
  featureRemove: function (featureId) {
    check(featureId, String);
    Features.remove(featureId);
  },
  featureUpdate: function (featureId, title, description) {
    check(featureId, String);
    check(title, String);
    check(description, String);

    Features.update(featureId, {$set: {title: title, description: description} });
  }
});