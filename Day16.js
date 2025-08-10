//Day16 of 100days challenge
//Counts occurrences of any anagram of pat within txt using pure brute-force logic.
function countAnagramsSimple(txt, pat) {
  const n = txt.length, m = pat.length;
  let count = 0;
  for (let i = 0; i <= n - m; i++) {
    const freq = Array(26).fill(0);
    for (let j = 0; j < m; j++) {
      freq[pat.charCodeAt(j) - 97]++;
      freq[txt.charCodeAt(i + j) - 97]--;
    }
    let match = true;
    for (let k = 0; k < 26; k++) {
      if (freq[k] !== 0) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }
  return count;
}
console.log(countAnagramsSimple("forxxorfxdofr","for"));
