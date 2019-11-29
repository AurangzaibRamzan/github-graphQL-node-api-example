const fetch = require('isomorphic-fetch');
const query = require('./query');
const githubApiKey = require('./config');

const githubApiLink = 'https://api.github.com/graphql';
fetch(githubApiLink, {
  method: 'post',
  headers: {
    Authorization: `bearer ${githubApiKey}`,
  },
  body: JSON.stringify({
    query: query,
  }),
}).then(function (data) {
  data.json().then(function (data) {
    data.data.viewer.pinnedItems.edges.forEach((element, index) => {
      console.log(index, element.node.name)
    });
  })
}).catch(function (e) {
  console.log(e);
})