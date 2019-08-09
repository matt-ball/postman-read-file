# Postman Read File

Read a local data file on a per request/folder level.

## Setup

Clone this repo. `npm i` then `node index.js`.

Add this snippet to the `Pre-Request Script` of your request or folder.

```
pm.sendRequest({
    url: `localhost:3000?path=/Users/matt/data.csv`,
    method: 'GET'
}, (err, res) => {
    res = res.json();
    pm.globals.set('file', JSON.stringify(res));
});
```

## Usage

Change the `path` parameter in the above snippet to point at the local file you'd like to read. If the file is a `.csv` extension, it'll automatically be converted to JSON. If it's already JSON, it'll come through exactly as authored.

The above snippet will set the entire file into a global Postman variable called `file`, but you can customize this to your hearts content.
