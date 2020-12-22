const router = require('express').Router();

const routes = ['users','posts', 'places', 'comments','photos', 'likes','relationships', 'search', 'chats'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
