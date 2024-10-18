let dictionary = [];

document.getElementById('addWord').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    const word = document.getElementById('add-input').value.trim();

    if (word) {
        dictionary.push(word);
        document.getElementById('result').innerHTML = `<span class="text-success">"${word}" added to the dictionary!</span>`;
    }
    document.getElementById('add-input').value = ''; 
})

document.getElementById('searchWord').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const searchWord = document.getElementById('search-input').value.trim(); 

    if (searchWord) {
        if (dictionary.includes(searchWord)) {
            document.getElementById('result').innerHTML = `<span class="text-success">"${searchWord}" is in the dictionary!</span>`;
        } else {
            document.getElementById('result').innerHTML = `<span class="text-danger">"${searchWord}" is not in the dictionary.</span>`;
        }
    } else {
        document.getElementById('result').innerHTML = `<span class="text-danger">Please enter a word to search.</span>`;
    }
    document.getElementById('search-input').value = ''; 
});