var MusicGame = React.createClass({
  getInitialState: function() {
    return {
      value: 'c4',
      currentNote: null,
      notesGuessed: 0,
      guesses: 0
    };
  },
  getNote: function () {
    var highestNum = noteNameToNumber(this.props.highestNote);
    var lowestNum = noteNameToNumber(this.props.lowestNote);

    var noteNum = Math.random() * (highestNum - lowestNum + 1) | 0 + lowestNum;
    this.setState({ currentNote: noteNum });
    window.play(noteNum, 0, 1);
  },
  tryNote: function (event) {
    // var noteNum = Math.random() * 12 | 0 + 48;
    var noteNum = noteNameToNumber(event.target.text);

    if (noteNum == this.state.currentNote) {
      this.setState({currentNote: null});
      this.setState({ notesGuessed: this.state.notesGuessed + 1 });
      this.setState({ guesses: this.state.guesses + 1 });
    } else {
      this.setState({ guesses: this.state.guesses + 1 });
    }

    window.play(noteNum, 0, 1);
  },
  getKeys: function (currentNote) {
    var out = [];
    var black_key = {"backgroundImage": "linear-gradient(#000000, #222222, #555555)"};
    var white_key = {"backgroundImage": "linear-gradient(#AAAAAA, #EEEEEE, #FFFFFF)"};

    for (var i = noteNameToNumber(this.props.lowestNote); i <= noteNameToNumber(this.props.highestNote); i++) {


      var colored = noteNumberToName(i).indexOf("#") == -1 ? white_key : black_key;

      out.push(<a className="btn btn-sml btn-default" style={colored} disabled={currentNote ? "" : "disabled"}
        key={i} onClick={currentNote && this.tryNote}>{noteNumberToName(i)}</a>);
      if (i % 12 == 11) {
        out.push(<br key={i+0.5}/>)
      }
    }
    return out;
  },
  render: function () {
    var value = this.state.value;
    var log = this.state.log;
    return (
      <div>
        <h3>Music game!</h3>
        <div className="panel panel-default">
          <div className="panel-body">
            <p>Wow, a cool relative pitch training game!</p>
            <p>Press "give me a note" to get a note! Then, press buttons until you find the right note!</p>
          </div>
        </div>

        <p>Notes guessed: {this.state.notesGuessed}</p>
        <p>Guesses: {this.state.guesses}</p>

        {this.state.currentNote ? <button disabled="disabled"
          className="btn btn-primary">give me a note!</button>
         : <button
          onClick={this.getNote}
          className="btn btn-primary">give me a note!</button>}

        <p>{this.getKeys(this.state.currentNote)}</p>
      </div>
    );
  }
});


var noteNames = "c c# d d# e f f# g g# a a# b".split(" ");

var noteNameToNumber = function(name) {
  var noteName = name.slice(0, -1).toLowerCase();
  var noteNumber = parseInt(name[name.length - 1]);

  return noteNames.indexOf(noteName) + noteNumber * 12;
}

var noteNumberToName = function (number) {
  return noteNames[number % 12] + (number / 12 | 0);
}

$(function () {
  MIDI.loadPlugin({
    soundfontUrl: "./soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: function() {


      var delay = 0; // play one note every quarter second
      var note = 50; // the MIDI note
      var velocity = 127; // how hard the note hits
      // play the note
      MIDI.setVolume(0, 127);

      $("#stfu").on("click", function (e) {
        noteNum = Math.random() * 37 | 0 + 36;
        play(noteNum, 0, 1);
      });

      ReactDOM.render(<MusicGame lowestNote="c3" highestNote="c6"/>, document.getElementById("music-game"));
    }
  });
});




