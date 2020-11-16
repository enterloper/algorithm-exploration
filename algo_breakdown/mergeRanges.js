/*
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

  { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm


Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
*/

const times1 = [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 }
];
const times2 =   [
    { startTime: 1, endTime: 2 }, 
    { startTime: 2, endTime: 3 }
];
const times3 =   [
    { startTime: 1, endTime: 5 }, 
    { startTime: 2, endTime: 3 }
];

const times4 =   [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
];

function mergeRanges(meetings) {

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });
  
    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];
  
    for (let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting    = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  
      // If the current meeting overlaps with the last merged meeting, use the
      // later end time of the two
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      } else {
  
        // Add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }
  
    return mergedMeetings;
  }

console.log('1:', mergeRanges(times1));
console.log('2:', mergeRanges(times2));
console.log('3:', mergeRanges(times3));
console.log('4:', mergeRanges(times4));