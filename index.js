

const dailySchedule = (dayString) => {
  let dayStringUP = dayString.toUpperCase();
  let msg ="";

  
  

  switch (dayStringUP) {
  case "MONDAY":
    msg = `${dayStringUP}: Day 1 of Module 1`; 
    break;
  case "TUESDAY":
    msg = `${dayStringUP}: Eat Muesli`; 
    break;
  case "WEDNESDAY":
    msg = `${dayStringUP}: Send email`; 
    break;
  case "THURSDAY":
    msg = `${dayStringUP}: Workout`; 
    break;
  case "FRIDAY":
    msg = `${dayStringUP}: Read`; 
    break;
  case "SATURDAY":
    msg = `${dayStringUP}: Watch Film`; 
    break;
  case "SUNDAY":
    msg = `${dayStringUP}: Chill`; 
    break;
  default:
     msg =`Sorry [${dayString}] is an invalid day.\nPlease enter any of these days: \nMonday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday `; 
}
  return  msg;
};

console.log("Hi!, you can use this app to view my daily schedule\n");


//Test out different days here
console.log(dailySchedule("MONdaY")+"\n");
console.log(dailySchedule("Wednesday")+"\n");
console.log(dailySchedule("FRIDAY")+"\n");
console.log(dailySchedule("balala")+"\n");
console.log(dailySchedule("test")+"\n");


