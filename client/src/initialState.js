export const initialState = {
  entities: {
    posts: {
      byId: {
        id: "",
        name: "",
        description: "",
        coordinates: "",
        user_id: "",
        place_id: "",
        Photos: [],
        Place: {
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
          Photos: []
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
            id:'',
            url:''
          }]
        },
        photos: [],
        posts: [{
          id: "",
          name:"",
          description: "",
          coordinates:"",
          user_id: "",
          place_id:"",
          Photos:[{
            id:'',
            url:''
          }],
          User:{
            id:"",
            biography: "",
            firstName:"",
            lastName:"",
            email:"",
            Photos:[{
              id:"",
              name:"",
              url:""
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
  sessions:{
    currentToken:"",
    currentUser:{
      id:'',
      email:'',
      firstName:'',
      lastName:'',
      biography:'',
      posts:[],
      places:[],
      photos:[{
        id:'',
        name:'',
        url:''
      }]
    },
    currentLocation:{
      id:'',
      name:'',
      coordinates:'',
      description:'',
      user_id:''
    }
  }
}