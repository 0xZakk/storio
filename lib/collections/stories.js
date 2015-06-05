Stories = new Mongo.Collection('stories');

Meteor.methods({
  storyInsert: function(storyAttributes) {
    check(storyAttributes, {
      projectId: String,
      featureId: String,
      role: String,
      action: String,
      benefit: String
    });

    var story = _.extend(storyAttributes, {
      completed: false,
      editable: false
    });

    Stories.insert(story);
  }
});

validateStory = function(userStory) {
  if (!userStory.role || !userStory.action || !userStory.benefit)
    return true;
};
