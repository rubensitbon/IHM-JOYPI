var express = require('express');
var router = express.Router();
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

/* Event Model
========================================================= 
JSON 
{
    "eventName": "IFFT1",
    "IF": {
        "componentId": "ultrasoundSensor",
        "value": 1
    },
    "THEN": [
        {
            "componentId": "LED1",
            "value": 1
        },
        {
            "componentId": "SCREEN",
            "value": "Ça touche"
        }
    ]
}


========================================================= 
*/

/* add an Event
========================================================= */
router.post('/add', async (req, res) => {
  console.log('req.body.eventName', req.body.eventName);
  console.log('req.body.IF', req.body.IF);
  console.log('req.body.THEN', req.body.THEN);
  const { IF, THEN } = req.body;
  const value = fetchValue(IF);
  console.log('VALUE', value);

  console.log('BEFORE ADD EVENT');

  eventEmitter.on('event', function(a, b) {
    console.log(a, b, this, this === eventEmitter);
  });
  console.log('AFTER ADD EVENT');

  return res.send('added');
});

router.post('/throw', async (req, res) => {
  console.log('req.body', req.body);
  console.log('req.body.eventName', req.body.eventName);

  eventEmitter.emit('event', 'a', 'b');

  return res.send('throw');
});

router.get('/list', async (req, res) => {
  console.log(eventEmitter.eventNames());

  return res.send(`List ${eventEmitter.eventNames()}`);
});

module.exports = router;

const fetchValue = ({ componentId, value }) => {
  console.log('componentId', componentId, 'value', value);
  var component = require(`../interface/${componentId}`);
  console.log('component', component);
  console.log('component.get(value)', component.get(value));

  return component.get(value);
};
