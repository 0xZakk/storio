Template.projectItem.helpers({
  status: function () {
    var status = this.completed;
    var warning = "panel-warning";
    var success = "panel-success";
    if (status) {
      return success;
    } else{
      return warning;
    }
  }
});

