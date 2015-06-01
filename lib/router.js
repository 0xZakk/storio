Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('projects');
  }
});

Router.route('/', {name: 'home'});

Router.route('/projects', {
  name: 'projectsList'
});

Router.route('/projects/:_id', {
  name: 'projectPage',
  data: function() { return Projects.findOne(this.params._id); }
});