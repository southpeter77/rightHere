export const initialState = {
  entities: {
    //////////////////////////////
    place: {
      byId: {
        id: "",
        name: "",
        coordinates: {},
        User: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          biography: "",
          Photos: [{
            id: '',
            url: ''
          }]
        },
        photos: [],
        posts: [{
          id: "",
          name: "",
          description: "",
          coordinates: "",
          user_id: "",
          place_id: "",
          Photos: [{
            id: '',
            url: ''
          }],
          User: {
            id: "",
            biography: "",
            firstName: "",
            lastName: "",
            email: "",
            Photos: [{
              id: "",
              name: "",
              url: ""
            }]
          }
        }]
      },
      allId: []
    },
    ///////////////////////////
    comments:{
      byId:{
        commentId:{
          id:'',
          post_id:'',
          user_id:'',
          description:'',
          createdAt: '',
          User:{
            id:'',
            biography:'',
            firstName:'',
            lastName:'',
            email:'',
            Photos:[{
              url:''
            }]
          }
        }
      },
      allId: []
    },

    ////////////////////////////
    posts: {
      byId: {
        postsId:{
        id: "",
        name: "",
        description: "",
        coordinates: "",
        user_id: "",
        place_id: "",
        Photos: [{url:""}],
        Places: {
          id: "",
          name: "",
          description: "",
          user_id: ""
        },
        User: {
          id: "",
          biography: "",
          firstName: "",
          lastName: "",
          email: "",
          Photos: [{url:""}]
        }

      }
    },
      allId: []
    },
    places: {
      byId: {
        id: "",
        name: "",
        coordinates: {},
        User: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          biography: "",
          Photos: [{
            id: '',
            url: ''
          }]
        },
        photos: [],
        posts: [{
          id: "",
          name: "",
          description: "",
          coordinates: "",
          user_id: "",
          place_id: "",
          Photos: [{
            id: '',
            url: ''
          }],
          User: {
            id: "",
            biography: "",
            firstName: "",
            lastName: "",
            email: "",
            Photos: [{
              id: "",
              name: "",
              url: ""
            }]
          }
        }]
      },

      allId: []
    }
  },


  errors: {
    loginErrors: [],
    signUpErrors: [],
  },
  sessions: {
    currentToken: "",
    currentUser: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      biography: '',
      posts: [],
      places: [],
      photos: [{
        id: '',
        name: '',
        url: ''
      }]
    },
    currentLocation: {
      id: '',
      name: '',
      coordinates: '',
      description: '',
      user_id: ''
    }
  }
}