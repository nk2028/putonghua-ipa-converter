export let char2pinyins: Map<string, string[]>;

fetch('data/pinyin.txt')
.then((resonse) => resonse.text())
.then((text) => char2pinyins = processPinyinData(text));

function processPinyinData(text: string) {
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

export let pinyin2ipaArray: Map<string, string[]>;

fetch('data/ipa.csv')
.then((resonse) => resonse.text())
.then((text) => pinyin2ipaArray = processIPAData(text));

function processIPAData(text: string) {
  const map = new Map();
  for (const line of text.split('\n').slice(1)) {
    if (line.length > 0) {
      const parts = line.split(',');
      const pinyin = parts[0];
      const ipaArray = parts.slice(1);
      map.set(pinyin, ipaArray);
    }
  }
  return map;
}

export const tones2ipa = [
  ',,,,,,,,,,'.split(','),
  '˥,˥,˥,˥,˥,˥,˥,˥,˥,˥,˥'.split(','),
  '˧˦,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥,˧˥'.split(','),
  '˨˩,˨˩˦,˨˩˦,˨˩˧,˨˩˧,˨˩˦,˨˩˦,˨˩˦,˨˩˦,˨˩˦,˨˩˦'.split(','),
  '˥˧,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩,˥˩'.split(','),
];
