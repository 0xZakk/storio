if (Projects.find().count() === 0){
  var secretLairId = Projects.insert({
    title: "Secret Lair",
    description: "Bruce Wayne has asked us to build his secret layer to support his new crime-fighting initiative. For a detailed description of the project specs, please see the Specs doc. This project is currently still in ideation.",
    completed: false
  });

  Projects.insert({
    title: "Wayne Manor",
    description: "Wayne Manor incurred damages in a recent attack by the Joker. Mr. Wayne has asked us to handle the repairs.",
    completed: false
  });
  
  Projects.insert({
    title: "Batmobile",
    description: "Mr. Wayne asked us to pimp out his car with crime-fighting essentials.",
    completed: true
  });

  Features.insert({
    projectId: secretLairId,
    title: "Secret Door",
    description: "Bruce has asked for a secret entrance to his lair so that he can hide from bad guys.",
    completed: false,
    userStories: []
  });

  Features.insert({
    projectId: secretLairId,
    title: "Hele Pad",
    description: "Bruce has requested a secret helepad so that guests have someplace to take off and land when he hosts good guy planning meetings.",
    completed: false,
    userStories: []
  });
}











