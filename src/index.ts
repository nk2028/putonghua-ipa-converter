import { char2pinyins, pinyin2ipaArray, tones2ipa } from './converter';

export function handleConvert() {
  if (char2pinyins == null || pinyin2ipaArray == null) {
    alert('Loading...');
  }

  const fragment = document.createDocumentFragment();
  const inputArea = <HTMLTextAreaElement>document.getElementById('inputArea');
  const text = inputArea.value;
  const schemeSelect = <HTMLSelectElement>document.getElementById('schemeSelect');
  const schemeNumber = parseInt(schemeSelect.value);

  [...text].forEach((char) => {
    const pinyins = char2pinyins.get(char);
    fragment.appendChild(document.createTextNode(char));
    if (pinyins != null) {
      const ipas = pinyins.map((pinyin) => {
        const pinyinWithoutTone = pinyin.slice(0, -1);
        const tone = parseInt(pinyin.slice(-1), 10);
        const ipaArray = pinyin2ipaArray.get(pinyinWithoutTone);
        return ipaArray[schemeNumber] + tones2ipa[tone][schemeNumber];
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
