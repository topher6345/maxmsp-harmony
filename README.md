maxmsp-harmony
==============

A javascript object in max-msp to do diatonic harmony. ES6 Support via Babel.

### To Install

`yarn`

### To Build

`yarn run build`

### To open Max

`yarn run max`



# Usage

### Max/MSP messages:

* `transpose_octave $1 ` Sets global root note


* `diatonic_sevenths $1`
* `diatonic_sevenths_circle $1`
* `diatonic_triads $1`
* `dorian $1`
* `ionian $1`
* `ionian_2oct $1`
* `pentatonic $1`
* `pentatonic_1`
* `pentatonic_2`
* `pentatonic_3`
* `full_range_arpeggio_sevenths $1 $2` (ignores transpose_octave)
* `full_range_arpeggio_triad $1 $2` (ignores transpose_octave)
* `arpeggio_triad $1 $2` (ignores transpose_octave)



