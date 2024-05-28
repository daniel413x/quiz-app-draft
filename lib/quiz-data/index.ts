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
import leftTurnHandSignal from '@/public/left-turn-hand-signal.jpg';
import parkingOnHill from '@/public/parking-on-hill.jpg';
import constructionSignTriangle from '@/public/construction-sign-triangle.jpg';

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
  code?: string,
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
        ],
        correctAnswer: '2',
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
      // {
      //   question: 'When merging onto a highway from a short entrance ramp, you should:',
      //   answers: [
      //     { id: '0', answer: 'Wait until you find a gap in traffic to speed up' },
      //     { id: '1', answer: 'Enter the far right lane immediately' },
      //     { id: '2', answer: 'Use the shoulder to gain speed' },
      //     { id: '3', answer: 'Merge at a slower speed and then accelerate' },
      //   ],
      //   correctAnswer: '0',
      // },
      {
        question: 'When on a short entrance to an interstate where there is no merge area or lane:',
        answers: [
          { id: '0', answer: 'Enter the far right traffic lane and speed up to the flow of traffic' },
          { id: '1', answer: 'Use the shoulder of the main road to get up to the speed of the traffic' },
          { id: '2', answer: 'Speed up on the entrance only after you have found a gap in traffic' },
        ],
        correctAnswer: '2',
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
      // {
      //   question: 'When on a short entrance to an interstate where there is no merge area or lane:',
      //   answers: [
      //     { id: '0', answer: 'Enter the far right traffic lane and speed up to the flow of traffic' },
      //     { id: '1', answer: 'Use the shoulder of the main road to get up to the speed of the traffic' },
      //     { id: '2', answer: 'Speed up on the entrance only after you have found a gap in traffic' },
      //   ],
      //   correctAnswer: '0',
      // },
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
        correctAnswer: '0',
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
          { id: '1', answer: 'The road pivots right sharply' },
          { id: '2', answer: 'Construction ahead' },
          { id: '3', answer: 'Stay in the right lane' },
        ],
        image: chevronRight,
        correctAnswer: '1',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Yield sign ahead' },
          { id: '1', answer: 'The road pivots left sharply' },
          { id: '2', answer: 'Keep left' },
          { id: '3', answer: 'Stay in the left lane' },
        ],
        image: chevronLeft,
        correctAnswer: '1',
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
          { id: '0', answer: 'Expected rain measured in feet and inches' },
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
          { id: '3', answer: 'Traffic will merge ahead' },
        ],
        image: merge,
        correctAnswer: '3',
      },
      {
        question: 'The sign means',
        answers: [
          { id: '0', answer: 'Passing other vehicles will be possible' },
          { id: '1', answer: 'Traffic will merge ahead' },
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
          { id: '3', answer: 'Before a T-intersection' },
        ],
        image: leftOrRightSign,
        correctAnswer: '3',
      },
      {
        question: 'A flashing red traffic light at an intersection means the same as a:',
        answers: [
          { id: '0', answer: 'Light is about to turn green' },
          { id: '1', answer: 'Stop sign' },
          { id: '2', answer: 'Stop light' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'If you are ______________, you must operate under the Gradual Rearing of Adult Drivers (GRAD) Program.',
        answers: [
          { id: '0', answer: 'Over the age of 21' },
          { id: '1', answer: 'Under the age of 16' },
          { id: '2', answer: 'Under the age of 21' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'This hand signal means',
        answers: [
          { id: '0', answer: 'Left turn' },
          { id: '1', answer: 'Right turn' },
          { id: '2', answer: 'Stopping or slowing down' },
        ],
        image: leftTurnHandSignal,
        correctAnswer: '0',
      },
      {
        question: 'You must make a full stop',
        answers: [
          { id: '0', answer: 'When there is a stop sign', order: 0 },
          { id: '1', answer: 'When emerging from an alley, driveway or private road into a street', order: 1 },
          { id: '2', answer: 'When there is a flashing red traffic light', order: 2 },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'When parking on a hill, you must turn your front wheels away from the curb and bring the near side front wheel into contact with the curb',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'The panel in the middle depicts',
        answers: [
          { id: '0', answer: 'How to park up hill with a curb' },
          { id: '1', answer: 'How to park down hill with a curb' },
          { id: '2', answer: 'How to park up hill with no curb' },
          { id: '3', answer: 'How to park down hill with no curb' },
        ],
        image: parkingOnHill,
        correctAnswer: '0',
      },
      {
        question: 'The panel on the left depicts',
        answers: [
          { id: '0', answer: 'How to park up hill with a curb' },
          { id: '1', answer: 'How to park down hill with a curb' },
          { id: '2', answer: 'How to park up hill with no curb' },
          { id: '3', answer: 'How to park down hill with no curb' },
        ],
        image: parkingOnHill,
        correctAnswer: '1',
      },
      {
        question: 'The panel on the right depicts',
        answers: [
          { id: '0', answer: 'How to park up hill with a curb' },
          { id: '1', answer: 'How to park down hill with a curb' },
          { id: '2', answer: 'How to park up hill with no curb' },
          { id: '3', answer: 'How to park down hill with no curb' },
        ],
        image: parkingOnHill,
        correctAnswer: '2',
      },
      {
        question: 'U-turns are allowed at intersections controlled by a traffic light unless there is a sign prohibiting the U-turn',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'How close can you park to the entrance of an alley or private driveway?',
        answers: [
          { id: '0', answer: '10 feet' },
          { id: '1', answer: '20 feet' },
          { id: '2', answer: '5 feet' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Color of roadway signs tell you what kind of information it has to offer: An orange sign means',
        answers: [
          { id: '0', answer: 'Stop, yield, do not enter or wrong way' },
          { id: '1', answer: 'Construction and maintenance work area warning' },
          { id: '2', answer: 'General warning of what to expect ahead' },
        ],
        image: constructionSignTriangle,
        correctAnswer: '1',
      },
      {
        question: 'While obtaining your DC driver license, you may',
        answers: [
          { id: '0', answer: 'Register to vote', order: 0 },
          { id: '1', answer: 'Register for selective service', order: 1 },
          { id: '2', answer: 'Choose to become an organ and tissue donor', order: 2 },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
    ],
  },
  javascript: {
    name: 'JavaScript Principles',
    questions: [
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log([] + []);
        `,
        answers: [
          { id: '0', answer: '""' },
          { id: '1', answer: '"[]"' },
          { id: '2', answer: '"[object Object]"' },
          { id: '3', answer: 'undefined' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following correctly describes the behavior of "let" and "var"?',
        answers: [
          { id: '0', answer: '"let" is block-scoped, while "var" is function-scoped' },
          { id: '1', answer: '"let" is function-scoped, while "var" is block-scoped' },
          { id: '2', answer: 'Both "let" and "var" are block-scoped' },
          { id: '3', answer: 'Both "let" and "var" are function-scoped' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a valid way to create an object in JavaScript?',
        answers: [
          { id: '0', answer: 'let obj = {};' },
          { id: '1', answer: 'let obj = Object.create();' },
          { id: '2', answer: 'let obj = newObject();' },
          { id: '3', answer: 'let obj = Object.createObject();' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log(typeof NaN);
        `,
        answers: [
          { id: '0', answer: '"number"' },
          { id: '1', answer: '"NaN"' },
          { id: '2', answer: '"undefined"' },
          { id: '3', answer: '"object"' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What does the "map" method do in JavaScript?',
        answers: [
          { id: '0', answer: 'It creates a new array with the results of calling a function for every array element' },
          { id: '1', answer: 'It creates a new array with all elements that pass a test implemented by a function' },
          { id: '2', answer: 'It changes the original array' },
          { id: '3', answer: 'It returns the first element that passes a test implemented by a function' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is true about arrow functions?',
        answers: [
          { id: '0', answer: 'They do not have their own "this" context' },
          { id: '1', answer: 'They are always anonymous' },
          { id: '2', answer: 'They cannot be used as constructors' },
          { id: '3', answer: 'All of the above', order: 3 },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What is the purpose of the "Promise" object in JavaScript?',
        answers: [
          { id: '0', answer: 'It represents the eventual completion (or failure) of an asynchronous operation and its resulting value' },
          { id: '1', answer: 'It ensures synchronous code execution' },
          { id: '2', answer: 'It allows the use of global variables' },
          { id: '3', answer: 'It delays the execution of code' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following statements is true about "strict mode"?',
        answers: [
          { id: '0', answer: 'It helps catch common coding errors and prevents the use of certain unsafe features' },
          { id: '1', answer: 'It makes JavaScript code run faster' },
          { id: '2', answer: 'It allows the use of deprecated features' },
          { id: '3', answer: 'It automatically fixes common bugs in the code' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is not a feature of ES6?',
        answers: [
          { id: '0', answer: 'Callback functions' },
          { id: '1', answer: 'Arrow functions' },
          { id: '2', answer: 'Template literals' },
          { id: '3', answer: 'Default parameters' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the main purpose of the "async/await" syntax?',
        answers: [
          { id: '0', answer: 'To handle asynchronous code in a synchronous manner' },
          { id: '1', answer: 'To create new promises' },
          { id: '2', answer: 'To pause the execution of synchronous code' },
          { id: '3', answer: 'To declare functions that do not return a value' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log(0.1 + 0.2 === 0.3);
        `,
        answers: [
          { id: '0', answer: 'false' },
          { id: '1', answer: 'true' },
          { id: '2', answer: 'undefined' },
          { id: '3', answer: '"0.3"' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the difference between "==" and "===" in JavaScript?',
        answers: [
          { id: '0', answer: '"==" compares values after type conversion, while "===" compares values without type conversion' },
          { id: '1', answer: '"==" is used for strict equality, while "===" is used for loose equality' },
          { id: '2', answer: 'Both are used for strict equality' },
          { id: '3', answer: 'Both are used for loose equality' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a method for adding properties to all objects created by a constructor?',
        answers: [
          { id: '0', answer: 'Constructor.prototype.method' },
          { id: '1', answer: 'Object.method' },
          { id: '2', answer: 'Function.method' },
          { id: '3', answer: 'Object.prototype.method' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log(typeof []);
        `,
        answers: [
          { id: '0', answer: '"object"' },
          { id: '1', answer: '"array"' },
          { id: '2', answer: '"undefined"' },
          { id: '3', answer: '"null"' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is not a valid way to define a function in JavaScript?',
        answers: [
          { id: '0', answer: 'function myFunction() {}' },
          { id: '1', answer: 'let myFunction = function() {}' },
          { id: '2', answer: 'let myFunction = new Function()' },
          { id: '3', answer: 'function:myFunction() {}' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What does the "reduce" method do in JavaScript?',
        answers: [
          { id: '0', answer: 'It executes a reducer function on each element of the array, resulting in a single output value' },
          { id: '1', answer: 'It creates a new array with the results of calling a function for every array element' },
          { id: '2', answer: 'It filters the elements of an array based on a function' },
          { id: '3', answer: 'It sorts the elements of an array in place' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following best describes the "event loop" in JavaScript?',
        answers: [
          { id: '0', answer: 'It handles asynchronous operations by continuously checking the call stack and the callback queue' },
          { id: '1', answer: 'It is a way to loop through arrays' },
          { id: '2', answer: 'It loops through all events attached to the DOM' },
          { id: '3', answer: 'It is used to handle synchronous code' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the difference between "call" and "apply" methods in JavaScript?',
        answers: [
          { id: '0', answer: 'Both methods call a function with a given "this" value, but "apply" accepts arguments as an array' },
          { id: '1', answer: '"call" binds a function to a given context, while "apply" does not' },
          { id: '2', answer: '"apply" binds a function to a given context, while "call" does not' },
          { id: '3', answer: 'Both methods are used to create new functions' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the purpose of the "Symbol" type in JavaScript?',
        answers: [
          { id: '0', answer: 'To create unique identifiers for object properties' },
          { id: '1', answer: 'To define constants' },
          { id: '2', answer: 'To represent large numbers' },
          { id: '3', answer: 'To create functions' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log("5" - 2);
        `,
        answers: [
          { id: '0', answer: '3' },
          { id: '1', answer: '"52"' },
          { id: '2', answer: 'NaN' },
          { id: '3', answer: '"3"' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is true about closures in JavaScript?',
        answers: [
          { id: '0', answer: 'A closure is a function combined with its lexical environment' },
          { id: '1', answer: 'A closure is a function that can be used only once' },
          { id: '2', answer: 'A closure is a function that has no access to its outer scope' },
          { id: '3', answer: 'Closures do not exist in JavaScript' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the purpose of the "use strict" directive in JavaScript?',
        answers: [
          { id: '0', answer: 'To enable strict mode, which catches common coding errors and “unsafe” actions' },
          { id: '1', answer: 'To allow the use of experimental features' },
          { id: '2', answer: 'To disable deprecated features' },
          { id: '3', answer: 'To automatically fix common bugs in the code' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which statement best describes "hoisting" in JavaScript?',
        answers: [
          { id: '0', answer: 'Variables and function declarations are moved to the top of their scope before code execution' },
          { id: '1', answer: 'Functions are executed before any other code' },
          { id: '2', answer: 'Variables and functions are hoisted to the bottom of their scope' },
          { id: '3', answer: 'Only variables are hoisted to the top of their scope' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In JavaScript, which of the following methods can be used to find the largest number in an array?',
        answers: [
          { id: '0', answer: 'Math.max.apply(null, array)' },
          { id: '1', answer: 'array.reduce(Math.max)' },
          { id: '2', answer: 'Math.max(array)' },
          { id: '3', answer: 'array.reduce((a, b) => a > b ? a : b)' },
          { id: '4', answer: 'Either Math.max.apply(null, array) OR array.reduce((a, b) => a > b ? a : b)', order: 4 },
        ],
        correctAnswer: '4',
      },
      {
        question: 'What does the "this" keyword refer to in a method of an object?',
        answers: [
          { id: '0', answer: 'The object itself' },
          { id: '1', answer: 'The global object' },
          { id: '2', answer: 'The closest parent object' },
          { id: '3', answer: 'The window object' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a feature of JavaScript’s prototype-based inheritance?',
        answers: [
          { id: '0', answer: 'Objects can inherit properties from other objects' },
          { id: '1', answer: 'Classes can inherit properties from other classes' },
          { id: '2', answer: 'Properties can only be inherited from a prototype object' },
          { id: '3', answer: 'Inheritance is not supported in JavaScript' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is not a JavaScript data type?',
        answers: [
          { id: '0', answer: 'Float' },
          { id: '1', answer: 'Undefined' },
          { id: '2', answer: 'Symbol' },
          { id: '3', answer: 'Boolean' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log(typeof null);
        `,
        answers: [
          { id: '0', answer: '"object"' },
          { id: '1', answer: '"null"' },
          { id: '2', answer: '"undefined"' },
          { id: '3', answer: '"boolean"' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is true about the "bind" method in JavaScript?',
        answers: [
          { id: '0', answer: 'It creates a new function with a specified "this" value and arguments' },
          { id: '1', answer: 'It permanently sets the "this" value of a function' },
          { id: '2', answer: 'It prevents the function from being called' },
          { id: '3', answer: 'It creates a copy of an object' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What does the "async" keyword do when added to a function?',
        answers: [
          { id: '0', answer: 'It allows the function to return a promise' },
          { id: '1', answer: 'It allows the function to run synchronously' },
          { id: '2', answer: 'It prevents the function from returning a value' },
          { id: '3', answer: 'It ensures the function runs immediately' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log(1 + "1");
        `,
        answers: [
          { id: '0', answer: '"2"' },
          { id: '1', answer: '"11"' },
          { id: '2', answer: '2' },
          { id: '3', answer: '"3"' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which method is used to remove the last element from an array?',
        answers: [
          { id: '0', answer: 'shift' },
          { id: '1', answer: 'pop' },
          { id: '2', answer: 'slice' },
          { id: '3', answer: 'splice' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the value of "this" in a regular function (not an arrow function) in the global scope?',
        answers: [
          { id: '0', answer: 'null' },
          { id: '1', answer: 'undefined' },
          { id: '2', answer: 'window' },
          { id: '3', answer: 'global' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which operator is used to check for both value and type equality?',
        answers: [
          { id: '0', answer: '==' },
          { id: '1', answer: '===' },
          { id: '2', answer: '!=' },
          { id: '3', answer: '!==' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'The statement below checks for value and type equality',
        code: `
      console.log(0 == "0");
        `,
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log(typeof function(){});
        `,
        answers: [
          { id: '0', answer: '"function"' },
          { id: '1', answer: '"object"' },
          { id: '2', answer: '"undefined"' },
          { id: '3', answer: '"null"' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is not a valid loop construct in JavaScript?',
        answers: [
          { id: '0', answer: 'for' },
          { id: '1', answer: 'while' },
          { id: '2', answer: 'do-while' },
          { id: '3', answer: 'for-while' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What does the "filter" method do in JavaScript?',
        answers: [
          { id: '0', answer: 'It creates a new array with all elements that pass the test implemented by the provided function' },
          { id: '1', answer: 'It modifies the original array' },
          { id: '2', answer: 'It removes elements from the original array' },
          { id: '3', answer: 'It sorts the elements of an array' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log(0 == "0");
        `,
        answers: [
          { id: '0', answer: 'false' },
          { id: '1', answer: 'true' },
          { id: '2', answer: 'undefined' },
          { id: '3', answer: 'null' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which of the following is a way to create a new object that inherits from a prototype?',
        answers: [
          { id: '0', answer: 'Object.create()' },
          { id: '1', answer: 'new Object()' },
          { id: '2', answer: 'Object()' },
          { id: '3', answer: 'Object.assign()' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a way to create a new object that is a shallow copy of another object?',
        answers: [
          { id: '0', answer: 'Object.create()' },
          { id: '1', answer: 'new Object()' },
          { id: '2', answer: 'Object()' },
          { id: '3', answer: 'Object.assign()' },
        ],
        correctAnswer: '3',
      },
      // https://chatgpt.com/c/024d9b70-5afe-41e5-89ae-b410fb3f6bc5
      {
        question: 'When you use Object.assign() to create a shallow copy of another object, the original object\'s fields cannot be mutated',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log(typeof NaN);
        `,
        answers: [
          { id: '0', answer: '"number"' },
          { id: '1', answer: '"NaN"' },
          { id: '2', answer: '"undefined"' },
          { id: '3', answer: '"object"' },
        ],
        correctAnswer: '0',
      },

      {
        question: 'What is a closure in JavaScript?',
        answers: [
          { id: '0', answer: 'A function having access to the parent scope, even after the parent function has closed' },
          { id: '1', answer: 'A function that returns another function' },
          { id: '2', answer: 'A function that can be called only once' },
          { id: '3', answer: 'A function that has no parameters' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following scenarios best demonstrates a closure?',
        answers: [
          { id: '0', answer: 'A function accessing a global variable' },
          { id: '1', answer: 'A function that returns another function with access to the outer function’s variables' },
          { id: '2', answer: 'A function that calls itself' },
          { id: '3', answer: 'A function with no parameters' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Why are closures useful in JavaScript?',
        answers: [
          { id: '0', answer: 'They allow a function to have "private" variables' },
          { id: '1', answer: 'They enable synchronous execution of code' },
          { id: '2', answer: 'They help in defining global variables' },
          { id: '3', answer: 'They prevent code execution' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In which of the following cases is a closure created?',
        answers: [
          { id: '0', answer: 'When a function is defined inside another function and the inner function is returned or assigned to a variable' },
          { id: '1', answer: 'When a function calls another function' },
          { id: '2', answer: 'When a function has no return statement' },
          { id: '3', answer: 'When a function is called with the "new" keyword' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      function outer() {
        let counter = 0;
        return function() {
          counter++;
          return counter;
        };
      }
      const increment = outer();
      console.log(increment());
      console.log(increment());
        `,
        answers: [
          { id: '0', answer: '1 and 1' },
          { id: '1', answer: '1 and 2' },
          { id: '2', answer: '2 and 2' },
          { id: '3', answer: '0 and 1' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What principle is best illustrated by the code below?',
        code: `
      function outer() {
        let counter = 0;
        return function() {
          counter++;
          return counter;
        };
      }
      const increment = outer();
      console.log(increment());
      console.log(increment());
        `,
        answers: [
          { id: '0', answer: 'React Context' },
          { id: '1', answer: 'Inheritance' },
          { id: '2', answer: 'React functional components' },
          { id: '3', answer: 'Closure' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Which of the following is true about null?',
        answers: [
          { id: '0', answer: 'It is a boolean' },
          { id: '1', answer: 'It is passed in to certain methods to signify where no context or prototype is necessary' },
          { id: '2', answer: 'Variables assigned "null" do not occupy memory' },
          { id: '3', answer: 'Null is the same as "undefined"' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the primary role of the event loop in JavaScript?',
        answers: [
          { id: '0', answer: 'To handle asynchronous operations by continuously checking the call stack and the callback queue' },
          { id: '1', answer: 'To manage memory allocation' },
          { id: '2', answer: 'To execute synchronous code' },
          { id: '3', answer: 'To optimize code execution' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log('start');
      setTimeout(() => {
        console.log('middle');
      }, 0);
      console.log('end');
        `,
        answers: [
          { id: '0', answer: 'start, end, middle' },
          { id: '1', answer: 'start, middle, end' },
          { id: '2', answer: 'middle, start, end' },
          { id: '3', answer: 'end, start, middle' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which statement accurately describes the "call stack" in the context of the event loop?',
        answers: [
          { id: '0', answer: 'The call stack is a data structure that keeps track of function calls in the order they need to be executed' },
          { id: '1', answer: 'The call stack is a queue where functions are stored before they are executed' },
          { id: '2', answer: 'The call stack manages asynchronous tasks' },
          { id: '3', answer: 'The call stack is responsible for memory allocation' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      setTimeout(() => {
        console.log('timeout');
      }, 0);
      Promise.resolve().then(() => {
        console.log('promise');
      });
      console.log('log');
        `,
        answers: [
          { id: '0', answer: 'log, promise, timeout' },
          { id: '1', answer: 'timeout, promise, log' },
          { id: '2', answer: 'promise, log, timeout' },
          { id: '3', answer: 'log, timeout, promise' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following best describes the "callback queue" in JavaScript?',
        answers: [
          { id: '0', answer: 'A queue where callback functions are held until the call stack is empty' },
          { id: '1', answer: 'A queue for synchronous functions waiting to be executed' },
          { id: '2', answer: 'A queue for functions that are being executed' },
          { id: '3', answer: 'A queue that manages memory allocation' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log('first');
      setTimeout(() => console.log('second'), 0);
      console.log('third');
        `,
        answers: [
          { id: '0', answer: 'first, third, second' },
          { id: '1', answer: 'first, second, third' },
          { id: '2', answer: 'second, first, third' },
          { id: '3', answer: 'third, first, second' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In the context of the event loop, what is a "task" in JavaScript?',
        answers: [
          { id: '0', answer: 'A piece of code that runs to completion before other code can run' },
          { id: '1', answer: 'A function that is waiting to be executed' },
          { id: '2', answer: 'A variable that holds data' },
          { id: '3', answer: 'An event that triggers a function call' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log('script start');

      setTimeout(function() {
        console.log('setTimeout');
      }, 0);

      Promise.resolve().then(function() {
        console.log('promise1');
      }).then(function() {
        console.log('promise2');
      });

      console.log('script end');
        `,
        answers: [
          { id: '0', answer: 'script start, script end, promise1, promise2, setTimeout' },
          { id: '1', answer: 'script start, promise1, script end, promise2, setTimeout' },
          { id: '2', answer: 'script start, promise1, promise2, script end, setTimeout' },
          { id: '3', answer: 'script start, setTimeout, script end, promise1, promise2' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does JavaScript handle blocking operations?',
        answers: [
          { id: '0', answer: 'JavaScript uses the event loop to handle blocking operations asynchronously' },
          { id: '1', answer: 'JavaScript pauses execution until the operation is complete' },
          { id: '2', answer: 'JavaScript uses multiple threads to handle blocking operations' },
          { id: '3', answer: 'JavaScript does not handle blocking operations' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      function task(message) {
        console.log(message);
      }

      console.log('Start');

      setTimeout(task, 0, 'Timeout task');

      Promise.resolve().then(() => task('Promise task'));

      console.log('End');
        `,
        answers: [
          { id: '0', answer: 'Start, End, Promise task, Timeout task' },
          { id: '1', answer: 'Start, Timeout task, End, Promise task' },
          { id: '2', answer: 'Promise task, Start, End, Timeout task' },
          { id: '3', answer: 'Start, End, Timeout task, Promise task' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following statements is true about microtasks in JavaScript?',
        answers: [
          { id: '0', answer: 'Microtasks are tasks that are executed before any macrotasks' },
          { id: '1', answer: 'Microtasks are tasks that are executed immediately after the currently executing script' },
          { id: '2', answer: 'Microtasks are executed in parallel with the current script' },
          { id: '3', answer: 'Microtasks are the same as macrotasks' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which of the following statements is true about setTimeout?',
        answers: [
          { id: '0', answer: 'setTimeout is a microtask' },
          { id: '1', answer: 'setTimeout is a macrotask' },
          { id: '2', answer: 'setTimeout is executed immediately after the currently executing script ' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log('script start');
      setTimeout(function() {
        console.log('setTimeout');
      }, 0);
      Promise.resolve().then(function() {
        console.log('promise1');
      }).then(function() {
        console.log('promise2');
      }).then(function() {
        console.log('promise3');
      }).then(function() {
        console.log('promise4');
      });
      console.log('script end');
        `,
        answers: [
          { id: '0', answer: 'script start, script end, promise1, promise2, promise3, promise4' },
          { id: '1', answer: 'script start, promise1, promise2, promise3, promise4, script end' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the primary purpose of React?',
        answers: [
          { id: '0', answer: 'To build user interfaces' },
          { id: '1', answer: 'To manage server-side operations' },
          { id: '2', answer: 'To handle database connections' },
          { id: '3', answer: 'To create mobile applications' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is a React component?',
        answers: [
          { id: '0', answer: 'A JavaScript function or class that optionally accepts inputs and returns a React element' },
          { id: '1', answer: 'A function that directly manipulates the DOM' },
          { id: '2', answer: 'A method to handle state management' },
          { id: '3', answer: 'A styling library for React applications' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the use of the "useState" hook in React?',
        answers: [
          { id: '0', answer: 'To add state to functional components' },
          { id: '1', answer: 'To manage side effects in functional components' },
          { id: '2', answer: 'To replace class components' },
          { id: '3', answer: 'To handle event listeners' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is true about props in React?',
        answers: [
          { id: '0', answer: 'Props are read-only' },
          { id: '1', answer: 'Props are used to manage state' },
          { id: '2', answer: 'Props cannot be passed to class components' },
          { id: '3', answer: 'Props are mutable' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the purpose of the "useEffect" hook in React?',
        answers: [
          { id: '0', answer: 'To perform side effects in functional components' },
          { id: '1', answer: 'To handle form submissions' },
          { id: '2', answer: 'To manage component state' },
          { id: '3', answer: 'To create a new context' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      function Counter() {
        const [count, setCount] = React.useState(0);
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }

      ReactDOM.render(<Counter />, document.getElementById('root'));
        `,
        answers: [
          { id: '0', answer: 'A button that increments the count each time it is clicked' },
          { id: '1', answer: 'A button that does nothing' },
          { id: '2', answer: 'An error, because setCount is not a function' },
          { id: '3', answer: 'A paragraph that displays the count but no button' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the virtual DOM in React?',
        answers: [
          { id: '0', answer: 'An in-memory representation of the real DOM elements generated by React components' },
          { id: '1', answer: 'The original DOM' },
          { id: '2', answer: 'A way to directly manipulate the real DOM' },
          { id: '3', answer: 'A special DOM for managing forms' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How do you create a context in React?',
        answers: [
          { id: '0', answer: 'By using React.createContext()' },
          { id: '1', answer: 'By using React.useContext()' },
          { id: '2', answer: 'By using React.createContextProvider()' },
          { id: '3', answer: 'By using React.createProvider()' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the purpose of "keys" in React?',
        answers: [
          { id: '0', answer: 'To help React identify which items have changed, are added, or are removed' },
          { id: '1', answer: 'To uniquely identify components' },
          { id: '2', answer: 'To bind event handlers to components' },
          { id: '3', answer: 'To handle form input' },
        ],
        correctAnswer: '0',
      },

      {
        question: 'What is the Virtual DOM in the context of JavaScript libraries like React?',
        answers: [
          { id: '0', answer: 'A lightweight copy of the actual DOM that allows for efficient updates and rendering' },
          { id: '1', answer: 'A separate HTML document that mirrors the actual DOM' },
          { id: '2', answer: 'A part of the browser\'s rendering engine' },
          { id: '3', answer: 'A debugging tool for developers' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does the Virtual DOM improve performance?',
        answers: [
          { id: '0', answer: 'By minimizing direct manipulations to the actual DOM, thus reducing the number of costly DOM operations' },
          { id: '1', answer: 'By using Web Workers to offload calculations to background threads' },
          { id: '2', answer: 'By pre-rendering all possible states of the UI' },
          { id: '3', answer: 'By eliminating the need for server-side rendering' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code when using React and the Virtual DOM?',
        code: `
      class App extends React.Component {
        constructor() {
          super();
          this.state = { count: 0 };
        }

        increment() {
          this.setState({ count: this.state.count + 1 });
        }

        render() {
          return (
            <div>
              <p>{this.state.count}</p>
              <button onClick={() => this.increment()}>Increment</button>
            </div>
          );
        }
      }

      ReactDOM.render(<App />, document.getElementById('root'));
        `,
        answers: [
          { id: '0', answer: 'The count will increase by 1 every time the button is clicked, updating the displayed number' },
          { id: '1', answer: 'The count will remain 0 even when the button is clicked' },
          { id: '2', answer: 'The count will increase by 2 every time the button is clicked' },
          { id: '3', answer: 'The button will not respond to clicks' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following best describes how the Virtual DOM updates the actual DOM?',
        answers: [
          { id: '0', answer: 'It calculates the difference between the new Virtual DOM and the previous one, then updates only the changed parts in the actual DOM' },
          { id: '1', answer: 'It completely replaces the actual DOM with the new Virtual DOM' },
          { id: '2', answer: 'It updates the actual DOM only when the browser is idle' },
          { id: '3', answer: 'It does not update the actual DOM directly but sends update instructions to the server' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What problem does the Virtual DOM help solve in web development?',
        answers: [
          { id: '0', answer: 'It helps solve performance issues by reducing the number of direct DOM manipulations' },
          { id: '1', answer: 'It eliminates the need for responsive design' },
          { id: '2', answer: 'It allows for multi-threaded JavaScript execution' },
          { id: '3', answer: 'It ensures backward compatibility with older browsers' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is true?',
        answers: [
          { id: '0', answer: 'There is no need to call "call," "apply," or "bind" on functions that do not use "this"' },
          { id: '1', answer: 'In React, keys are used for debugging purposes' },
          { id: '2', answer: 'The job queue is executed before the task queue' },
          { id: '3', answer: 'It ensures backward compatibility with older browsers' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is true?',
        answers: [
          { id: '0', answer: 'There is no need to call "call," "apply," or "bind" on functions that use "this"' },
          { id: '1', answer: 'Calling a function creates a new stack frame for that function\'s use' },
          { id: '2', answer: 'The macrotask queue has priority over the microtask queue' },
          { id: '3', answer: 'React guarantees backward compatibility with older browsers' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What will be the output of the code below?',
        code: `
      var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise win')
        }, 4000)
      })
      promise.then((result) => {
          console.log(result)
      })
      setTimeout(() => {
          console.log('setTimeout win')
      }, 4000)
        `,
        answers: [
          { id: '0', answer: 'setTimeout win, promise win' },
          { id: '1', answer: 'Promise<pending>, setTimeout win' },
          { id: '2', answer: 'promise win, setTimeout win' },
          { id: '3', answer: 'setTimeout win, Promise<pending>' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'A Promise is a',
        answers: [
          { id: '0', answer: 'Macrotask' },
          { id: '1', answer: 'Synchronous job' },
          { id: '2', answer: 'Microtask' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'setTimeout is a',
        answers: [
          { id: '0', answer: 'Macrotask' },
          { id: '1', answer: 'Synchronous job' },
          { id: '2', answer: 'Microtask' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the Virtual DOM in the context of JavaScript libraries like React?',
        answers: [
          { id: '0', answer: 'A lightweight copy of the actual DOM that allows for efficient updates and rendering' },
          { id: '1', answer: 'A separate HTML document that mirrors the actual DOM' },
          { id: '2', answer: 'A part of the browser\'s rendering engine' },
          { id: '3', answer: 'A debugging tool for developers' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does the Virtual DOM improve performance?',
        answers: [
          { id: '0', answer: 'By minimizing direct manipulations to the actual DOM, thus reducing the number of costly DOM operations' },
          { id: '1', answer: 'By using Web Workers to offload calculations to background threads' },
          { id: '2', answer: 'By pre-rendering all possible states of the UI' },
          { id: '3', answer: 'By eliminating the need for server-side rendering' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code when using React and the Virtual DOM?',
        code: `
      class App extends React.Component {
        constructor() {
          super();
          this.state = { count: 0 };
        }

        increment() {
          this.setState({ count: this.state.count + 1 });
        }

        render() {
          return (
            <div>
              <p>{this.state.count}</p>
              <button onClick={() => this.increment()}>Increment</button>
            </div>
          );
        }
      }

      ReactDOM.render(<App />, document.getElementById('root'));
        `,
        answers: [
          { id: '0', answer: 'The count will increase by 1 every time the button is clicked, updating the displayed number' },
          { id: '1', answer: 'The count will remain 0 even when the button is clicked' },
          { id: '2', answer: 'The count will increase by 2 every time the button is clicked' },
          { id: '3', answer: 'The button will not respond to clicks' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following best describes how the Virtual DOM updates the actual DOM?',
        answers: [
          { id: '0', answer: 'It calculates the difference between the new Virtual DOM and the previous one, then updates only the changed parts in the actual DOM' },
          { id: '1', answer: 'It completely replaces the actual DOM with the new Virtual DOM' },
          { id: '2', answer: 'It updates the actual DOM only when the browser is idle' },
          { id: '3', answer: 'It does not update the actual DOM directly but sends update instructions to the server' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What problem does the Virtual DOM help solve in web development?',
        answers: [
          { id: '0', answer: 'It helps solve performance issues by reducing the number of direct DOM manipulations' },
          { id: '1', answer: 'It eliminates the need for responsive design' },
          { id: '2', answer: 'It allows for multi-threaded JavaScript execution' },
          { id: '3', answer: 'It ensures backward compatibility with older browsers' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary difference between the Job Queue and the Task Queue in JavaScript?',
        answers: [
          { id: '0', answer: 'The Job Queue handles microtasks, while the Task Queue handles macrotasks' },
          { id: '1', answer: 'The Job Queue handles tasks scheduled with setTimeout, while the Task Queue handles promises' },
          { id: '2', answer: 'The Task Queue has higher priority over the Job Queue' },
          { id: '3', answer: 'The Job Queue is for synchronous tasks, and the Task Queue is for asynchronous tasks' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which type of tasks are placed in the Job Queue?',
        answers: [
          { id: '0', answer: 'Microtasks such as promises and process.nextTick' },
          { id: '1', answer: 'Tasks scheduled with setTimeout' },
          { id: '2', answer: 'Tasks scheduled with setInterval' },
          { id: '3', answer: 'Event handler callbacks' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which type of tasks are placed in the Task Queue?',
        answers: [
          { id: '0', answer: 'Macrotasks such as setTimeout and setInterval callbacks' },
          { id: '1', answer: 'Microtasks such as promises' },
          { id: '2', answer: 'Synchronous code' },
          { id: '3', answer: 'Immediate code execution' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log('start');
      
      setTimeout(() => {
        console.log('setTimeout');
      }, 0);
      
      Promise.resolve().then(() => {
        console.log('promise');
      });
      
      console.log('end');
        `,
        answers: [
          { id: '0', answer: 'start, end, promise, setTimeout' },
          { id: '1', answer: 'start, promise, end, setTimeout' },
          { id: '2', answer: 'start, setTimeout, promise, end' },
          { id: '3', answer: 'start, end, setTimeout, promise' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Why are promises executed before setTimeout callbacks when scheduled to run at the same time?',
        answers: [
          { id: '0', answer: 'Because promises are placed in the Job Queue, which has higher priority over the Task Queue' },
          { id: '1', answer: 'Because setTimeout callbacks have a built-in delay' },
          { id: '2', answer: 'Because promises run synchronously' },
          { id: '3', answer: 'Because setTimeout is deprecated' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In the context of the event loop, what happens after the call stack is empty?',
        answers: [
          { id: '0', answer: 'The event loop first processes all tasks in the Job Queue' },
          { id: '1', answer: 'The event loop processes all tasks in the Task Queue' },
          { id: '2', answer: 'The event loop stops' },
          { id: '3', answer: 'The event loop processes synchronous code' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What kind of tasks are added to the Job Queue in Node.js?',
        answers: [
          { id: '0', answer: 'Tasks scheduled with process.nextTick' },
          { id: '1', answer: 'setTimeout callbacks' },
          { id: '2', answer: 'setInterval callbacks' },
          { id: '3', answer: 'Event handler callbacks' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the purpose of the Job Queue in JavaScript?',
        answers: [
          { id: '0', answer: 'To handle microtasks like promises and process.nextTick' },
          { id: '1', answer: 'To handle macrotasks like setTimeout' },
          { id: '2', answer: 'To manage synchronous code execution' },
          { id: '3', answer: 'To handle network requests' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following statements is true?',
        answers: [
          { id: '0', answer: 'Microtasks are executed before the next macrotask' },
          { id: '1', answer: 'Macrotasks are executed before the next microtask' },
          { id: '2', answer: 'Microtasks and macrotasks are executed in the same order' },
          { id: '3', answer: 'Microtasks are executed only after all macrotasks are done' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
      console.log('A');
      setTimeout(() => {
        console.log('B');
      }, 0);
      Promise.resolve().then(() => {
        console.log('C');
      }).then(() => {
        console.log('D');
      });
      console.log('E');
        `,
        answers: [
          { id: '0', answer: 'A, E, C, D, B' },
          { id: '1', answer: 'A, C, D, E, B' },
          { id: '2', answer: 'A, B, C, D, E' },
          { id: '3', answer: 'A, E, B, C, D' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the call stack in JavaScript?',
        answers: [
          { id: '0', answer: 'A stack data structure that keeps track of function calls' },
          { id: '1', answer: 'A queue for handling asynchronous callbacks' },
          { id: '2', answer: 'A memory heap for dynamic allocation' },
          { id: '3', answer: 'A set of APIs for manipulating the DOM' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following best describes how the call stack operates?',
        answers: [
          { id: '0', answer: 'LIFO (Last In, First Out)' },
          { id: '1', answer: 'FIFO (First In, First Out)' },
          { id: '2', answer: 'Round-robin scheduling' },
          { id: '3', answer: 'Random access' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What happens when a function is called in JavaScript?',
        answers: [
          { id: '0', answer: 'It is pushed onto the call stack' },
          { id: '1', answer: 'It is pushed onto the callback queue' },
          { id: '2', answer: 'It is added to the job queue' },
          { id: '3', answer: 'It is executed immediately, bypassing the stack' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
        function first() {
          console.log('first');
        }
        function second() {
          first();
          console.log('second');
        }
        second();
        `,
        answers: [
          { id: '0', answer: 'first, second' },
          { id: '1', answer: 'second, first' },
          { id: '2', answer: 'first, first, second' },
          { id: '3', answer: 'second, first, second' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will happen if a function calls itself recursively without an exit condition?',
        answers: [
          { id: '0', answer: 'A stack overflow error will occur' },
          { id: '1', answer: 'The function will execute indefinitely' },
          { id: '2', answer: 'The browser will crash' },
          { id: '3', answer: 'Nothing, the function will handle recursion internally' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is true about the call stack in JavaScript?',
        answers: [
          { id: '0', answer: 'It only tracks the current function calls in execution' },
          { id: '1', answer: 'It handles asynchronous events and callbacks' },
          { id: '2', answer: 'It manages memory allocation' },
          { id: '3', answer: 'It executes microtasks before macrotasks' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What does the call stack do when a function returns a value?',
        answers: [
          { id: '0', answer: 'It pops the function off the stack' },
          { id: '1', answer: 'It pushes the return value onto the stack' },
          { id: '2', answer: 'It moves the function to the callback queue' },
          { id: '3', answer: 'It restarts the function execution' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does the call stack handle nested function calls?',
        answers: [
          { id: '0', answer: 'It pushes each nested function call onto the stack' },
          { id: '1', answer: 'It creates a separate stack for each function' },
          { id: '2', answer: 'It executes them in parallel' },
          { id: '3', answer: 'It ignores nested function calls' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the maximum size of the call stack in JavaScript?',
        answers: [
          { id: '0', answer: 'It depends on the implementation and available memory' },
          { id: '1', answer: 'There is no limit' },
          { id: '2', answer: '1024 function calls' },
          { id: '3', answer: '64KB' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code?',
        code: `
        function a() {
          b();
          console.log('a');
        }
        function b() {
          console.log('b');
        }
        a();
        `,
        answers: [
          { id: '0', answer: 'b, a' },
          { id: '1', answer: 'a, b' },
          { id: '2', answer: 'b, b, a' },
          { id: '3', answer: 'a, a, b' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'The terms "callback queue" and "task queue" are interchangeable',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'The terms "callback queue" and "call stack" are interchangeable',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'The terms "event loop" and "call stack" are interchangeable',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is Just-In-Time (JIT) compilation?',
        answers: [
          { id: '0', answer: 'A technique where code is compiled during execution rather than before execution' },
          { id: '1', answer: 'A method of compiling code ahead of time before execution' },
          { id: '2', answer: 'A process of interpreting code without any compilation' },
          { id: '3', answer: 'A technique used only in statically-typed languages' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a key benefit of JIT compilation?',
        answers: [
          { id: '0', answer: 'Improved runtime performance' },
          { id: '1', answer: 'Simplified debugging process' },
          { id: '2', answer: 'Reduced memory usage' },
          { id: '3', answer: 'Faster initial startup time' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which JavaScript engine is known for using JIT compilation?',
        answers: [
          { id: '0', answer: 'V8' },
          { id: '1', answer: 'Nashorn' },
          { id: '2', answer: 'Chakra' },
          { id: '3', answer: 'SpiderMonkey' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary difference between JIT compilation and AOT (Ahead-Of-Time) compilation?',
        answers: [
          { id: '0', answer: 'JIT compilation happens during execution, while AOT compilation happens before execution' },
          { id: '1', answer: 'AOT compilation is slower than JIT compilation' },
          { id: '2', answer: 'JIT compilation is used only in interpreted languages' },
          { id: '3', answer: 'AOT compilation does not produce machine code' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a disadvantage of JIT compilation?',
        answers: [
          { id: '0', answer: 'Potential for increased startup time' },
          { id: '1', answer: 'Lower runtime performance' },
          { id: '2', answer: 'Increased memory usage' },
          { id: '3', answer: 'Difficulty in cross-platform compatibility' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What role does the JIT compiler play in the performance of modern JavaScript applications?',
        answers: [
          { id: '0', answer: 'It optimizes code execution by compiling hot code paths at runtime' },
          { id: '1', answer: 'It interprets JavaScript code line-by-line' },
          { id: '2', answer: 'It only compiles code ahead of time before execution' },
          { id: '3', answer: 'It handles garbage collection for JavaScript applications' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which phase of execution does JIT compilation occur?',
        answers: [
          { id: '0', answer: 'During the execution phase of the application' },
          { id: '1', answer: 'Before the execution phase of the application' },
          { id: '2', answer: 'During the initial loading of the application' },
          { id: '3', answer: 'After the application has finished executing' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does JIT compilation improve performance over traditional interpretation?',
        answers: [
          { id: '0', answer: 'By compiling frequently executed code to machine code' },
          { id: '1', answer: 'By caching interpreted bytecode for reuse' },
          { id: '2', answer: 'By optimizing source code directly' },
          { id: '3', answer: 'By reducing the need for memory allocation' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is one of the challenges associated with JIT compilation?',
        answers: [
          { id: '0', answer: 'Balancing the overhead of compilation with runtime performance gains' },
          { id: '1', answer: 'Ensuring code compatibility across different browsers' },
          { id: '2', answer: 'Writing platform-specific machine code' },
          { id: '3', answer: 'Managing memory allocation and garbage collection' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What technique is often used by JIT compilers to identify hot code paths?',
        answers: [
          { id: '0', answer: 'Profiling' },
          { id: '1', answer: 'Syntax analysis' },
          { id: '2', answer: 'Static code analysis' },
          { id: '3', answer: 'Lexical analysis' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does the event loop contribute to JavaScript’s non-blocking paradigm?',
        answers: [
          { id: '0', answer: 'By allowing asynchronous operations to be executed without blocking the main thread' },
          { id: '1', answer: 'By ensuring all tasks are executed synchronously' },
          { id: '2', answer: 'By prioritizing long-running tasks over short tasks' },
          { id: '3', answer: 'By directly handling memory management and garbage collection' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following best describes the role of the event loop in JavaScript?',
        answers: [
          { id: '0', answer: 'It continuously checks the call stack and task queues to execute code, handle events, and process callbacks' },
          { id: '1', answer: 'It compiles JavaScript code into machine code at runtime' },
          { id: '2', answer: 'It manages synchronous function calls only' },
          { id: '3', answer: 'It executes code in parallel using multiple threads' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What will be the output of the following code, and how does it demonstrate the non-blocking nature of JavaScript?',
        code: `
        console.log('start');

        setTimeout(() => {
          console.log('setTimeout');
        }, 0);

        console.log('end');
        `,
        answers: [
          { id: '0', answer: '"start", "end", "setTimeout" - demonstrates that the main thread is not blocked by the asynchronous setTimeout' },
          { id: '1', answer: '"start", "setTimeout", "end" - demonstrates that the main thread waits for the setTimeout to complete' },
          { id: '2', answer: '"setTimeout", "start", "end" - demonstrates that asynchronous tasks are executed immediately' },
          { id: '3', answer: '"end", "start", "setTimeout" - demonstrates that tasks are executed in the order they are scheduled' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does the event loop handle long-running operations to prevent blocking in JavaScript?',
        answers: [
          { id: '0', answer: 'By offloading long-running operations to Web APIs or worker threads and processing the results asynchronously' },
          { id: '1', answer: 'By pausing all other operations until the long-running task is completed' },
          { id: '2', answer: 'By executing long-running tasks with higher priority' },
          { id: '3', answer: 'By dividing the long-running task into smaller synchronous tasks' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Why is non-blocking I/O important in JavaScript, and how does the event loop facilitate this?',
        answers: [
          { id: '0', answer: 'Non-blocking I/O allows the application to remain responsive, and the event loop facilitates this by handling I/O operations asynchronously' },
          { id: '1', answer: 'Non-blocking I/O is not important in JavaScript as it is single-threaded' },
          { id: '2', answer: 'Non-blocking I/O ensures that all operations are executed in parallel, and the event loop supports this by using multiple threads' },
          { id: '3', answer: 'Non-blocking I/O is handled synchronously by the event loop to ensure quick execution' },
        ],
        correctAnswer: '0',
      },
    ],
  },
};

export default quizData;

// (?<=\s)(?<!(answer|question).*)\d
// "$0"
