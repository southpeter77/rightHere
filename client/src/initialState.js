export const initialState = {
  entities: {
    posts: {
      byId: {
        id: null,
        name: null,
        description: null,
        coordinates: null,
        user_id: null,
        place_id: null,
        Photos: [],
        Place: {
          id: null,
          name: null,
          description: null,
          user_id: null
        },
        User: {
          id: null,
          biography: null,
          firstName: null,
          lastName: null,
          email: null,
          Photos: []
        }

      },
      allId: []
    },
    places: {
      byId: {
        id: null,
        name: null,
        coordinates: {},
        User: {
          id: null,
          firstName: null,
          lastName: null,
          email: null,
          biography: null,
          Photos: []
        },
        photos: [],
        posts: []
      },

      allId: []
    }
  },
  errors: {
    loginErrors: [],
    signUpErrors: [],
  }
}