# Putonghua IPA Converter

Putonghua IPA Converter is an online tool for adding International Phonetic Alphabet (IPA) transcriptions to Chinese text. It preserves the original text and places the corresponding Putonghua pronunciation after each recognised Chinese character.

Use the converter at <https://nk2028.shn.hk/putonghua-ipa-converter/>.

## Features

- Supports both simplified and traditional Chinese characters.
- Preserves punctuation, spacing, and unrecognised characters.
- Includes tone marks in the IPA transcription.
- Shows alternative pronunciations when a character has more than one reading.
- Offers 11 transcription schemes for comparison.

## How to use

1. Enter or paste Chinese text into the text box.
2. Choose a transcription scheme from the menu.
3. Select **转换** to generate the IPA transcription.

The default option is the broad UntPhesoca transcription. Other schemes may represent the same pronunciation differently because they follow different analyses and conventions.

## Transcription schemes

The converter currently includes:

- UntPhesoca, broad and narrow transcriptions
- Standard Chinese (Beijing), broad and narrow transcriptions
- Hu Yushu, *Modern Chinese*
- Huang Borong and Liao Xudong, *Modern Chinese*
- Qian Nairong, *Modern Chinese*
- Wu Zongji
- Yuen Ren Chao, *A Grammar of Spoken Chinese*
- *Chinese Dialect Character Pronunciation List*
- 2075 Beijing phonology

## Notes

The converter annotates characters individually. It does not determine the intended pronunciation from sentence context, perform word segmentation, or apply tone sandhi. When a character has several recorded readings, all of them may be shown. The output should therefore be treated as a pronunciation reference rather than a complete phonetic analysis of connected speech.

If you notice an incorrect or missing transcription, please [open an issue](https://github.com/nk2028/putonghua-ipa-converter/issues).

## Licence

This project is released under the [MIT License](LICENSE).
