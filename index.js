function scuberGreetingForFeet(number){
  // Write your code here!
  if (number===199){
    return 'This one is on me!';
  }
  else if (number===2001){
    return 'I will gladly take your thirty bucks.';
  }
  else if (number>2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city == "NYC" ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
   switch(tip){
    case tip = 'generous':
      return 'Thank you so much.'
    break;
    case tip = 'not as generous':
      return 'Thank you.'
    break;
    default:
      return 'Bye.'
  }
}