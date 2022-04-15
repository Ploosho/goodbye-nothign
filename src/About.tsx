import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>{gameName}</i> is a remake of the word game{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>, which
        I think is based on the TV show <i>Lingo</i>.
      </p>
      <p>
        You get {maxGuesses} tries to guess a target word.
        <br />
        After each guess, you get Mastermind-style feedback.
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={5}
        cluedLetters={[
          { clue: Clue.Correct, letter: "p" },
          { clue: Clue.Absent, letter: "o" },
          { clue: Clue.Absent, letter: "d" },
          { clue: Clue.Absent, letter: "g" },
          { clue: Clue.Absent, letter: "y" },
        ]}
      />
      <p>
        <b>O</b> <b>D</b> <b>G</b> and <b>Y</b> aren't in the target word at all.
      </p>
      <p>
        <b className={"green-bg"}>P</b> is correct! The first letter is{" "}
        <b className={"green-bg"}>P</b>
        .<br />
        <strong>(There may still be a second R in the word.)</strong>
      </p>
      <p>
        <b className={"yellow-bg"}>D</b> occurs <em>elsewhere</em> in the target
        word.
        <br />
        <strong>(Perhaps more than once. 🤔)</strong>
      </p>
      <hr />
      <p>
        Let's try some different letters in our next guess:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={5}
        cluedLetters={[
          { clue: Clue.Absent, letter: "f" },
          { clue: Clue.Correct, letter: "l" },
          { clue: Clue.Absent, letter: "a" },
          { clue: Clue.Correct, letter: "s" },
          { clue: Clue.Correct, letter: "h" },
        ]}
        annotation={"So close!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={5}
        cluedLetters={[
          { clue: Clue.Correct, letter: "p" },
          { clue: Clue.Correct, letter: "l" },
          { clue: Clue.Correct, letter: "u" },
          { clue: Clue.Correct, letter: "s" },
          { clue: Clue.Correct, letter: "h" },
        ]}
        annotation={"Got it!"}
      />
      <p>
        Report issues{" "}
        <a href="https://github.com/Ploosho/goodbye-nothign/issues">here</a>
      </p>
      <p>
        This game will be free and ad-free forever.
      </p>
    </div>
  );
}
