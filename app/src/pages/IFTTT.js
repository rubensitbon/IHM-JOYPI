import React, { useState } from 'react';
import './IFTTT.css';
import axios from 'axios';

export default function IFTTT() {
  const [ifComponent, setIfComponent] = useState('led');
  const [ifLabel, setIfLabel] = useState('state');
  const [ifValue, setIfValue] = useState('on');
  const [thenComponent, setThenComponent] = useState('buzzer');
  const [thenLabel, setThenLabel] = useState('sound');
  const [thenValue, setThenValue] = useState('true');

  const handleSubmit = () => {
    console.log('I CLICK ON SUBMIT');
    axios
      .post('http://localhost:9000/api/db-example/posts', {
        IF: {
          name: ifComponent,
          label: ifLabel,
          value: ifValue
        },
        THEN: {
          name: thenComponent,
          label: thenLabel,
          value: thenValue
        }
      })
      .then(function(response) {
        console.log('response', response);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  };

  return (
    <div className="IFTTT-container">
      <div className="IFTTT-header">IFTTT MODULE</div>
      <div className="IFTTT-body">
        <div className="IFTTT-condition">
          IF THIS
          <div className="IFTTT-input">
            <label>ComponentId</label>
            <input
              type="text"
              value={ifComponent}
              onChange={event => setIfComponent(event.target.value)}
            />
          </div>
          <div className="IFTTT-input">
            <label>LabelId</label>
            <input
              type="text"
              value={ifLabel}
              onChange={event => setIfLabel(event.target.value)}
            />
          </div>
          <div className="IFTTT-input">
            <label>value</label>
            <input
              type="text"
              value={ifValue}
              onChange={event => setIfValue(event.target.value)}
            />
          </div>
        </div>
        <div className="IFTTT-condition">
          THEN THAT
          <div className="IFTTT-input">
            <label>ComponentId</label>
            <input
              type="text"
              value={thenComponent}
              onChange={event => setThenComponent(event.target.value)}
            />
          </div>
          <div className="IFTTT-input">
            <label>LabelId</label>
            <input
              type="text"
              value={thenLabel}
              onChange={event => setThenLabel(event.target.value)}
            />
          </div>
          <div className="IFTTT-input">
            <label>value</label>
            <input
              type="text"
              value={thenValue}
              onChange={event => setThenValue(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="IFTTT-submit" onClick={handleSubmit}>
        AJOUTER
      </div>
    </div>
  );
}
