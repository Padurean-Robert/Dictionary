let dictionary = [];

function addWord() {
    const word = document.getElementById('word-input').value.trim(); 
    if (word) {
        if (!dictionary.includes(word)) {
            dictionary.push(word);
            document.getElementById('result').innerHTML = `<span class="text-success">"${word}" added to the dictionary!</span>`;
        } else {
            document.getElementById('result').innerHTML = `<span class="text-warning">"${word}" is already in the dictionary.</span>`;
        }
    } else {
        document.getElementById('result').innerHTML = `<span class="text-danger">Please enter a word to add.</span>`;
    }
    document.getElementById('word-input').value = '';
}

function searchWord() {
        const searchWord = document.getElementById('word-input').value.trim();
  if (searchWord) {
    if (dictionary.includes(searchWord)) {
      document.getElementById('result').innerHTML = `<span class="text-success">"${searchWord}" is in the dictionary!</span>`;
    } else {
      document.getElementById('result').innerHTML = `<span class="text-danger">"${searchWord}" is not in the dictionary.</span>`;
    }
  } else {
    document.getElementById('result').innerHTML = `<span class="text-danger">Please enter a word to search.</span>`;
  }
  document.getElementById('word-input').value = '';
}
