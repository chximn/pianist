var fs = require('fs');
var Midi = require('jsmidgen');

var file = new Midi.File();
var track = new Midi.Track();
file.addTrack(track);


let flag = "HackINI{7h3-7hIn65-1-d0-F0E-l0v3}"


let notes = ['X', 'C', 'D', 'E', 'F', 'F#', 'G#', 'B']

let str = ''

let i = 0
for (let c of flag) {

	let oct = c.charCodeAt(0).toString(8)
	if (oct.length == 1) oct = '00' + oct
	else if (oct.length == 2) oct = '0' + oct


	for (let d of oct) {
		let note = notes[parseInt(d)].toLowerCase() + '5'

		if (d != 0) {
			track.addNote(0, note, 64, i * 64)
			str += note + ' '
		}

		else str += '__ '

		i++
	}
}


fs.writeFileSync('arabic.mid', file.toBytes(), 'binary');
console.log(str)
