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
    name: 'JavaScript',
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
      {
        question: 'A shallow copy created with Object.assign()',
        answers: [
          { id: '0', answer: 'will have fields that are immutable with regards to the copied object' },
          { id: '1', answer: 'creates references to fields that are objects or arrays in the copied object' },
          { id: '2', answer: 'creates references to fields that are objects in the copied object' },
          { id: '3', answer: 'creates references to fields that are arrays in the copied object' },
        ],
        correctAnswer: '1',
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
        question: 'Which of the following scenarios best describes closure?',
        answers: [
          { id: '0', answer: 'A function that is defined within another function and is a private method of its parent function' },
          { id: '1', answer: 'A function that returns another function with access to the outer function’s variables' },
          { id: '2', answer: 'A function that is defined within another function and has access to the parent function’s variables' },
          { id: '3', answer: 'A function with no parameters' },
        ],
        correctAnswer: '2',
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
          { id: '2', answer: 'The task queue is executed before the job queue' },
          { id: '3', answer: 'React guarantees backwards compatibility with older browsers' },
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
      {
        question: 'Which of the following is not true?',
        answers: [
          { id: '0', answer: 'The call stack holds the currently executing script and function calls' },
          { id: '1', answer: 'Microtasks are executed before any task from the task queue whenever the call stack is empty' },
          { id: '2', answer: 'When the call stack is empty, the event loop picks the first task from the task queue and pushes it onto the call stack for execution.' },
          { id: '3', answer: 'I/O callbacks belong to the job queue' },
        ],
        correctAnswer: '3',
      },
      // {
      //   question: 'During the initial render of a web application',
      //   answers: [
      //     { id: '0', answer: 'Synchronous code (such as initial component renders in React) runs to build the initial UI.' },
      //     { id: '1', answer: 'Microtasks are executed before any task from the task queue whenever the call stack is empty' },
      //     { id: '2', answer: 'When the call stack is empty, the event loop picks the first task from the task queue and pushes it onto the call stack for execution.' },
      //     { id: '3', answer: 'I/O callbacks belong to the job queue' },
      //   ],
      //   correctAnswer: '3',
      // },
      {
        question: 'What is true of the increment function in the component below?',
        code: `
      function Counter() {
        const [count, setCount] = useState(0);

        const increment = () => {
          setCount(count + 1);
        };

        return (
          <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
          </div>
        );
      }
        `,
        answers: [
          { id: '0', answer: 'It is added to the job queue when called' },
          { id: '1', answer: 'It is a microtask' },
          { id: '2', answer: 'It causes state mutation' },
          { id: '3', answer: 'It causes a synchronous state update' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What is true of how React leverages state?',
        answers: [
          { id: '0', answer: 'State persists through components being unmounted from the DOM' },
          { id: '1', answer: 'State does not persist through rerenders' },
          { id: '2', answer: 'When a component\'s state or props change, React triggers a rerender of that component' },
          { id: '3', answer: 'When the DOM is mutated directly, React uses the virtual DOM to rerender affected components' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What triggers a rerender in a React component?',
        answers: [
          { id: '0', answer: 'Changes in state or props' },
          { id: '1', answer: 'Changes in the URL' },
          { id: '2', answer: 'Page refresh' },
          { id: '3', answer: 'Adding event listeners' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which React hook can be used to prevent unnecessary rerenders of a functional component?',
        answers: [
          { id: '0', answer: 'React.memo' },
          { id: '1', answer: 'useCallback' },
          { id: '2', answer: 'useState' },
          { id: '3', answer: 'useEffect' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does React handle multiple state updates in a single event handler to optimize rerenders?',
        answers: [
          { id: '0', answer: 'React batches multiple state updates into a single rerender' },
          { id: '1', answer: 'React processes each state update sequentially with separate rerenders' },
          { id: '2', answer: 'React ignores multiple state updates' },
          { id: '3', answer: 'React defers state updates until the component unmounts' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the purpose of the React hook `useMemo`?',
        answers: [
          { id: '0', answer: 'To memoize the result of a calculation and prevent recalculations on rerenders' },
          { id: '1', answer: 'To handle side effects in functional components' },
          { id: '2', answer: 'To manage component state' },
          { id: '3', answer: 'To update the DOM directly' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which lifecycle method in class components is similar to `useEffect` in functional components for handling side effects?',
        answers: [
          { id: '0', answer: 'componentDidMount' },
          { id: '1', answer: 'shouldComponentUpdate' },
          { id: '2', answer: 'componentWillUnmount' },
          { id: '3', answer: 'getDerivedStateFromProps' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is not a microtask?',
        answers: [
          { id: '0', answer: 'A promise' },
          { id: '1', answer: 'A callback following the keyword "await"' },
          { id: '2', answer: 'An I/O event listener callback' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which answer best represents the call stack for executing the following lines of code?',
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
          { id: '0', answer: '<a /><b /><console.log /><console.log />' },
          { id: '1', answer: '<a /><b /><console.log /><b /><console.log /><b /><a />' },
          { id: '2', answer: '<a><b><console.log /><console.log /></b></a>' },
          { id: '3', answer: '<a><b><console.log /></b><console.log /></a>' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Which answer best represents the call stack for executing the following lines of code?',
        code: `
      function x() {
        y();
        console.log('x');
      }
      function y() {
        z();
        console.log('y');
      }
      function z() {
        console.log('z');
      }
      x();
        `,
        answers: [
          { id: '0', answer: '<x /><y /><z /><console.log /><console.log /><console.log />' },
          { id: '1', answer: '<x><y><z><console.log /></z><console.log /></y></x>' },
          { id: '2', answer: '<x><y><z /></y><console.log /></x><console.log /></x>' },
          { id: '3', answer: '<x><y><z><console.log /></z><console.log /></y><console.log /></x>' },
        ],
        correctAnswer: '3',
      }, {
        question: 'Which answer best represents the call stack for executing the following lines of code?',
        code: `
      function a() {
        c();
        console.log('a');
      }
      function b() {
        console.log('b');
      }
      function c() {
        b();
        console.log('c');
      }
      a();
        `,
        answers: [
          { id: '0', answer: '<a><c><b><console.log /></b><console.log /></c><console.log /></a>' },
          { id: '1', answer: '<a /><c /><b /><console.log /><console.log /><console.log />' },
          { id: '2', answer: '<a><c><console.log /></c><console.log /></a><console.log /></a>' },
          { id: '3', answer: '<a><b /><c /><console.log /><console.log /><console.log />' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which answer best represents the call stack for executing the following lines of code?',
        code: `
      function start() {
        middle();
        console.log('start');
      }
      function middle() {
        end();
        console.log('middle');
      }
      function end() {
        console.log('end');
      }
      start();
        `,
        answers: [
          { id: '0', answer: '<start /><middle /><end /><console.log /><console.log /><console.log />' },
          { id: '1', answer: '<start><middle><end><console.log /></end><console.log /></middle><console.log /></start>' },
          { id: '2', answer: '<start><middle><end /></middle><console.log /></start><console.log /></start>' },
          { id: '3', answer: '<start><middle><end><console.log /><console.log /></end></middle></start>' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which answer best represents the call stack for executing the following lines of code?',
        code: `
      function first() {
        second();
        console.log('first');
      }
      function second() {
        third();
        console.log('second');
      }
      function third() {
        fourth();
        console.log('third');
      }
      function fourth() {
        console.log('fourth');
      }
      first();
        `,
        answers: [
          { id: '0', answer: '<first><second><third><fourth><console.log /></fourth><console.log /></third><console.log /></second><console.log /></first>' },
          { id: '1', answer: '<first><second /><third /><fourth /><console.log /><console.log /><console.log /><console.log />' },
          { id: '2', answer: '<first><second><third /><fourth /><console.log /><console.log /><console.log /><console.log />' },
          { id: '3', answer: '<first /><second /><third /><fourth /><console.log /><console.log /><console.log /><console.log />' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which answer best represents the call stack for executing the following lines of code?',
        code: `
      function alpha() {
        beta();
        console.log('alpha');
      }
      function beta() {
        gamma();
        console.log('beta');
      }
      function gamma() {
        delta();
        console.log('gamma');
      }
      function delta() {
        console.log('delta');
      }
      alpha();
        `,
        answers: [
          { id: '0', answer: '<alpha><beta><gamma><delta><console.log /><console.log /><console.log /><console.log /><delta><gamma></beta></alpha>' },
          { id: '1', answer: '<alpha><beta><gamma><delta><console.log /></delta><console.log /></gamma><console.log /></beta><console.log /></alpha>' },
          { id: '2', answer: '<alpha><beta><gamma><delta><console.log /></delta></gamma></beta /><console.log /></alpha>' },
          { id: '3', answer: '<alpha /><beta /><gamma /><delta /><console.log /><console.log /><console.log /><console.log />' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Given the following code, is `b` a closure of `a`?',
        code: `
      function a() {
        const x = 10;
        function b() {
          console.log(x);
        }
        return b;
      }
      const closure = a();
      closure();
        `,
        answers: [
          { id: '0', answer: 'Yes, `b` is a closure of `a` because it accesses `a`\'s variable `x`' },
          { id: '1', answer: 'No, `b` is not a closure of `a` because it does not modify `x`' },
          { id: '2', answer: 'Yes, `b` is a closure of `a` because it is defined inside `a`' },
          { id: '3', answer: 'No, `b` is not a closure of `a` because it is returned by `a`' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which functions are closures in the following code?',
        code: `
      function outer() {
        const y = 20;
        function inner1() {
          console.log(y);
        }
        function inner2() {
          const z = 30;
          function inner3() {
            console.log(z);
          }
          return inner3;
        }
        return { inner1, inner2 };
      }
      const { inner1, inner2 } = outer();
      const inner3 = inner2();
      inner1();
      inner3();
        `,
        answers: [
          { id: '0', answer: 'inner1 and inner3 are closures' },
          { id: '1', answer: 'inner1 is a closure, but inner3 is not' },
          { id: '2', answer: 'inner3 is a closure, but inner1 is not' },
          { id: '3', answer: 'Neither inner1 nor inner3 are closures' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In the following code, does `d` form a closure?',
        code: `
      function a() {
        const val = 100;
        function b() {
          const innerVal = 200;
          function c() {
            console.log(val);
          }
          function d() {
            console.log(innerVal);
          }
          return { c, d };
        }
        return b();
      }
      const { c, d } = a();
      c();
      d();
        `,
        answers: [
          { id: '0', answer: 'Yes, `d` forms a closure because it accesses `innerVal` from `b`\'s scope' },
          { id: '1', answer: 'No, `d` does not form a closure because it does not access `val` from `a`\'s scope' },
          { id: '2', answer: 'Yes, `d` forms a closure because it is defined inside `b`' },
          { id: '3', answer: 'No, `d` does not form a closure because it does not return anything' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In the following code, which function(s) form a closure?',
        code: `
      function outerFunction() {
        const outerVariable = 'I am outside!';
        
        function innerFunction() {
          console.log(outerVariable);
        }
        
        return innerFunction;
      }
      const myFunction = outerFunction();
      myFunction();
        `,
        answers: [
          { id: '0', answer: 'innerFunction forms a closure' },
          { id: '1', answer: 'outerFunction forms a closure' },
          { id: '2', answer: 'Both outerFunction and innerFunction form closures' },
          { id: '3', answer: 'Neither outerFunction nor innerFunction form closures' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Given the following code, which function(s) are closures?',
        code: `
      function createCounter() {
        let count = 0;
        return {
          increment: function() {
            count++;
            return count;
          },
          decrement: function() {
            count--;
            return count;
          }
        };
      }
      const counter = createCounter();
      console.log(counter.increment());
      console.log(counter.decrement());
        `,
        answers: [
          { id: '0', answer: 'Both increment and decrement are closures' },
          { id: '1', answer: 'Only increment is a closure' },
          { id: '2', answer: 'Only decrement is a closure' },
          { id: '3', answer: 'Neither increment nor decrement are closures' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is JSX in React?',
        answers: [
          { id: '0', answer: 'A syntax extension that allows writing HTML directly within JavaScript' },
          { id: '1', answer: 'A function to make AJAX requests' },
          { id: '2', answer: 'A library for managing forms' },
          { id: '3', answer: 'A testing framework for React applications' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which hook is used to add state to a functional component in React?',
        answers: [
          { id: '0', answer: 'useState' },
          { id: '1', answer: 'useEffect' },
          { id: '2', answer: 'useContext' },
          { id: '3', answer: 'useReducer' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What does the useEffect hook do in a React functional component?',
        answers: [
          { id: '0', answer: 'It performs side effects in the component, such as fetching data or subscribing to events' },
          { id: '1', answer: 'It manages the state of the component' },
          { id: '2', answer: 'It provides a context for the component' },
          { id: '3', answer: 'It replaces the render method of the component' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a core principle of React?',
        answers: [
          { id: '0', answer: 'Component-based architecture' },
          { id: '1', answer: 'Object-oriented programming' },
          { id: '2', answer: 'Server-side rendering only' },
          { id: '3', answer: 'Global state management' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What does the "Virtual DOM" in React do?',
        answers: [
          { id: '0', answer: 'It is an in-memory representation of the real DOM that allows React to efficiently update the UI' },
          { id: '1', answer: 'It is a physical DOM used for server-side rendering' },
          { id: '2', answer: 'It is a new standard for DOM manipulation' },
          { id: '3', answer: 'It is a library for accessing the DOM directly' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following statements is true about props in React?',
        answers: [
          { id: '0', answer: 'Props are read-only and used to pass data from parent to child components' },
          { id: '1', answer: 'Props are used to manage component state' },
          { id: '2', answer: 'Props can be modified directly within a component' },
          { id: '3', answer: 'Props are used to manage global state' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following hooks is used to access the value of a context in a functional component?',
        answers: [
          { id: '0', answer: 'useContext' },
          { id: '1', answer: 'useReducer' },
          { id: '2', answer: 'useEffect' },
          { id: '3', answer: 'useState' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In JavaScript, how can encapsulation be achieved?',
        answers: [
          { id: '0', answer: 'By using closures and modules to create private variables and methods' },
          { id: '1', answer: 'By defining all variables and methods as global' },
          { id: '2', answer: 'By using the `eval` function' },
          { id: '3', answer: 'By using public properties only' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does encapsulation promote modularity in software design?',
        answers: [
          { id: '0', answer: 'By keeping related data and methods together, encapsulation makes it easier to understand and manage individual modules of a program' },
          { id: '1', answer: 'By allowing the use of multiple inheritance' },
          { id: '2', answer: 'By enabling the use of global variables throughout the program' },
          { id: '3', answer: 'By reducing the need for private methods and properties' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Why is encapsulation important in software development?',
        answers: [
          { id: '0', answer: 'It helps to protect the internal state of an object from unintended or harmful modifications' },
          { id: '1', answer: 'It allows multiple classes to inherit properties from a parent class' },
          { id: '2', answer: 'It enables defining multiple functions with the same name' },
          { id: '3', answer: 'It provides a way to perform multiple operations in parallel' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following best demonstrates encapsulation?',
        code: `
        class Person {
          constructor(name, age) {
            this._name = name;
            this._age = age;
          }

          getName() {
            return this._name;
          }

          getAge() {
            return this._age;
          }

          setName(name) {
            this._name = name;
          }

          setAge(age) {
            if (age > 0) {
              this._age = age;
            }
          }
        }
        `,
        answers: [
          { id: '0', answer: 'The use of private fields and methods to restrict direct access to the data' },
          { id: '1', answer: 'The ability to inherit methods from another class' },
          { id: '2', answer: 'The definition of multiple methods with the same name' },
          { id: '3', answer: 'The use of public fields and methods' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is encapsulation in object-oriented programming?',
        answers: [
          { id: '0', answer: 'Encapsulation is the concept of bundling data and methods that operate on that data within a single unit or class' },
          { id: '1', answer: 'Encapsulation is the process of inheriting properties from another class' },
          { id: '2', answer: 'Encapsulation is the method of defining multiple functions with the same name' },
          { id: '3', answer: 'Encapsulation is a way to implement polymorphism' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a major feature of React?',
        answers: [
          { id: '0', answer: 'Mobile-first architectural philosophy' },
          { id: '1', answer: 'The virtual DOM as a means of dealing with state mutation' },
          { id: '2', answer: 'Writing HTML directly in JavaScript' },
          { id: '3', answer: 'Combining JIT and AOT compiling techiques' },
        ],
        correctAnswer: '2',
      },
    ],
  },
  python: {
    name: 'Python',
    questions: [
      {
        question: 'Which Python library is known for its powerful data structures and data analysis tools?',
        answers: [
          { id: '0', answer: 'NumPy' },
          { id: '1', answer: 'Pandas' },
          { id: '2', answer: 'Scikit-learn' },
          { id: '3', answer: 'TensorFlow' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which library is primarily used for deep learning in Python and was developed by Google?',
        answers: [
          { id: '0', answer: 'PyTorch' },
          { id: '1', answer: 'Keras' },
          { id: '2', answer: 'TensorFlow' },
          { id: '3', answer: 'Theano' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What is the main advantage of using the Keras library?',
        answers: [
          { id: '0', answer: 'It is highly scalable' },
          { id: '1', answer: 'It provides an easy-to-use API for building neural networks' },
          { id: '2', answer: 'It is developed by Facebook' },
          { id: '3', answer: 'It is designed for reinforcement learning' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which Python library is known for its array manipulation capabilities and is often used as the foundation for other libraries?',
        answers: [
          { id: '0', answer: 'SciPy' },
          { id: '1', answer: 'Pandas' },
          { id: '2', answer: 'NumPy' },
          { id: '3', answer: 'Matplotlib' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What is the primary use of the Scikit-learn library in Python?',
        answers: [
          { id: '0', answer: 'Data visualization' },
          { id: '1', answer: 'Deep learning' },
          { id: '2', answer: 'Statistical modeling' },
          { id: '3', answer: 'Machine learning' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Which library is known for providing a flexible platform for training deep learning models and is developed by Facebook?',
        answers: [
          { id: '0', answer: 'Keras' },
          { id: '1', answer: 'TensorFlow' },
          { id: '2', answer: 'PyTorch' },
          { id: '3', answer: 'Caffe' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which library would you use for scientific computing and technical computing in Python?',
        answers: [
          { id: '0', answer: 'NumPy' },
          { id: '1', answer: 'SciPy' },
          { id: '2', answer: 'Pandas' },
          { id: '3', answer: 'Matplotlib' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which library is often used for creating plots and visualizations in Python?',
        answers: [
          { id: '0', answer: 'Seaborn' },
          { id: '1', answer: 'Matplotlib' },
          { id: '2', answer: 'Plotly' },
          { id: '3', answer: 'Bokeh' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which Python library provides tools for working with large data sets and includes functionality for both data manipulation and visualization?',
        answers: [
          { id: '0', answer: 'Pandas' },
          { id: '1', answer: 'SciPy' },
          { id: '2', answer: 'NumPy' },
          { id: '3', answer: 'Matplotlib' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary function of the library TensorFlow?',
        answers: [
          { id: '0', answer: 'To perform numerical computations' },
          { id: '1', answer: 'To build and train deep learning models' },
          { id: '2', answer: 'To analyze and manipulate data' },
          { id: '3', answer: 'To create interactive visualizations' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which Python library is specifically designed for symbolic mathematics and computer algebra?',
        answers: [
          { id: '0', answer: 'SymPy' },
          { id: '1', answer: 'NumPy' },
          { id: '2', answer: 'SciPy' },
          { id: '3', answer: 'Pandas' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which library provides high-level building blocks for developing complex machine learning workflows?',
        answers: [
          { id: '0', answer: 'Scikit-learn' },
          { id: '1', answer: 'TensorFlow' },
          { id: '2', answer: 'PyTorch' },
          { id: '3', answer: 'Keras' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary focus of the library Theano?',
        answers: [
          { id: '0', answer: 'Reinforcement learning' },
          { id: '1', answer: 'Deep learning' },
          { id: '2', answer: 'Statistical analysis' },
          { id: '3', answer: 'Probabilistic programming' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which Python library is known for its high-performance data structures and tools for data analysis?',
        answers: [
          { id: '0', answer: 'NumPy' },
          { id: '1', answer: 'Pandas' },
          { id: '2', answer: 'SciPy' },
          { id: '3', answer: 'Matplotlib' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which machine learning library is designed for ease of use and extensibility, and is built on top of TensorFlow?',
        answers: [
          { id: '0', answer: 'Scikit-learn' },
          { id: '1', answer: 'Keras' },
          { id: '2', answer: 'PyTorch' },
          { id: '3', answer: 'Theano' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What will be the output of the following code: `print("hello".capitalize())`?',
        answers: [
          { id: '0', answer: 'Hello' },
          { id: '1', answer: 'HELLO' },
          { id: '2', answer: 'hello' },
          { id: '3', answer: 'HeLLo' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following methods can be used to add an element to a list in Python?',
        answers: [
          { id: '0', answer: 'append()' },
          { id: '1', answer: 'add()' },
          { id: '2', answer: 'insert()' },
          { id: '3', answer: 'Both append() and insert()' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'How can you retrieve the keys from a dictionary in Python?',
        answers: [
          { id: '0', answer: 'dict.keys()' },
          { id: '1', answer: 'dict.values()' },
          { id: '2', answer: 'dict.items()' },
          { id: '3', answer: 'dict.get_keys()' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What does the "random" module in Python provide?',
        answers: [
          { id: '0', answer: 'Functions for generating random numbers' },
          { id: '1', answer: 'Functions for working with arrays' },
          { id: '2', answer: 'Functions for file I/O' },
          { id: '3', answer: 'Functions for mathematical operations' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which keyword is used to begin a class definition in Python?',
        answers: [
          { id: '0', answer: 'function' },
          { id: '1', answer: 'class' },
          { id: '2', answer: 'def' },
          { id: '3', answer: 'object' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'How do you create a tuple in Python?',
        answers: [
          { id: '0', answer: 'Using square brackets []' },
          { id: '1', answer: 'Using curly braces {}' },
          { id: '2', answer: 'Using parentheses ()' },
          { id: '3', answer: 'Using angle brackets <>' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What will be the output of the following code: `print(type([]))`?',
        answers: [
          { id: '0', answer: '<class \'list\'>' },
          { id: '1', answer: '<class \'tuple\'>' },
          { id: '2', answer: '<class \'dict\'>' },
          { id: '3', answer: '<class \'set\'>' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a correct way to create a set in Python?',
        answers: [
          { id: '0', answer: 'set = {1, 2, 3}' },
          { id: '1', answer: 'set = [1, 2, 3]' },
          { id: '2', answer: 'set = (1, 2, 3)' },
          { id: '3', answer: 'set = <1, 2, 3>' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How do you start a multi-line comment in Python?',
        answers: [
          { id: '0', answer: 'Using /* and */' },
          { id: '1', answer: 'Using // and //' },
          { id: '2', answer: 'Using """ or \'\'\'' },
          { id: '3', answer: 'Using # and #' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What does the "len()" function do in Python?',
        answers: [
          { id: '0', answer: 'Returns the length of an object' },
          { id: '1', answer: 'Returns the type of an object' },
          { id: '2', answer: 'Returns the memory address of an object' },
          { id: '3', answer: 'Returns the id of an object' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which method is used to convert a string to lowercase in Python?',
        answers: [
          { id: '0', answer: 'lowercase()' },
          { id: '1', answer: 'tolower()' },
          { id: '2', answer: 'lower()' },
          { id: '3', answer: 'str.lower()' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What is the output of the following code: `print(3 == 3.0)`?',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
          { id: '2', answer: 'Error' },
          { id: '3', answer: 'None' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is not a valid way to import a module in Python?',
        answers: [
          { id: '0', answer: 'import module' },
          { id: '1', answer: 'import module as alias' },
          { id: '2', answer: 'from module import *' },
          { id: '3', answer: 'include module' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'How do you define a variable in Python?',
        answers: [
          { id: '0', answer: 'var variableName = value' },
          { id: '1', answer: 'let variableName = value' },
          { id: '2', answer: 'variableName = value' },
          { id: '3', answer: 'define variableName = value' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which of the following is true about Python lists?',
        answers: [
          { id: '0', answer: 'Lists are immutable' },
          { id: '1', answer: 'Lists can contain elements of different types' },
          { id: '2', answer: 'Lists are created using parentheses ()' },
          { id: '3', answer: 'Lists are a form of dictionary' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Python is an object-oriented language',
        answers: [
          { id: '0', answer: 'True' },
          { id: '1', answer: 'False' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a mutable data type in Python?',
        answers: [
          { id: '0', answer: 'Tuple' },
          { id: '1', answer: 'String' },
          { id: '2', answer: 'List' },
          { id: '3', answer: 'Integer' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What does the "self" keyword in Python represent?',
        answers: [
          { id: '0', answer: 'The current class' },
          { id: '1', answer: 'The current method' },
          { id: '2', answer: 'The current instance of the class' },
          { id: '3', answer: 'A global variable' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which of the following is not a built-in data type in Python?',
        answers: [
          { id: '0', answer: 'Set' },
          { id: '1', answer: 'Dictionary' },
          { id: '2', answer: 'Array' },
          { id: '3', answer: 'List' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'How do you define a private method in a Python class?',
        answers: [
          { id: '0', answer: 'By prefixing the method name with a single underscore' },
          { id: '1', answer: 'By prefixing the method name with a double underscore' },
          { id: '2', answer: 'By suffixing the method name with a single underscore' },
          { id: '3', answer: 'By suffixing the method name with a double underscore' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which of the following is used to handle exceptions in Python?',
        answers: [
          { id: '0', answer: 'try-except block' },
          { id: '1', answer: 'try-catch block' },
          { id: '2', answer: 'catch-except block' },
          { id: '3', answer: 'try-finally block' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is true about Python decorators?',
        answers: [
          { id: '0', answer: 'Decorators are a form of metaprogramming' },
          { id: '1', answer: 'Decorators can modify the behavior of a function' },
          { id: '2', answer: 'Decorators can be stacked' },
          { id: '3', answer: 'All of the above' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What is the purpose of the "with" statement in Python?',
        answers: [
          { id: '0', answer: 'To create a new scope' },
          { id: '1', answer: 'To simplify exception handling' },
          { id: '2', answer: 'To ensure proper resource management' },
          { id: '3', answer: 'To define anonymous functions' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which of the following is a feature of Python’s list comprehensions?',
        answers: [
          { id: '0', answer: 'They provide a concise way to create lists' },
          { id: '1', answer: 'They can include conditionals' },
          { id: '2', answer: 'They are more readable than for-loops for creating lists' },
          { id: '3', answer: 'All of the above' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What does the built-in function "zip()" do in Python?',
        answers: [
          { id: '0', answer: 'Combines two or more iterables into a single iterable' },
          { id: '1', answer: 'Compresses data into a zip file' },
          { id: '2', answer: 'Sorts multiple iterables' },
          { id: '3', answer: 'Splits a string into a list' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is a lambda function in Python?',
        answers: [
          { id: '0', answer: 'A function that can take any number of arguments' },
          { id: '1', answer: 'A function defined using the "def" keyword' },
          { id: '2', answer: 'An anonymous function expressed as a single statement' },
          { id: '3', answer: 'A recursive function' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which method can be used to convert a string into a list in Python?',
        answers: [
          { id: '0', answer: 'split()' },
          { id: '1', answer: 'join()' },
          { id: '2', answer: 'append()' },
          { id: '3', answer: 'extend()' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the output of the expression `2 ** 3` in Python?',
        answers: [
          { id: '0', answer: '5' },
          { id: '1', answer: '6' },
          { id: '2', answer: '8' },
          { id: '3', answer: '9' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which of the following is a Python library for data manipulation and analysis?',
        answers: [
          { id: '0', answer: 'NumPy' },
          { id: '1', answer: 'Pandas' },
          { id: '2', answer: 'Matplotlib' },
          { id: '3', answer: 'SciPy' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the purpose of the "__init__" method in a Python class?',
        answers: [
          { id: '0', answer: 'To initialize an instance of the class' },
          { id: '1', answer: 'To define a class-level method' },
          { id: '2', answer: 'To destroy an instance of the class' },
          { id: '3', answer: 'To define a static method' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary difference between "deepcopy" and "copy" in the copy module?',
        answers: [
          { id: '0', answer: 'deepcopy copies only the top-level objects, while copy copies all nested objects' },
          { id: '1', answer: 'copy copies only the top-level objects, while deepcopy copies all nested objects' },
          { id: '2', answer: 'There is no difference' },
          { id: '3', answer: 'copy is faster than deepcopy' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which of the following is used to define a block of code in Python?',
        answers: [
          { id: '0', answer: 'Curly braces {}' },
          { id: '1', answer: 'Indentation' },
          { id: '2', answer: 'Parentheses ()' },
          { id: '3', answer: 'Square brackets []' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the use of the "pass" statement in Python?',
        answers: [
          { id: '0', answer: 'To create a placeholder for future code' },
          { id: '1', answer: 'To end a loop' },
          { id: '2', answer: 'To raise an exception' },
          { id: '3', answer: 'To break out of a function' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is used to define a generator function in Python?',
        answers: [
          { id: '0', answer: 'return' },
          { id: '1', answer: 'yield' },
          { id: '2', answer: 'generate' },
          { id: '3', answer: 'yield return' },
        ],
        correctAnswer: '1',
      },
    ],
  },
  // ===========
  'machine-learning-advanced': {
    name: 'Advanced Machine Learning',
    questions: [
      {
        question: 'Which Python library is known for its powerful data structures and data analysis tools?',
        answers: [
          { id: '0', answer: 'NumPy' },
          { id: '1', answer: 'Pandas' },
          { id: '2', answer: 'Scikit-learn' },
          { id: '3', answer: 'TensorFlow' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which library is primarily used for deep learning in Python and was developed by Google?',
        answers: [
          { id: '0', answer: 'PyTorch' },
          { id: '1', answer: 'Keras' },
          { id: '2', answer: 'TensorFlow' },
          { id: '3', answer: 'Theano' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What is the main advantage of using the Keras library?',
        answers: [
          { id: '0', answer: 'It is highly scalable' },
          { id: '1', answer: 'It provides an easy-to-use API for building neural networks' },
          { id: '2', answer: 'It is developed by Facebook' },
          { id: '3', answer: 'It is designed for reinforcement learning' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which Python library is known for its array manipulation capabilities and is often used as the foundation for other libraries?',
        answers: [
          { id: '0', answer: 'SciPy' },
          { id: '1', answer: 'Pandas' },
          { id: '2', answer: 'NumPy' },
          { id: '3', answer: 'Matplotlib' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What is the primary use of the Scikit-learn library in Python?',
        answers: [
          { id: '0', answer: 'Data visualization' },
          { id: '1', answer: 'Deep learning' },
          { id: '2', answer: 'Statistical modeling' },
          { id: '3', answer: 'Machine learning' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Which library is known for providing a flexible platform for training deep learning models and is developed by Facebook?',
        answers: [
          { id: '0', answer: 'Keras' },
          { id: '1', answer: 'TensorFlow' },
          { id: '2', answer: 'PyTorch' },
          { id: '3', answer: 'Caffe' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which library would you use for scientific computing and technical computing in Python?',
        answers: [
          { id: '0', answer: 'NumPy' },
          { id: '1', answer: 'SciPy' },
          { id: '2', answer: 'Pandas' },
          { id: '3', answer: 'Matplotlib' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which library is often used for creating plots and visualizations in Python?',
        answers: [
          { id: '0', answer: 'Seaborn' },
          { id: '1', answer: 'Matplotlib' },
          { id: '2', answer: 'Plotly' },
          { id: '3', answer: 'Bokeh' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which Python library provides tools for working with large data sets and includes functionality for both data manipulation and visualization?',
        answers: [
          { id: '0', answer: 'Pandas' },
          { id: '1', answer: 'SciPy' },
          { id: '2', answer: 'NumPy' },
          { id: '3', answer: 'Matplotlib' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary function of the library TensorFlow?',
        answers: [
          { id: '0', answer: 'To perform numerical computations' },
          { id: '1', answer: 'To build and train deep learning models' },
          { id: '2', answer: 'To analyze and manipulate data' },
          { id: '3', answer: 'To create interactive visualizations' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which Python library is specifically designed for symbolic mathematics and computer algebra?',
        answers: [
          { id: '0', answer: 'SymPy' },
          { id: '1', answer: 'NumPy' },
          { id: '2', answer: 'SciPy' },
          { id: '3', answer: 'Pandas' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which library provides high-level building blocks for developing complex machine learning workflows?',
        answers: [
          { id: '0', answer: 'Scikit-learn' },
          { id: '1', answer: 'TensorFlow' },
          { id: '2', answer: 'PyTorch' },
          { id: '3', answer: 'Keras' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary focus of the library Theano?',
        answers: [
          { id: '0', answer: 'Reinforcement learning' },
          { id: '1', answer: 'Deep learning' },
          { id: '2', answer: 'Statistical analysis' },
          { id: '3', answer: 'Probabilistic programming' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which Python library is known for its high-performance data structures and tools for data analysis?',
        answers: [
          { id: '0', answer: 'NumPy' },
          { id: '1', answer: 'Pandas' },
          { id: '2', answer: 'SciPy' },
          { id: '3', answer: 'Matplotlib' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which machine learning library is designed for ease of use and extensibility, and is built on top of TensorFlow?',
        answers: [
          { id: '0', answer: 'Scikit-learn' },
          { id: '1', answer: 'Keras' },
          { id: '2', answer: 'PyTorch' },
          { id: '3', answer: 'Theano' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the purpose of the bias term in a linear regression model?',
        answers: [
          { id: '0', answer: 'To adjust the slope of the regression line' },
          { id: '1', answer: 'To shift the regression line up or down' },
          { id: '2', answer: 'To measure the accuracy of the model' },
          { id: '3', answer: 'To increase the model complexity' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which of the following is a method to prevent overfitting in a machine learning model?',
        answers: [
          { id: '0', answer: 'Increasing the number of layers in a neural network' },
          { id: '1', answer: 'Using dropout regularization' },
          { id: '2', answer: 'Reducing the size of the training dataset' },
          { id: '3', answer: 'Increasing the learning rate' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'In the context of support vector machines, what is a kernel trick?',
        answers: [
          { id: '0', answer: 'A technique to increase the dataset size' },
          { id: '1', answer: 'A method to transform data into higher dimensions' },
          { id: '2', answer: 'A way to reduce the dimensionality of data' },
          { id: '3', answer: 'A preprocessing step to normalize data' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the primary difference between bagging and boosting?',
        answers: [
          { id: '0', answer: 'Bagging focuses on variance reduction, while boosting focuses on bias reduction' },
          { id: '1', answer: 'Boosting focuses on variance reduction, while bagging focuses on bias reduction' },
          { id: '2', answer: 'Bagging uses sequential learning, while boosting uses parallel learning' },
          { id: '3', answer: 'There is no difference; they are the same technique' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary goal of the Expectation-Maximization (EM) algorithm?',
        answers: [
          { id: '0', answer: 'To maximize the likelihood function of observed data' },
          { id: '1', answer: 'To find the principal components of the data' },
          { id: '2', answer: 'To cluster data into groups' },
          { id: '3', answer: 'To reduce the dimensionality of the data' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In reinforcement learning, what does the term "policy" refer to?',
        answers: [
          { id: '0', answer: 'A function that maps states to actions' },
          { id: '1', answer: 'A measure of the goodness of a state-action pair' },
          { id: '2', answer: 'A reward function for the agent' },
          { id: '3', answer: 'A set of actions the agent can take' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the main purpose of using dropout in neural networks?',
        answers: [
          { id: '0', answer: 'To increase the model complexity' },
          { id: '1', answer: 'To prevent overfitting' },
          { id: '2', answer: 'To reduce the training time' },
          { id: '3', answer: 'To make the model invariant to input changes' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the curse of dimensionality in machine learning?',
        answers: [
          { id: '0', answer: 'The difficulty of visualizing data in high dimensions' },
          { id: '1', answer: 'The exponential increase in volume associated with adding extra dimensions to Euclidean space' },
          { id: '2', answer: 'The increase in computational complexity with higher dimensions' },
          { id: '3', answer: 'The reduction in model performance with higher dimensions' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the purpose of using a validation set in machine learning?',
        answers: [
          { id: '0', answer: 'To adjust the hyperparameters of the model' },
          { id: '1', answer: 'To train the model' },
          { id: '2', answer: 'To test the final model performance' },
          { id: '3', answer: 'To reduce the dataset size' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'In a neural network, what is backpropagation used for?',
        answers: [
          { id: '0', answer: 'To initialize the network weights' },
          { id: '1', answer: 'To compute the output of the network' },
          { id: '2', answer: 'To update the weights based on the error' },
          { id: '3', answer: 'To add more layers to the network' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which of the following is a common activation function used in neural networks?',
        answers: [
          { id: '0', answer: 'Linear' },
          { id: '1', answer: 'ReLU (Rectified Linear Unit)' },
          { id: '2', answer: 'Gaussian' },
          { id: '3', answer: 'Sigmoid' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the main advantage of using convolutional layers in a neural network for image processing?',
        answers: [
          { id: '0', answer: 'They reduce the number of parameters' },
          { id: '1', answer: 'They increase the number of parameters' },
          { id: '2', answer: 'They improve the interpretability of the model' },
          { id: '3', answer: 'They make the model faster' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the purpose of using an autoencoder in unsupervised learning?',
        answers: [
          { id: '0', answer: 'To perform classification tasks' },
          { id: '1', answer: 'To learn a compressed representation of the input data' },
          { id: '2', answer: 'To perform regression tasks' },
          { id: '3', answer: 'To increase the dimensionality of the input data' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'In the context of clustering, what is the main difference between K-means and DBSCAN?',
        answers: [
          { id: '0', answer: 'K-means is a density-based algorithm, while DBSCAN is not' },
          { id: '1', answer: 'DBSCAN can find clusters of arbitrary shape, while K-means cannot' },
          { id: '2', answer: 'K-means requires the number of clusters to be specified, while DBSCAN does not' },
          { id: '3', answer: 'DBSCAN is a partitioning method, while K-means is not' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which of the following is a disadvantage of using decision trees?',
        answers: [
          { id: '0', answer: 'They are prone to overfitting' },
          { id: '1', answer: 'They require a lot of computational resources' },
          { id: '2', answer: 'They cannot handle categorical data' },
          { id: '3', answer: 'They are difficult to interpret' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What does the term "batch normalization" refer to in the context of neural networks?',
        answers: [
          { id: '0', answer: 'Normalizing the input data to the network' },
          { id: '1', answer: 'Normalizing the output data of the network' },
          { id: '2', answer: 'Normalizing the activations of the layers during training' },
          { id: '3', answer: 'Normalizing the weights of the network during training' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which of the following describes the vanishing gradient problem in deep learning?',
        answers: [
          { id: '0', answer: 'Gradients become very large, causing instability in training' },
          { id: '1', answer: 'Gradients become very small, slowing down the training process' },
          { id: '2', answer: 'Gradients oscillate between large and small values' },
          { id: '3', answer: 'Gradients remain constant, preventing learning' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'What is the role of the learning rate in training a neural network?',
        answers: [
          { id: '0', answer: 'To determine the size of the steps taken in the weight space during optimization' },
          { id: '1', answer: 'To control the number of layers in the network' },
          { id: '2', answer: 'To determine the number of epochs' },
          { id: '3', answer: 'To specify the batch size' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is a hyperparameter in machine learning?',
        answers: [
          { id: '0', answer: 'A parameter that is learned from the training data' },
          { id: '1', answer: 'A parameter that is set before the learning process begins' },
          { id: '2', answer: 'A parameter that adjusts automatically during training' },
          { id: '3', answer: 'A parameter that is fixed and does not change' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'In the context of ensemble learning, what is stacking?',
        answers: [
          { id: '0', answer: 'Combining multiple models to correct the errors of one another' },
          { id: '1', answer: 'Training multiple models in parallel and averaging their predictions' },
          { id: '2', answer: 'Training a sequence of models where each model corrects the errors of the previous one' },
          { id: '3', answer: 'Training multiple models and combining their predictions using another model' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What is tokenization in the context of natural language processing?',
        answers: [
          { id: '0', answer: 'The process of splitting text into individual words or phrases' },
          { id: '1', answer: 'The process of converting text into lowercase' },
          { id: '2', answer: 'The process of removing punctuation from text' },
          { id: '3', answer: 'The process of translating text into another language' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which of the following is a common method of tokenization?',
        answers: [
          { id: '0', answer: 'Character-level tokenization' },
          { id: '1', answer: 'Word-level tokenization' },
          { id: '2', answer: 'Subword tokenization' },
          { id: '3', answer: 'All of the above' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'What is the main challenge of word-level tokenization?',
        answers: [
          { id: '0', answer: 'Handling punctuation' },
          { id: '1', answer: 'Dealing with out-of-vocabulary words' },
          { id: '2', answer: 'Converting text to lowercase' },
          { id: '3', answer: 'Removing stopwords' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which tokenization method is commonly used in transformer models like BERT?',
        answers: [
          { id: '0', answer: 'Word-level tokenization' },
          { id: '1', answer: 'Character-level tokenization' },
          { id: '2', answer: 'Subword tokenization' },
          { id: '3', answer: 'Sentence-level tokenization' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What is a benefit of subword tokenization?',
        answers: [
          { id: '0', answer: 'It simplifies the tokenization process' },
          { id: '1', answer: 'It handles out-of-vocabulary words effectively' },
          { id: '2', answer: 'It reduces the size of the vocabulary' },
          { id: '3', answer: 'Both 1 and 2' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Which of the following algorithms is used for subword tokenization?',
        answers: [
          { id: '0', answer: 'WordPiece' },
          { id: '1', answer: 'Byte-Pair Encoding (BPE)' },
          { id: '2', answer: 'Unigram Language Model' },
          { id: '3', answer: 'All of the above' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'In tokenization, what is the purpose of using a delimiter?',
        answers: [
          { id: '0', answer: 'To join tokens together' },
          { id: '1', answer: 'To split text into tokens' },
          { id: '2', answer: 'To remove special characters from text' },
          { id: '3', answer: 'To identify named entities in text' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'How does character-level tokenization differ from word-level tokenization?',
        answers: [
          { id: '0', answer: 'Character-level tokenization splits text into individual characters' },
          { id: '1', answer: 'Word-level tokenization splits text into individual words' },
          { id: '2', answer: 'Character-level tokenization is faster than word-level tokenization' },
          { id: '3', answer: 'Both 0 and 1' },
        ],
        correctAnswer: '3',
      },
      {
        question: 'Which tokenization method is likely to result in the smallest vocabulary size?',
        answers: [
          { id: '0', answer: 'Character-level tokenization' },
          { id: '1', answer: 'Word-level tokenization' },
          { id: '2', answer: 'Subword tokenization' },
          { id: '3', answer: 'Sentence-level tokenization' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is the primary purpose of tokenization in text processing?',
        answers: [
          { id: '0', answer: 'To preprocess text for analysis and modeling' },
          { id: '1', answer: 'To remove irrelevant information from text' },
          { id: '2', answer: 'To convert text into numerical data' },
          { id: '3', answer: 'To translate text into different languages' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'What is overfitting in the context of machine learning?',
        answers: [
          { id: '0', answer: 'When a model performs well on training data but poorly on new, unseen data' },
          { id: '1', answer: 'When a model performs well on both training and test data' },
          { id: '2', answer: 'When a model performs poorly on both training and test data' },
          { id: '3', answer: 'When a model underfits the training data' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which technique is commonly used to prevent overfitting in neural networks?',
        answers: [
          { id: '0', answer: 'Increasing the number of hidden layers' },
          { id: '1', answer: 'Decreasing the learning rate' },
          { id: '2', answer: 'Using dropout regularization' },
          { id: '3', answer: 'Removing features from the dataset' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What is the role of cross-validation in preventing overfitting?',
        answers: [
          { id: '0', answer: 'To ensure the model is trained on more data' },
          { id: '1', answer: 'To assess the model’s performance on unseen data' },
          { id: '2', answer: 'To increase the complexity of the model' },
          { id: '3', answer: 'To reduce the dimensionality of the data' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Which of the following is a symptom of overfitting?',
        answers: [
          { id: '0', answer: 'High training accuracy and high test accuracy' },
          { id: '1', answer: 'Low training accuracy and low test accuracy' },
          { id: '2', answer: 'High training accuracy and low test accuracy' },
          { id: '3', answer: 'Low training accuracy and high test accuracy' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'What is the purpose of using a validation set in machine learning?',
        answers: [
          { id: '0', answer: 'To train the model' },
          { id: '1', answer: 'To test the model’s performance' },
          { id: '2', answer: 'To fine-tune the model’s hyperparameters' },
          { id: '3', answer: 'To reduce the size of the training dataset' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which regularization technique adds a penalty equal to the absolute value of the magnitude of coefficients to the loss function?',
        answers: [
          { id: '0', answer: 'L1 regularization' },
          { id: '1', answer: 'L2 regularization' },
          { id: '2', answer: 'Dropout regularization' },
          { id: '3', answer: 'Early stopping' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'How does increasing the amount of training data help in reducing overfitting?',
        answers: [
          { id: '0', answer: 'It makes the model simpler' },
          { id: '1', answer: 'It reduces the noise in the data' },
          { id: '2', answer: 'It helps the model generalize better' },
          { id: '3', answer: 'It decreases the computational cost' },
        ],
        correctAnswer: '2',
      },
      {
        question: 'Which method involves using a subset of the training data to stop training early to prevent overfitting?',
        answers: [
          { id: '0', answer: 'Cross-validation' },
          { id: '1', answer: 'Early stopping' },
          { id: '2', answer: 'Batch normalization' },
          { id: '3', answer: 'Data augmentation' },
        ],
        correctAnswer: '1',
      },
      {
        question: 'Why is it important to have a balance between bias and variance in a machine learning model?',
        answers: [
          { id: '0', answer: 'To ensure the model is neither too simple nor too complex' },
          { id: '1', answer: 'To maximize the training accuracy' },
          { id: '2', answer: 'To minimize the test accuracy' },
          { id: '3', answer: 'To avoid using regularization techniques' },
        ],
        correctAnswer: '0',
      },
      {
        question: 'Which technique involves generating additional training examples through random transformations of the existing data?',
        answers: [
          { id: '0', answer: 'Cross-validation' },
          { id: '1', answer: 'Early stopping' },
          { id: '2', answer: 'Data augmentation' },
          { id: '3', answer: 'Regularization' },
        ],
        correctAnswer: '2',
      },

    ],
  },
};

export default quizData;

// (?<=\s)(?<!(answer|question).*)\d
// "$0"
