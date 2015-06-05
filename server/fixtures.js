// if (Projects.find().count() === 0){
//   var secretLairId = Projects.insert({
//     title: "Secret Lair",
//     description: "Bruce Wayne has asked us to build his secret layer to support his new crime-fighting initiative. For a detailed description of the project specs, please see the Specs doc. This project is currently still in ideation.",
//     completed: false
//   });

//   Projects.insert({
//     title: "Wayne Manor",
//     description: "Wayne Manor incurred damages in a recent attack by the Joker. Mr. Wayne has asked us to handle the repairs.",
//     completed: false
//   });
  
//   Projects.insert({
//     title: "Batmobile",
//     description: "Mr. Wayne asked us to pimp out his car with crime-fighting essentials.",
//     completed: true
//   });

//   var secretDoor = Features.insert({
//     projectId: secretLairId,
//     title: "Secret Door",
//     description: "Bruce has asked for a secret entrance to his lair so that he can hide from bad guys.",
//     completed: false,
//   });

//   Features.insert({
//     projectId: secretLairId,
//     title: "Hele Pad",
//     description: "Bruce has requested a secret helepad so that guests have someplace to take off and land when he hosts good guy planning meetings.",
//     completed: false,
//   });

//   Stories.insert({
//     featureId: secretDoor,
//     role: "some role",
//     action: "want to perform some action",
//     benefit: "I get some benefit"
//   });

//   Stories.insert({
//     projectId: secretLairId,
//     featureId: secretDoor,
//     role: "some other role",
//     action: "want to perform another action",
//     benefit: "I get some other benefit",
//     completed: false,
//     editable: false
//   });

//   Stories.insert({
//     projectId: secretLairId,
//     featureId: secretDoor,
//     role: "some role",
//     action: "want to perform a third action",
//     benefit: "I get a third benefit",
//     completed: false,
//     editable: false
//   });
// }











