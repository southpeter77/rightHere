const router = require('express').Router();

const routes = ['users','posts', 'places', 'comments'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
