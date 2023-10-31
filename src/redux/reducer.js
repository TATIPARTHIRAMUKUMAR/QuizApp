import * as types from "./actionTypes.js";

const initialState = {
  // authActions
  loggedIn: true,
  userId: null,
  quizList:[],
  quizView:{},
  lessonsList:[],
  lessonView:{},
  usersList:[],
  userStats:{},
  adminStats:{}
};

const DataReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loggedIn:  action?.payload?.userId && true,
        userCred: action?.payload,
      };
      case types.QUIZ_LIST:
        return {
          ...state,
          quizList:action?.payload
        }
      case types.LESSON_LIST :
        {
          return {
            ...state,
            lessonsList:action?.payload?.data
          }
        }
        case types.LESSON_VIEW :
        {
          return {
            ...state,
            lessonView:action?.payload?.data
          }
        }
        case types.QUIZ_DATA :
        {
          return {
            ...state,
            quizView:action?.payload
          }
        }
        case types.USERS_LIST :
        {
          return {
            ...state,
            usersList:action?.payload
          }
        }
        case types.USER_STATS :
          {
            return {
              ...state,
              userStats:action?.payload
            }
          }
          case types.ADMIN_STATS :
          {
            return {
              ...state,
              adminStats:action?.payload
            }
          }
    default:
      return state;
  }
};
export default DataReducers;
