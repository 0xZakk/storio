if (Projects.find().count() === 0){
  Projects.insert({
    name: "Secret Lair",
    description: "Bruce Wayne has asked us to build his secret layer to support his new crime-fighting initiative. For a detailed description of the project specs, please see the Specs doc. This project is currently still in ideation.",
    completed: false,
    features: [
    {
      name: "Secret Door",
      description: "Bruce has asked for a secret entrance to his lair so that he can hide from bad guys.",
      completed: false,
      userStories: [
      {
        role: "Batman",
        action: "want to be able to escape being chased by bad guys by disappearing into my secret lair through the secret door",
        benefit: "I can live to fight another day."
      },
      {
        role: "Batman",
        action: "want to be able to open and close the secret door from the Batmobile",
        benefit: "I can open it while driving up to the lair and hide my Batmobile in by Batgarage."
      },
      {
        role: "a bad guy",
        action: "want to have a really hard, almost impossible time finding the secret door",
        benefit: "so that Batman can keep fighting crime"
      }
      ]
    },
    {
      name: "Hele Pad",
      description: "Bruce has requested a secret helepad so that guests have someplace to take off and land when he hosts good guy planning meetings.",
      completed: false
    }]
  });

  Projects.insert({
    name: "Wayne Manor",
    description: "Wayne Manor incurred damages in a recent attack by the Joker. Mr. Wayne has asked us to handle the repairs.",
    completed: false
  });
  
  Projects.insert({
    name: "Batmobile",
    description: "Mr. Wayne asked us to pimp out his car with crime-fighting essentials.",
    completed: true
  });
}








