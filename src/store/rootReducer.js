import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@modules/Auth/authSlice";
import NotificationReducers from '@modules/AlertNotification/NotificationSlice'



import DashboardMainReducers from '@modules/Dashboard/Dashboard/DashboardMainSlice'

const initialState = {
  auth: {}, 
};

const appReducer = combineReducers({
  auth: authReducer,
  alertnotification:NotificationReducers,
  DashboardMain:DashboardMainReducers,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logOut') {
    state = initialState;
  }
  return appReducer(state, action);
};

export default rootReducer;