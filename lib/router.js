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
  waitOn: function() {
    return Meteor.subscribe('features', this.params._id);
  },
  data: function() { return Projects.findOne(this.params._id); }
});

Router.route('/submit', {name: 'projectSubmit'});

Router.route('/projects/:_id/edit', {
  name: 'projectEdit',
  data: function() { return Projects.findOne(this.params._id); }
});