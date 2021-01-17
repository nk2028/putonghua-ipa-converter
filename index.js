// Converter

let char2pinyins;

fetch('pinyin.txt')
.then((resonse) => resonse.text())
.then((text) => char2pinyins = processPinyinData(text));

function processPinyinData(text) {
  const map = new Map();
  for (const line of text.split('\n').slice(1)) {
    if (line.length > 0) {
      const singleCharacters = [...line];
      const char = singleCharacters[0];
      const pinyins = singleCharacters.slice(1).join('').split(',');
      map.set(char, pinyins);
    }
  }
  return map;
}

let pinyin2ipaObject;

fetch('ipa.csv')
.then((resonse) => resonse.text())
.then((text) => pinyin2ipaObject = processIPAData(text));

function processIPAData(text) {
  const map = new Map();
  for (const line of text.split('\n').slice(1)) {
    if (line.length > 0) {
      const parts = line.split(',');
      const pinyin = parts[0];
      const ipaObject = parts.slice(1);
      map.set(pinyin, ipaObject);
    }
  }
  return map;
}

const tones2ipa = [
  ',,,,,,,,,,'.split(','),
  '˥,˥,˥,˥,˥,˥,˥,˥,˥,˥,˥'.split(','),
  '˧˦,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥'.split(','),
  '˨˩,˨˩˦,˨˩˦,˨˩˧,˨˩˧,˨˩˦,˨˩˦,˨˩˦,˨˩˦,˨˩˦,˨˩˦'.split(','),
  '˥˧,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩'.split(','),
];

// App

function handleConvert() {
  if (char2pinyins == null || pinyin2ipaObject == null) {
    alert('Loading...');
  }

  const fragment = document.createDocumentFragment();
  const text = document.getElementById('inputArea').value;
  const schemeNumber = parseInt(document.getElementById('schemeSelect').value);

  [...text].forEach((char) => {
    const pinyins = char2pinyins.get(char);
    fragment.appendChild(document.createTextNode(char));
    if (pinyins != null) {
      const ipas = pinyins.map((pinyin) => {
        const pinyinWithoutTone = pinyin.slice(0, -1);
        const tone = parseInt(pinyin.slice(-1), 10);
        const ipaObject = pinyin2ipaObject.get(pinyinWithoutTone);
        return ipaObject[schemeNumber] + tones2ipa[tone][schemeNumber];
      }).join('/');
      const span = document.createElement('span');
      span.lang = 'cmn-Latn-fonipa';
      span.innerText = ipas;
      fragment.appendChild(document.createTextNode('('));
      fragment.appendChild(span);
      fragment.appendChild(document.createTextNode(')'));
    }
  });
  const outputArea = document.getElementById('outputArea');
  outputArea.innerHTML = '';
  outputArea.appendChild(fragment);
}
