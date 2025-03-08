function scuberGreetingForFeet(){
  if(distance <=400) {
    return "THis one is on me!";
    else if (distance>400 && distance <= 2000) {
      return "That will be twenty bucks.";
    } else if (distance > 2000 && distance <=2500) {
      return "I wil gladly take your thirty bucks.";
} else [
  return "No can do.";
}
}

function ternaryCheckCity(){
 return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}