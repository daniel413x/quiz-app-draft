import keepToTheRight from '@/public/keep-to-the-right.jpg';
import neutralGear from '@/public/neutral-gear.jpeg';
import stopSignAhead from '@/public/stop-sign-ahead.jpg';
import chevronRight from '@/public/chevron-right.jpg';
import chevronLeft from '@/public/chevron-left.jpg';
import maximumClearance from '@/public/maximum-clearance-sign.png';
import merge from '@/public/merge-sign.png';
import addedLane from '@/public/added-lane-sign.png';
import addedLaneMergeSigns from '@/public/added-lane-merge-signs.png';
import yieldSign from '@/public/yield.png';
import twoWayTraffic from '@/public/two-way-traffic.jpg';
import { StaticImageData } from 'next/image';
import slipperyRoad from '@/public/slippery-road-sign.png';
import turnsAndCurvesSign from '@/public/turns-and-curves-signs.png';
import turnsAndCurvesSignTwo from '@/public/turns-and-curves-signs-2.png';
import leftOrRightSign from '@/public/left-or-right-sign.jpg';

import leftCurveAhead from '@/public/left-curve-ahead.png';
import trafficSignalAhead from '@/public/traffic-signal-ahead.png';
import yieldAhead from '@/public/yield-ahead.png';

export type Answer = {
  answer: string;
  order?: number;
  id: string;
};

export type Question = {
  question: string;
  image?: string | StaticImageData;
  answers: Answer[];
  correctAnswer: string;
};

type QuizDataObject = {
  name: string;
  questions: Question[];
};

type QuizData = {
  [key: string]: QuizDataObject;
};

const quizData: QuizData = {
  'learners-permit': {
    name: 'Learner\'s Permit',
    questions: [
      {
        question: 'When is it appropriate to use your vehicle\'s horn in the District of Columbia?',
        answers: [
          { id: '0', answer: 'To alert another driver of potential danger' },
          { id: '1', answer: 'To express frustration in heavy traffic' },
          { id: '2', answer: 'To greet a friend' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In the District of Columbia, when traveling on a one-way street and you want to make a right turn onto another one-way street, you may turn right on red after coming to a complete stop.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'If a law enforcement officer stops you while driving in the District of Columbia, you must present which of the following documents?',
        answers: [
          { id: '0', answer: 'A valid driver license' },
          { id: '1', answer: 'Vehicle registration' },
          { id: '2', answer: 'Proof of insurance' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What does a yellow traffic sign indicate?',
        answers: [
          { id: '0', answer: 'Stop, yield, do not enter, or wrong way' },
          { id: '1', answer: 'General warning of what to expect ahead' },
          { id: '2', answer: 'Construction and maintenance work area warning' },
          { id: '3', answer: 'Regulatory information' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'How long must you maintain a valid DC driver license without any pointable moving violations to be eligible for a Good Point on your driving record?',
        answers: [
          { id: '0', answer: '6 months' },
          { id: '1', answer: '1 year' },
          { id: '2', answer: '18 months' },
          { id: '3', answer: '2 years' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'In the District of Columbia, seat belt laws apply to:',
        answers: [
          { id: '0', answer: 'Only the driver' },
          { id: '1', answer: 'Only front seat passengers' },
          { id: '2', answer: 'All passengers regardless of seating position' },
          { id: '3', answer: 'Passengers under the age of 16' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Your driver license may be suspended for failing to pay parking tickets.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Under what conditions can you make a left turn on red in the District of Columbia?',
        answers: [
          { id: '0', answer: 'After coming to a full stop and ensuring the way is clear' },
          { id: '1', answer: 'Only from a one-way street onto another one-way street' },
          { id: '2', answer: 'When directed by a police officer' },
          { id: '3', answer: 'Both B and C' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'If you are under age 18, you must participate in the Gradual Rearing of Adult Drivers (GRAD) program without exception.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'If you must use a cell phone while driving, you should:',
        answers: [
          { id: '0', answer: 'Hold it in your hand and keep it brief' },
          { id: '1', answer: 'Use a hands-free device and keep conversations short' },
          { id: '2', answer: 'Pull over to a safe location before using it' },
          { id: '3', answer: 'Use text messaging only when stopped at a light' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'When approaching an intersection with a flashing yellow light, you should:',
        answers: [
          { id: '0', answer: 'Stop completely before proceeding' },
          { id: '1', answer: 'Proceed with caution' },
          { id: '2', answer: 'Ignore the light if the way is clear' },
          { id: '3', answer: 'Speed up to clear the intersection quickly' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'To combat drowsiness while driving, you should:',
        answers: [
          { id: '0', answer: 'Turn up the radio volume' },
          { id: '1', answer: 'Roll down the windows for fresh air' },
          { id: '2', answer: 'Find a safe place to stop and rest' },
          { id: '3', answer: 'Drink caffeinated beverages continuously' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'If another driver is attempting to pass you on the left, you should:',
        answers: [
          { id: '0', answer: 'Maintain your current speed and position' },
          { id: '1', answer: 'Increase your speed to prevent them from passing' },
          { id: '2', answer: 'Move to the right to allow them to pass safely' },
          { id: '3', answer: 'Signal to them that it is unsafe to pass' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Points for traffic violations in the District of Columbia remain on your record for how long?',
        answers: [
          { id: '0', answer: '1 year' },
          { id: '1', answer: '2 years' },
          { id: '2', answer: '3 years' },
          { id: '3', answer: '4 years' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'When merging onto a highway from a short entrance ramp, you should:',
        answers: [
          { id: '0', answer: 'Wait until you find a gap in traffic to speed up' },
          { id: '1', answer: 'Enter the far right lane immediately' },
          { id: '2', answer: 'Use the shoulder to gain speed' },
          { id: '3', answer: 'Merge at a slower speed and then accelerate' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'With a valid learner\'s permit in the District of Columbia, you are allowed to drive:',
        answers: [
          { id: '0', answer: 'Only during daylight hours' },
          { id: '1', answer: 'With a licensed driver aged 21 or older in the passenger seat' },
          { id: '2', answer: 'On highways but not residential streets' },
          { id: '3', answer: 'Only within city limits' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'During the learner permit stage, using a mobile phone while driving is:',
        answers: [
          { id: '0', answer: 'Allowed if using hands-free accessories' },
          { id: '1', answer: 'Permitted only for emergency calls' },
          { id: '2', answer: 'Strictly prohibited' },
          { id: '3', answer: 'Allowed during non-peak hours' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'To reduce glare from oncoming headlights at night, you should:',
        answers: [
          { id: '0', answer: 'Look directly at the lights' },
          { id: '1', answer: 'Focus on the centerline of the road' },
          { id: '2', answer: 'Glance to the side of the road intermittently' },
          { id: '3', answer: 'Keep your high beams on' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'When recovering from a skid, you should:',
        answers: [
          { id: '0', answer: 'Steer in the direction you want to go' },
          { id: '1', answer: 'Steer in the direction of the skid' },
          { id: '2', answer: 'Brake firmly' },
          { id: '3', answer: 'Accelerate out of the skid' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Stopping a vehicle in front of a pedestrian crossing is:',
        answers: [
          { id: '0', answer: 'Allowed if there are no pedestrians nearby' },
          { id: '1', answer: 'Prohibited' },
          { id: '2', answer: 'Permitted only if the pedestrian has passed your lane' },
          { id: '3', answer: 'Required by law' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'When making a right turn, you must yield to:',
        answers: [
          { id: '0', answer: 'Bicyclists' },
          { id: '1', answer: 'Pedestrians' },
          { id: '2', answer: 'Other vehicles turning right' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'On wet roads, you should:',
        answers: [
          { id: '0', answer: 'Drive faster to avoid water buildup' },
          { id: '1', answer: 'Drive at normal speeds' },
          { id: '2', answer: 'Reduce speed and increase following distance' },
          { id: '3', answer: 'Use cruise control' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Highway bridges and ramps freeze:',
        answers: [
          { id: '0', answer: 'Before the rest of the road' },
          { id: '1', answer: 'At the same rate as the rest of the road' },
          { id: '2', answer: 'After the rest of the road' },
          { id: '3', answer: 'Never' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'If a police officer directs you to stop at a green light, you should:',
        answers: [
          { id: '0', answer: 'Obey the traffic signal' },
          { id: '1', answer: 'Obey the police officer' },
          { id: '2', answer: 'Continue driving' },
          { id: '3', answer: 'Wait for the officer to pass' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'In the District of Columbia, children under 3 years old must be secured in a child safety seat in the back seat of the vehicle.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'When driving behind a large truck, you should:',
        answers: [
          { id: '0', answer: 'Drive close behind for better visibility' },
          { id: '1', answer: 'Stay out of its blind spots' },
          { id: '2', answer: 'Flash your lights to be seen' },
          { id: '3', answer: 'Use your high beams' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'A roundabout is:',
        answers: [
          { id: '0', answer: 'An intersection that allows you to turn left on red' },
          { id: '1', answer: 'A circular intersection where all traffic travels counterclockwise' },
          { id: '2', answer: 'A type of highway exit' },
          { id: '3', answer: 'An area where cars can make U-turns' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'You should only use your vehicle\'s horn to warn a pedestrian or the driver of another vehicle of your presence.',
        answers: [
          { id: '0', answer: 'False' },
          { id: '1', answer: 'True' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'In the District of Columbia, when traveling on a one-way street and you want to make a left turn onto another one-way street, it is illegal to make a left turn on a red traffic signal.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'If stopped by law enforcement while driving a motor vehicle in the District of Columbia, you will be responsible for providing your valid driver license, vehicle registration and proof of insurance.',
        answers: [
          { id: '0', answer: 'False' },
          { id: '1', answer: 'True' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Color of roadway signs tell you what kind of information it has to offer: A red sign means:',
        answers: [
          { id: '0', answer: 'Stop, yield, do not enter or wrong way' },
          { id: '1', answer: 'General warning of what to expect ahead' },
          { id: '2', answer: 'Construction and maintenance work area warning' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'If you maintain a valid DC driver license for a full calendar year without obtaining pointable moving violations, you may be eligible to receive a Good Point on your driving record.',
        answers: [
          { id: '0', answer: 'False' },
          { id: '1', answer: 'True' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'The District of Columbia law requires that the driver and _____________ wear seat belts.',
        answers: [
          { id: '0', answer: 'All passengers' },
          { id: '1', answer: 'Front seat passenger' },
          { id: '2', answer: 'Passengers under the age of 18' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'All pedestrian crosswalks are marked with white painted markings.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Your driver license cannot be suspended for failure to pay child support.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'You may only make a right turn on red:',
        answers: [
          { id: '0', answer: 'When there are no pedestrians present' },
          { id: '1', answer: 'After coming to a full and complete stop' },
          { id: '2', answer: 'When there is not a sign prohibiting right turns on red' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'If you are under age 21, your parent/legal guardian can waive the requirement for you to participate in the Gradual Rearing of Adult Drivers (GRAD) program.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'If you are driving and need to use a cell phone to make a call or send a text message you should:',
        answers: [
          { id: '0', answer: 'Use the phone’s voice feature and don’t look down to type a message' },
          { id: '1', answer: 'Pull off the road safely and stop' },
          { id: '2', answer: 'Slow down and stay in the curb lane' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'You are approaching an intersection where the traffic light has changed to yellow:',
        answers: [
          { id: '0', answer: 'You must clear the intersection before the light turns red' },
          { id: '1', answer: 'You should come to a safe stop and wait for the light to turn green' },
          { id: '2', answer: 'You should proceed with caution' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'If you become drowsy while driving, you should:',
        answers: [
          { id: '0', answer: 'Try to fight it' },
          { id: '1', answer: 'Take a break' },
          { id: '2', answer: 'Take some “stay-awake” drugs' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'When the driver of another vehicle is about to overtake and pass your vehicle, you must:',
        answers: [
          { id: '0', answer: 'Move to the right and allow such vehicle to pass' },
          { id: '1', answer: 'Speed up so that passing is not necessary' },
          { id: '2', answer: 'Move to the left to prevent passing' },
          { id: '3', answer: 'Signal to the other driver not to pass' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Points for moving traffic violations will stay on your driver record for:',
        answers: [
          { id: '0', answer: '3 Years' },
          { id: '1', answer: '1 Year' },
          { id: '2', answer: '2 Years' },
          { id: '3', answer: '4 Years' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'When on a short entrance to an interstate where there is no merge area or lane:',
        answers: [
          { id: '0', answer: 'Enter the far right traffic lane and speed up to the flow of traffic' },
          { id: '1', answer: 'Use the shoulder of the main road to get up to the speed of the traffic' },
          { id: '2', answer: 'Speed up on the entrance only after you have found a gap in traffic' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'You have a valid District of Columbia learner permit. To drive a vehicle you must:',
        answers: [
          { id: '0', answer: 'Drive only on streets that have very little traffic' },
          { id: '1', answer: 'Have a person that is 21 years or older with a valid driver license seated beside you wearing a seatbelt' },
          { id: '2', answer: 'Only drive in the District of Columbia' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '1',
      },
      {
        question: 'During your learner permit stage, while driving in the District of Columbia you may use a mobile phone or other electronic devices with a hands-free accessory.',
        answers: [
          { id: '0', answer: 'False' },
          { id: '1', answer: 'True' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'To avoid the glare from oncoming headlights:',
        answers: [
          { id: '0', answer: 'Focus your eyes on the center line of the road' },
          { id: '1', answer: 'Glance back and forth between the side of the road and straight ahead' },
          { id: '2', answer: 'Focus your eyes straight ahead' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'To get your vehicle out of a skid, you should first:',
        answers: [
          { id: '0', answer: 'Steer in the opposite direction of the skid' },
          { id: '1', answer: 'Apply brakes hard' },
          { id: '2', answer: 'Steer in the direction of the skid' },
          { id: '3', answer: 'Steer straight ahead' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'In the District, it is illegal to stop a vehicle:',
        answers: [
          { id: '0', answer: 'In front of a pedestrian crossing the street' },
          { id: '1', answer: 'At a parking meter' },
          { id: '2', answer: 'On a sidewalk' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'When making right turns, you must:',
        answers: [
          { id: '0', answer: 'Yield to bicyclists traveling between you and the right side of the road' },
          { id: '1', answer: 'Be alert for vehicles ahead that are also turning right' },
          { id: '2', answer: 'Yield to pedestrians in crosswalks' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'When driving on wet roadways, you should remember:',
        answers: [
          { id: '0', answer: 'Driving on wet roadways can cause hydroplaning' },
          { id: '1', answer: 'You should give yourself additional time to stop' },
          { id: '2', answer: 'Pavement is slick immediately after rainfall' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Highways and roads freeze before ramps and bridges:',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'If a traffic signal light is green and a police officer signals you to stop, you should:',
        answers: [
          { id: '0', answer: 'Obey the traffic officer' },
          { id: '1', answer: 'Obey the traffic signal' },
          { id: '2', answer: 'Do what the vehicle in front of you does' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In the District of Columbia, a motor vehicle may not transport any child less than 3 years old unless the child is properly restrained in a child seat in the front seat of the vehicle:',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'If you are driving behind a truck, you should:',
        answers: [
          { id: '0', answer: 'Speed up to pass it' },
          { id: '1', answer: 'Stay out of its blind spots' },
          { id: '2', answer: 'Always drive with your bright headlights on so the truck can see you' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'A roundabout is:',
        answers: [
          { id: '0', answer: 'A circular intersection at which all traffic travels counterclockwise, always to the right, around a central island' },
          { id: '1', answer: 'A merge area on the highway' },
          { id: '2', answer: 'An intersection that allows you to make a right turn on red' },
        ],
        correctAnswer: '0',
      }, {
        question: 'When driving behind a large truck, you should:',
        answers: [
          { id: '0', answer: 'Maintain a greater following distance' },
          { id: '1', answer: 'Use your high beams for better visibility' },
          { id: '2', answer: 'Pass quickly on the right side' },
          { id: '3', answer: 'Tailgate to prevent other cars from cutting in' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How many feet should you allow from the side of your vehicle when driving around bicyclists?',
        answers: [
          { id: '0', answer: '5 feet' },
          { id: '1', answer: '4 feet' },
          { id: '2', answer: '3 feet' },
          { id: '3', answer: '2 feet' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'How many feet should you allow from the side of your vehicle when driving around bicyclists?',
        answers: [
          { id: '0', answer: '5 feet' },
          { id: '1', answer: '4 feet' },
          { id: '2', answer: '3 feet' },
          { id: '3', answer: '2 feet' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'When a school bus is stopping or has stopped and is operating the alternating flashing red lights:',
        answers: [
          { id: '0', answer: 'All vehicles must stop from the front or the rear of the school bus' },
          { id: '1', answer: 'Only the vehicles behind the school bus must stop' },
          { id: '2', answer: 'Vehicles on the other side of a divided highway must also stop' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In the District of Columbia, points may be assigned to your driver record for:',
        answers: [
          { id: '0', answer: 'Moving traffic violations' },
          { id: '1', answer: 'Parking tickets' },
          { id: '2', answer: 'Photo tickets' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Shape of a traffic sign can tell you about the sign\'s message: An octagon sign means:',
        answers: [
          { id: '0', answer: 'Regulatory or Guide' },
          { id: '1', answer: 'Warning' },
          { id: '2', answer: 'Yield' },
          { id: '3', answer: 'Stop' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Unless otherwise posted, the speed limit in the District of Columbia is:',
        answers: [
          { id: '0', answer: '20mph' },
          { id: '1', answer: '35mph' },
          { id: '2', answer: '40mph' },
          { id: '3', answer: '30mph' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Shape of a traffic sign can tell you about the sign\'s message: A diamond sign means:',
        answers: [
          { id: '0', answer: 'Regulatory or Guide' },
          { id: '1', answer: 'Warning' },
          { id: '2', answer: 'Stop' },
          { id: '3', answer: 'Yield' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Why is double parking prohibited?',
        answers: [
          { id: '0', answer: 'Because the car at the curb cannot get out' },
          { id: '1', answer: 'Because it blocks traffic and causes accidents' },
          { id: '2', answer: 'Your car may roll away since there is no curb' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Highways and roads freeze before ramps and bridges:',
        answers: [
          { id: '0', answer: 'False' },
          { id: '1', answer: 'True' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How far away from a fire hydrant must a vehicle be parked?',
        answers: [
          { id: '0', answer: '15 feet' },
          { id: '1', answer: '5 feet' },
          { id: '2', answer: '10 feet' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'When making a left turn at an intersection, you must:',
        answers: [
          { id: '0', answer: 'Yield to oncoming traffic' },
          { id: '1', answer: 'Signal 100 feet before the turn' },
          { id: '2', answer: 'Check for pedestrians in the crosswalk' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'When driving on snowy or icy roads, you should:',
        answers: [
          { id: '0', answer: 'Increase your speed to reduce travel time' },
          { id: '1', answer: 'Follow closely behind other vehicles for traction' },
          { id: '2', answer: 'Allow extra distance for braking' },
          { id: '3', answer: 'Use cruise control for consistent speed' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'It is illegal to park a vehicle:',
        answers: [
          { id: '0', answer: 'In front of a fire hydrant' },
          { id: '1', answer: 'At a broken parking meter' },
          { id: '2', answer: 'On a residential street overnight' },
          { id: '3', answer: 'In front of a store during business hours' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'It is more dangerous to drive at the maximum speed limit at night than during daytime as:',
        answers: [
          { id: '0', answer: 'The roadways tend to be more slippery at night' },
          { id: '1', answer: 'Some drivers unlawfully drive with parking lights only' },
          { id: '2', answer: 'Your reaction time is slower at night' },
          { id: '3', answer: 'You cannot see as far ahead at night' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'When changing lanes on a highway:',
        answers: [
          { id: '0', answer: 'Check your blind spots by glancing over your shoulder' },
          { id: '1', answer: 'Check the rearview and outside mirrors' },
          { id: '2', answer: 'Always signal a lane change' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'In the District of Columbia, when traveling on a one way street and you want to make a left turn onto another one way street, it is illegal to make a left turn on a red traffic signal.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How many feet should you allow from the side of your vehicle when driving around bicyclists?',
        answers: [
          { id: '0', answer: '5 feet' },
          { id: '1', answer: '4 feet' },
          { id: '2', answer: '3 feet' },
          { id: '3', answer: '2 feet' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'A roundabout in the District of Columbia is designed to:',
        answers: [
          { id: '0', answer: 'Control the speed of traffic' },
          { id: '1', answer: 'Allow U-turns at intersections' },
          { id: '2', answer: 'Reduce the need for traffic signals' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '0',
      },
      {
        question: 'When approaching an intersection with a flashing yellow light, you should:',
        answers: [
          { id: '0', answer: 'Stop completely before proceeding' },
          { id: '1', answer: 'Proceed with caution' },
          { id: '2', answer: 'Ignore the light if the way is clear' },
          { id: '3', answer: 'Speed up to clear the intersection quickly' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'If another driver is attempting to pass you on the left, you should:',
        answers: [
          { id: '0', answer: 'Maintain your current speed and position' },
          { id: '1', answer: 'Increase your speed to prevent them from passing' },
          { id: '2', answer: 'Move to the right to allow them to pass safely' },
          { id: '3', answer: 'Signal to them that it is unsafe to pass' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'All pedestrian crosswalks in the District of Columbia must be marked with white paint.',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'How long must you maintain a valid DC driver license without any pointable moving violations to be eligible for a Good Point on your driving record?',
        answers: [
          { id: '0', answer: '6 months' },
          { id: '1', answer: '1 year' },
          { id: '2', answer: '18 months' },
          { id: '3', answer: '2 years' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Right turn only ahead' },
          { id: '1', answer: 'Keep to the right to avoid a median' },
          { id: '2', answer: 'Curving road ahead' },
        ],
        image: keepToTheRight,
        correctAnswer: '1',
      },
      {
        question: 'The best way to tell if you are permitted to pass other vehicles is to see if: ',
        answers: [
          { id: '0', answer: 'The vehicle ahead signals that it is OK to pass' },
          { id: '1', answer: 'There are solid or broken lane markings' },
          { id: '2', answer: 'There is a green flashing light' },
          { id: '3', answer: ' The road ahead is straight' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'To which gear does N refer?',
        answers: [
          { id: '0', answer: 'Park' },
          { id: '1', answer: 'Drive' },
          { id: '2', answer: 'Neutral' },
          { id: '3', answer: 'Reverse' },
        ],
        image: neutralGear,
        correctAnswer: '2',
      },
      {
        question: 'In drive, when you are accelerating and you turn the wheel to the right,',
        answers: [
          { id: '0', answer: 'You move backwards while turning to the left with the rear of your car' },
          { id: '1', answer: 'You move forwards while turning to the right with the front of your car' },
          { id: '2', answer: 'You move backwards while turning to the right with the rear of your car' },
          { id: '3', answer: 'You move forwards while turning to the left with the front of your car' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'In drive, when you are accelerating and you turn the wheel to the left,',
        answers: [
          { id: '0', answer: 'You move backwards while turning to the right with the rear of your car' },
          { id: '1', answer: 'You move forwards while turning to the right with the front of your car' },
          { id: '2', answer: 'You move backwards while turning to the left with the rear of your car' },
          { id: '3', answer: 'You move forwards while turning to the left with the front of your car' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'In reverse, when you are accelerating and you turn the wheel to the left,',
        answers: [
          { id: '0', answer: 'You move backwards while turning to the right with the rear of your car' },
          { id: '1', answer: 'You move forwards while turning to the right with the front of your car' },
          { id: '2', answer: 'You move backwards while turning to the left with the rear of your car' },
          { id: '3', answer: 'You move forwards while turning to the left with the front of your car' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'In reverse, when you are accelerating and you turn the wheel to the right,',
        answers: [
          { id: '0', answer: 'You move forwards while turning to the left with the front of your car' },
          { id: '1', answer: 'You move backwards while turning to the right with the rear of your car' },
          { id: '2', answer: 'You move backwards while turning to the left with the rear of your car' },
          { id: '3', answer: 'You move forwards while turning to the right with the front of your car' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'At what distance are drivers legally obligated to signal an intention to turn?',
        answers: [
          { id: '0', answer: '50 feet' },
          { id: '1', answer: '75 feet' },
          { id: '2', answer: '100 feet' },
          { id: '3', answer: '125 feet' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'To which gear does N refer?',
        answers: [
          { id: '0', answer: 'Park' },
          { id: '1', answer: 'Drive' },
          { id: '2', answer: 'Neutral' },
          { id: '3', answer: 'Reverse' },
        ],
        image: neutralGear,
        correctAnswer: '2',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'The same as a stop sign' },
          { id: '1', answer: 'Yield sign ahead' },
          { id: '2', answer: 'Stop sign ahead' },
        ],
        image: stopSignAhead,
        correctAnswer: '2',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Yield sign ahead' },
          { id: '1', answer: 'Keep right' },
          { id: '2', answer: 'Construction ahead' },
        ],
        image: chevronRight,
        correctAnswer: '1',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Yield sign ahead' },
          { id: '1', answer: 'Keep right' },
          { id: '2', answer: 'Keep left' },
        ],
        image: chevronLeft,
        correctAnswer: '2',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Yield sign ahead' },
          { id: '1', answer: 'Stop sign ahead' },
        ],
        image: yieldAhead,
        correctAnswer: '0',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'The same as a stop sign' },
          { id: '1', answer: 'Stop sign ahead' },
          { id: '2', answer: 'The same as a red light' },
          { id: '3', answer: 'Traffic signal ahead' },
        ],
        image: trafficSignalAhead,
        correctAnswer: '3',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Expected rain in the locality measured in inches' },
          { id: '1', answer: 'Maximum clearance of a vehicle' },
          { id: '2', answer: 'An incoming change in surface elevation' },
          { id: '3', answer: 'Recommended wheel size' },
        ],
        image: maximumClearance,
        correctAnswer: '1',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Vehicles will turn onto your lane' },
          { id: '1', answer: 'Curving road' },
          { id: '2', answer: 'Added lane' },
          { id: '3', answer: 'Traffic must merge ahead' },
        ],
        image: merge,
        correctAnswer: '3',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Passing other vehicles will be possible' },
          { id: '1', answer: 'Traffic must merge ahead' },
          { id: '2', answer: 'Added lane' },
          { id: '3', answer: 'Vehicles will turn onto your lane' },
        ],
        image: addedLane,
        correctAnswer: '2',
      },
      {
        question: 'Which sign means you must be prepared for merging traffic?',
        answers: [
          { id: '0', answer: 'The sign on the left' },
          { id: '1', answer: 'The sign on the right' },
        ],
        image: addedLaneMergeSigns,
        correctAnswer: '1',
      },
      {
        question: 'The yield sign means',
        answers: [
          { id: '0', answer: 'You should drive slowly' },
          { id: '1', answer: 'You should yield to other vehicles and pedestrians approaching from different directions' },
          { id: '2', answer: 'You should check to see if there is any other traffic crossing' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        image: yieldSign,
        correctAnswer: '3',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Two-way traffic' },
          { id: '1', answer: 'One-way traffic' },
          { id: '2', answer: 'Two one-way streets' },
          { id: '3', answer: 'End of the road' },
        ],
        image: twoWayTraffic,
        correctAnswer: '0',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Keep left' },
          { id: '1', answer: 'The road curves left' },
          { id: '2', answer: 'Switch lanes to make a left turn' },
          { id: '3', answer: 'Detour ahead' },
        ],
        image: leftCurveAhead,
        correctAnswer: '1',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Sideway maneuver ahead' },
          { id: '1', answer: 'The road curves' },
          { id: '2', answer: 'The road is slippery' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        image: slipperyRoad,
        correctAnswer: '2',
      },
      {
        question: 'Which sign alerts you to TWO gradual curves ahead?',
        answers: [
          { id: '0', answer: 'Top left', order: 0 },
          { id: '1', answer: 'Top right', order: 1 },
          { id: '2', answer: 'Bottom left', order: 2 },
          { id: '3', answer: 'Bottom right', order: 3 },
        ],
        image: turnsAndCurvesSignTwo,
        correctAnswer: '1',
      },
      {
        question: 'Which sign alerts you to ONE sharp turn ahead?',
        answers: [
          { id: '0', answer: 'Top left', order: 0 },
          { id: '1', answer: 'Top right', order: 1 },
          { id: '2', answer: 'Bottom left', order: 2 },
          { id: '3', answer: 'Bottom right', order: 3 },
        ],
        image: turnsAndCurvesSign,
        correctAnswer: '3',
      },
      {
        question: 'Where are you likely to encounter this sign?',
        answers: [
          { id: '0', answer: 'Before a highway' },
          { id: '1', answer: 'Before a school zone' },
          { id: '2', answer: 'At a roundabout' },
          { id: '3', answer: 'At a T-intersection' },
        ],
        image: leftOrRightSign,
        correctAnswer: '3',
      },
    ],
  },
};

export default quizData;

// (?<=\s)(?<!(answer|question).*)\d
// "$0"
