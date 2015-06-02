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
  }
});