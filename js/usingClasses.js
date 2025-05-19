const bigDay = new Date(2019, 6, 19);
// console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  //   console.log("Once upon a time...");
}
const bigDay2 = new Date(2019, 6, 19);
// console.log(bigDay2.toLocaleDateString());
if (bigDay2.getTime() < Date.now()) {
  //   console.log("Once upon a time...");
}

const bigDay3 = new Date(2019, 6, 19);
// console.log(bigDay3.toLocaleDateString());
if (bigDay3.getTime() < Date.now()) {
  //   console.log("Once upon a time...");
}

// class EventDay {
//     constructor(year, month, day) {
//         this.date = new Date(year, month, day);
//     }

//     printDate() {
//         console.log(this.date.toLocaleDateString());
//     }

//     isPast() {
//         return this.date.getTime() < Date.now();
//     }

//     printStory() {
//         if (this.isPast()) {
//             console.log("Once upon a time...");
//         }
//     }
// }

// const event = new EventDay(2019, 6, 19);
// event.printDate();
// event.printStory();
