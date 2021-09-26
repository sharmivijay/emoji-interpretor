import { useState } from "react";
import "./styles.css";

export default function App() {
  var fruitsDictionary = {
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach"
  };

  var [fruitName, setFruitName] = useState("");
  const keyList = Object.keys(fruitsDictionary);

  function callOnChangeEvent(event) {
    var userInput = event.target.value;
    var outputKey = "";

    if (userInput in fruitsDictionary) {
      outputKey = fruitsDictionary[userInput];
    } else {
      outputKey = Object.keys(fruitsDictionary).find(
        (key) => fruitsDictionary[key] === userInput
      );
    }
    if (userInput === "") {
      outputKey = "";
    } else {
      if (outputKey === undefined) {
        outputKey = "Not in database";
      }
    }
    setFruitName(outputKey);
  }

  function emojiHandler(emoji) {
    setFruitName(fruitsDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>I like Fruits .. Do you ?</h1>
      <input onChange={callOnChangeEvent} className="input" />
      <div className="output"> {fruitName}</div>
      <div>
        {keyList.map((key) => {
          return (
            <li>
              <button className="btn-emoji" onClick={() => emojiHandler(key)}>
                {key}
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
