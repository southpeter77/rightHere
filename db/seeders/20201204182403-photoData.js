'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Photos', [{
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_18gfZjyQF4wQFdiduNjaE9iaJJBWfj8-A&usqp=CAU',
        user_id: 1,
        post_id: null,
        place_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbc_OVzjTNxhG6DXrPazrYwYmYrTE0jB-cfQ&usqp=CAU',
        user_id: null,
        post_id: null,
        place_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RMomRhV9rV78Hszgbw_IaRlndjabm3ecxg&usqp=CAU',
        user_id: null,
        post_id: null,
        place_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4jb_efuIqADSPcItvpKsTsS5FAzW-HPcSg&usqp=CAU',
        user_id: null,
        post_id: null,
        place_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },
 
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Photos', null, {});

  }
};
