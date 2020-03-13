const pigpio = require('pigpio');
const Gpio = pigpio.Gpio;

const outPin = 26;
const output = new Gpio(outPin, {mode: Gpio.OUTPUT});


// Function to get values from the board (get the output)
function get() {
  return 1;
}

// scp  ./Ruben/*  pi@172.24.1.1:/home/pi/Desktop/serveur_ihm/IHM-JOYPI/server/components/speaker/

// curl -d '{"note":"A"}' -H "Content-Type: application/json" -X POST http://localhost:9000/api/speaker

// curl -d '{"note":"A"}' -H "Content-Type: application/json" -X POST http://172.24.1.1:9000/api/speaker

// NEW

// localhost
// curl 'http://localhost:9000/api/speaker' -H 'Connection: keep-alive' -H 'Accept: application/json' -H 'Sec-Fetch-Dest: empty' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36' -H 'Content-Type: application/json' -H 'Origin: http://localhost:3000' -H 'Sec-Fetch-Site: same-site' -H 'Sec-Fetch-Mode: cors' -H 'Referer: http://localhost:3000/' -H 'Accept-Language: fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6' --data-binary '{"note":"A"}' --compressed
// depuis pc
// curl 'http://172.24.1.1:9000/api/speaker' -H 'Connection: keep-alive' -H 'Accept: application/json' -H 'Sec-Fetch-Dest: empty' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36' -H 'Content-Type: application/json' -H 'Origin: http://localhost:3000' -H 'Sec-Fetch-Site: same-site' -H 'Sec-Fetch-Mode: cors' -H 'Referer: http://localhost:3000/' -H 'Accept-Language: fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6' --data-binary '{"note":"A"}' --compressed

// Function to interact with Input values of the board
function post(note) {
	console.log(note);
	var freq;
	switch(note) {
	  case "C":
	    freq = 262;
	    break;
	  case "C#":
	    freq = 277;
	    break;
	  case "D":
	    freq = 294;
	    break;
	  case "D#":
	    freq = 311;
	    break;
	  case "E":
	    freq = 330;
	    break;
	  case "F":
	    freq = 349;
	    break;
	  case "F#":
	    freq = 370;
	    break;
	  case "G":
	    freq = 392;
	    break;
	  case "G#":
	    freq = 415;
	    break;
	  case "A":
	    freq = 440;
	    break;
	  case "A#":
	    freq = 466;
	    break;
	  case "B":
	    freq = 494;
	    break;
	  default:
	    freq = 0;
	} 

	if (freq != 0)
	{
		var halfPeriod = Math.floor(500000 / freq);

		pigpio.waveClear();

		let waveform = [];
		waveform.push({ gpioOn: outPin, gpioOff: 0, usDelay: halfPeriod});
		waveform.push({ gpioOn: 0, gpioOff: outPin, usDelay: halfPeriod});
		pigpio.waveAddGeneric(waveform);
		let waveId = pigpio.waveCreate();

		if (waveId >= 0)
		{
		  pigpio.waveTxSend(waveId, pigpio.WAVE_MODE_REPEAT);
		}

		setTimeout(function()
		{
			pigpio.waveTxStop();
			// pigpio.waveDelete(waveId);
			pigpio.waveClear();
			output.digitalWrite(0);
		}
		, 250); 
		return {"status":"success"};
	}
	else
	{
		return {"status":"fail"};
	}

}

// Syntax to export functions
module.exports = {
  get,
  post
};