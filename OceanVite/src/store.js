import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userDetailsReducer,
  userProfileUpdateReducer,
  userRegisterReducer,
  userloginReducer,
} from "./reducers/userReducers";
import { bookListReducer } from "./reducers/bookReducers";
import { cartReducer } from "./reducers/cartReducers";

const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  userLogin: { userInfo: userLoginFromStorage },
};

const reducer = combineReducers({
  userLogin: userloginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userProfileUpdateReducer,

  bookList: bookListReducer,
  cartReducer: cartReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
