// MaxMSP Integration points.
// These should be kept global.
inlets = 2;
outlets = 4;

var octave = 36;

if (typeof module === 'undefined') {
  var module = {};
}

if (typeof console === 'undefined') {
  var console = { log: post};
}

module.exports = {
  note_in_key: function(tonality, degree) {
    var table;
    if(0 >= tonality) {
      table= [
        ["C", "D", "E", "F", "G", "A", "B"],
        ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        ["D", "E", "F#", "G", "A", "B", "C#"],
        ["Eb", "F", "G", "A", "Bb", "C", "D"],
        ["E", "F#", "G#", "A", "B", "C#", "D#"],
        ["F", "G", "A", "Bb", "C", "D", "E"],
        ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        ["G", "A", "B", "C", "D", "E", "F#"],
        ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        ["A", "B", "C#", "D", "E", "F#", "G#"],
        ["Bb", "C", "D", "Eb", "F", "G", "A"],
        ["B", "C#", "D#", "E", "F#", "G#", "A#"],
      ]
    } else {
      table = [
        ["C", "D", "E", "F", "G", "A", "B"],
        ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
        ["D", "E", "F#", "G", "A", "B", "C#"],
        ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
        ["E", "F#", "G#", "A", "B", "C#", "D#"],
        ["F", "G", "A", "Bb", "C", "D", "E"],
        ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
        ["G", "A", "B", "C", "D", "E", "F#"],
        ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
        ["A", "B", "C#", "D", "E", "F#", "G#"],
        ["A#", "B#", "C##", "D", "E", "F#", "G#"],
        ["B", "C#", "D#", "E", "F#", "G#", "A#"],
      ]
    }
    return table[Math.abs(tonality) % 12][degree % 7];
  }
}

function ionian(val) {
  let io = [0, 2, 4, 5, 7, 9, 11];
  val = Math.abs(val);
  val = val % 7;
  outlet(0, io[val] + octave);
}

function ionian_2oct(val) {
  var io = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23];
  val = Math.abs(val);
  val = val % 15;
  outlet(0, io[val] + octave);
}

function diatonic_triads(val) {
  var io = [
    [0, 4, 7],
    [2, 5, 9],
    [4, 7, 11],
    [5, 9, 12],
    [7, 11, 14],
    [9, 12, 16],
    [11, 14, 17],
  ];
  val = Math.abs(val);
  val = val % 7;

  for (var i = 0; i < 3; i++) {
    outlet(i, io[val][i] + octave);
  }
}

function diatonic_sevenths(val) {
  var io = [
    [0, 4, 7, 11],
    [2, 5, 9, 12],
    [4, 7, 11, 14],
    [5, 9, 12, 4],
    [7, 11, 2, 5],
    [9, 12, 4, 7],
    [11, 14, 5, 9],
  ];

  val = Math.abs(val);
  val = val % 7;

  for (var i = 0; i < 4; i++) {
    outlet(i, io[val][i] + octave);
  }
}

function diatonic_sevenths_circle(val) {
  var io = [
    [0, 4, 7, 11],
    [5, 9, 12, 4],
    [11, 14, 5, 9],
    [4, 7, 11, 14],
    [9, 12, 4, 7],
    [2, 5, 9, 12],
    [7, 11, 2, 5],
  ];

  val = Math.abs(val);
  val = val % 7;

  for (var i = 0; i < 4; i++) {
    outlet(i, io[val][i] + octave);
  }
}


// #transpose
function transpose_octave(val) {
  if (inlet == 1) {
    val = val % 8;
    octave = val * 12;
  }
}

//#pentatonic
function pentatonic(val) {
  var io = [0, 2, 4, 7, 9];
  val = Math.abs(val);
  val = val % 5;
  outlet(0, io[val] + octave);
}

function pentatonic_1(val) {
  var io = [2, 4, 5, 9, 11];
  val = Math.abs(val);
  val = val % 5;
  outlet(0, io[val] + octave);
}

function pentatonic_2(val) {
  var io = [4, 5, 7, 11, 14];
  val = Math.abs(val);
  val = val % 5;
  outlet(0, io[val] + octave);
}

function pentatonic_3(val) {
  var io = [5, 7, 9, 12, 4];
  val = Math.abs(val);
  val = val % 5;
  outlet(0, io[val] + octave);
}

function pentatonic_4(val) {
  var io = [7, 9, 11, 2, 5];
  val = Math.abs(val);
  val = val % 5;
  outlet(0, io[val] + octave);
}

//#arpeggios
function arpeggio_triad(chord, index) {
  var io = [
    [0, 4, 7],
    [2, 5, 9],
    [4, 7, 11],
    [5, 9, 12],
    [7, 11, 14],
    [9, 12, 16],
    [11, 14, 17],
  ];

  chord = Math.abs(chord);
  chord = chord % 7;

  index = Math.abs(index);
  index = index % 3;

  for (var i = 0; i < 4; i++) {
    outlet(i, io[chord][index] + octave);
  }
}

function full_range_arpeggio_triad(chord, index) {
  var transpose;
  var octaves;
  var io = [
    [0, 4, 7],
    [2, 5, 9],
    [4, 7, 11],
    [5, 9, 12],
    [7, 11, 14],
    [9, 12, 16],
    [11, 14, 17],
  ];

  chord = Math.abs(chord);
  chord = chord % 7;

  index = Math.abs(index);

  index = index % 30;

  octaves = (index / 3) - (((index % 3) / 3));

  transpose = 12 * octaves;

  outlet(0, io[chord][index % 3] + transpose);
}

function full_range_arpeggio_sevenths(chord, index) {
  var transpose;
  var octaves;
  var io = [
    [0, 4, 7, 11],
    [2, 5, 9, 12],
    [4, 7, 11, 14],
    [5, 9, 12, 16],
    [7, 11, 14, 17],
    [9, 12, 16, 19],
    [11, 14, 17, 21],
  ];

  chord = Math.abs(chord);
  chord = chord % 7;

  index = Math.abs(index);

  i = index % 4; // can only play notes of the chord

  index = index % 30;

  octaves = (index / 4) - (((index % 4) / 4));

  transpose = 12 * octaves;
  for (var i = 0; i < 4; i++) {
    outlet(i, io[chord][index % 4] + transpose);
  }
}

function dorian(val) {
  var io = [2, 4, 5, 7, 9, 11, 12];
  val = Math.abs(val);
  val = val % 7;
  outlet(0, io[val] + octave);
}

function dorian_2oct(val) {
  var io = [2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24];
  val = Math.abs(val);
  val = val % 15;
  outlet(0, io[val] + octave);
}

function note_in_key(tonality, degree) {
  outlet(0,module.exports.note_in_key(tonality, degree));
}