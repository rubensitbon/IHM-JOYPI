var express = require('express');
var router = express.Router();

/* Event Model
========================================================= 
JSON 
{
    "eventName": "IFFT1",
    "IF": [
        {
            "componentId": "movementSensor",
            "value": 1
        },
        {
            "componentId": "touch",
            "value": 1
        }
    ],
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
  IF.forEach(condition => {
    const value = fetchValue(condition);
    console.log('VALUE', value);
  });

  return res.send('added');
});

module.exports = router;

const fetchValue = ({ componentId, value }) => {
  console.log('componentId', componentId, 'value', value);
  var component = require(`../interface/${componentId}`);
  console.log('component', component);
  console.log('component.get(value)', component.get(value));

  return component.get(value);
};
