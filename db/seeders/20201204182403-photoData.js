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
      },{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrQtq9y5qqW32kJbmoQ-4NkZoJbr16TReMQ&usqp=CAU',
        user_id: null,
        post_id: 1,
        place_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUqQGnhb6Qkz__5Gh_iZPDDSGf_GojnQomg&usqp=CAU',
        user_id: null,
        post_id: 2,
        place_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTEEu39kYTJdRLZP1C3EKGz9xWbfPvxYRbw&usqp=CAU',
        user_id: null,
        post_id: 3,
        place_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfGgOAfmuL2ASC1EAgj9v7NEkthgzh8f4UA&usqp=CAU',
        user_id: null,
        post_id: 4,
        place_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv_Yv0TSydkToe3l6JjK5tuX88hkaeWvdsg&usqp=CAU',
        user_id: null,
        post_id: 5,
        place_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP93ENz-ikvzNk8Tt53nbVfFJmNRCN4SyjTeQISRi1rdqQiP8JrOeR4ogUaJssvCUyFpKhF765RRynbGaQN0v8Ohof-cd6008o3g&usqp=CAU&ec=45732300',
        user_id: null,
        post_id: null,
        place_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2J-FBcpFlzGZud1bZ2jbL6VPa_RWq-Odbg&usqp=CAU',
        user_id: null,
        post_id: null,
        place_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96taey3VppyXrD9CCMd4pWLNb72xkSf3bPQ&usqp=CAU',
        user_id: null,
        post_id: null,
        place_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywddaQU6mr4Epys6Y_d4yZSa6DveoLH2L4w&usqp=CAU',
        user_id: null,
        post_id: null,
        place_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});
    
  },
 
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Photos', null, {});

  }
};
