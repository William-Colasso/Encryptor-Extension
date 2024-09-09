document
  .getElementById("copy")
  .addEventListener("click", () => copy("output", "copy"));

document.getElementById("button").addEventListener("click", generateKey);

function copy(id, button) {
  var output = document.getElementById(id).value;
  var copy = document.getElementById(button);
  try {
    navigator.clipboard.writeText(output);
    copy.innerText = "Copied!";
    copy.style.color = "white";

    setTimeout(async () => {
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          copy.innerHTML = "Copy";
          copy.style.color = "#12a525";
        } else if (document.visibilityState === "visible") {
        }
      });
    }, 300);
  } catch (err) {
    console.error("Copying Error" + err);
  }
}

async function generateKey() {
  var output = document.getElementById("output");
  var length = document.getElementById("length").value;
  var options = document.getElementsByName("options");
  var endText = "";
  if (length > 100000) {
    alert("Min length:1, Max length: 100000.");
    length = 100000;
  }

  const CharMap = {
    // Uppercase Letters
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",

    // Lowercase Letters
    27: "a",
    28: "b",
    29: "c",
    30: "d",
    31: "e",
    32: "f",
    33: "g",
    34: "h",
    35: "i",
    36: "j",
    37: "k",
    38: "l",
    39: "m",
    40: "n",
    41: "o",
    42: "p",
    43: "q",
    44: "r",
    45: "s",
    46: "t",
    47: "u",
    48: "v",
    49: "w",
    50: "x",
    51: "y",
    52: "z",

    // Numbers
    53: "0",
    54: "1",
    55: "2",
    56: "3",
    57: "4",
    58: "5",
    59: "6",
    60: "7",
    61: "8",
    62: "9",

    // Special Characters
    63: "!",
    64: "@",
    65: "#",
    66: "$",
    67: "%",
    68: "^",
    69: "&",
    70: "*",
    71: "(",
    72: ")",
    73: "-",
    74: "_",
    75: "=",
    76: "+",
    77: "[",
    78: "]",
    79: "{",
    80: "}",
    81: "|",
    82: "\\",
    83: ":",
    84: ";",
    85: '"',
    86: "'",
    87: "<",
    88: ">",
    89: ",",
    90: ".",
    91: "?",
    92: "/",
    93: "`",
    94: "~",
  };

  const HashNoNumber = {
    // Uppercase Letters
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",

    // Lowercase Letters
    27: "a",
    28: "b",
    29: "c",
    30: "d",
    31: "e",
    32: "f",
    33: "g",
    34: "h",
    35: "i",
    36: "j",
    37: "k",
    38: "l",
    39: "m",
    40: "n",
    41: "o",
    42: "p",
    43: "q",
    44: "r",
    45: "s",
    46: "t",
    47: "u",
    48: "v",
    49: "w",
    50: "x",
    51: "y",
    52: "z",

    // Special Characters
    53: "!",
    54: "@",
    55: "#",
    55: "$",
    57: "%",
    58: "^",
    59: "&",
    60: "*",
    61: "(",
    62: ")",
    63: "-",
    64: "_",
    65: "=",
    66: "+",
    67: "[",
    68: "]",
    69: "{",
    70: "}",
    71: "|",
    72: "\\",
    73: ":",
    74: ";",
    75: '"',
    76: "'",
    77: "<",
    78: ">",
    79: ",",
    80: ".",
    81: "?",
    82: "/",
    83: "`",
    84: "~",
  };

  if (options[0].checked && !options[1].checked && !options[2].checked) {
    for (let i = 0; i < length; i++) {
      endText += CharMap[getRandomInteger(1, 52)];
    }
  } else if (!options[0].checked && options[1].checked && !options[2].checked) {
    for (let i = 0; i < length; i++) {
      endText += CharMap[getRandomInteger(53, 62)];
    }
  } else if (!options[0].checked && !options[1].checked && options[2].checked) {
    for (let i = 0; i < length; i++) {
      endText += CharMap[getRandomInteger(63, 94)];
    }
  } else if (options[0].checked && options[1].checked && !options[2].checked) {
    for (let i = 0; i < length; i++) {
      endText += CharMap[getRandomInteger(1, 62)];
    }
  } else if (options[0].checked && !options[1].checked && options[2].checked) {
    for (let i = 0; i < length; i++) {
      endText += HashNoNumber[getRandomInteger(2, 83)];
    }
  } else if (!options[0].checked && options[1].checked && options[2].checked) {
    for (let i = 0; i < length; i++) {
      endText += CharMap[getRandomInteger(53, 94)];
    }
  } else if (options[0].checked && options[1].checked && options[2].checked) {
    for (let i = 0; i < length; i++) {
      endText += CharMap[getRandomInteger(1, 94)];
    }
  }
  output.innerText = endText;
}
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();

  const checked = Boolean(JSON.parse(localStorage.getItem("value")));

  if (checked) {
    const userInput = document.getElementById("output").value;
    const currentDate = new Date().toLocaleString();

    const entry = {
      date: currentDate,
      input: userInput,
    };

    // Salvar dados no localStorage
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(entry);
    localStorage.setItem("data", JSON.stringify(data));
  }

  // Adiciona a nova entrada à tabela

  window.onload();
});
