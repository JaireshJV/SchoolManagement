import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURLS } from "src/api/urls";
import { baseRequest } from "@request/request";

const initialState = {
  notification: [],
  appointmentnotify:[],
  billernotify:[],
  healthcarenotify:[],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// == Notification  ==============

export const notificationGet = createAsyncThunk("notifications/get", async () => {
  try {
    const notification = "notificationDetails";
    const response = await baseRequest.get(`${APIURLS.NOTIFICATION_GET}`, {
      params: { notification },
    });
    return [...response.data];
  } catch (error) {
    console.log(error);
  }
});


// == Appointment Notification  ==============

export const appointmentNotify = createAsyncThunk("appointmentnotifications/get", async () => {
  try {
    const notification = "appointment";
    const response = await baseRequest.get(`${APIURLS.APPOINTMENT_NOTIFICATION_GET}`, {
      params: { notification },
    });
    return [...response.data];
  } catch (error) {
    console.log(error, "notificationnns");
  }
});


// == Billing Notification  ==============

export const billingNotify = createAsyncThunk("billingnotifications/get", async () => {
  try {
    const notification = "biller";
    const response = await baseRequest.get(`${APIURLS.BILLING_NOTIFICATION_GET}`, {
      params: { notification },
    });
    return [...response.data];
  } catch (error) {
    console.log(error, "notificationnns");
  }
});

// == HealthCare Notification  ==============

export const healthcareNotify = createAsyncThunk("healthcarenotifications/get", async () => {
  try {
    const notification = "health";
    const response = await baseRequest.get(`${APIURLS.HEALTHCARE_GET}`, {
      params: { notification },
    });
    return [...response.data];
  } catch (error) {
    console.log(error, "notificationnns");
  }
});




const NotificationSlice = createSlice({
  name: "Notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Notification

      .addCase(notificationGet.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(notificationGet.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notification = action.payload;
      })
      .addCase(notificationGet.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Appointment

      .addCase(appointmentNotify.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(appointmentNotify.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.appointmentnotify = action.payload;
      })
      .addCase(appointmentNotify.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Billing

      .addCase(billingNotify.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(billingNotify.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.billernotify = action.payload;
      })
      .addCase(billingNotify.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

         // Healthcare

         .addCase(healthcareNotify.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(healthcareNotify.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.healthcarenotify = action.payload;
        })
        .addCase(healthcareNotify.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
  

     
  },
});

// DayBook

export const AllNotifications = (state) => state.alertnotification.notification;
export const getNotificationsStatus = (state) => state.alertnotification.status;
export const getNotificationsError = (state) => state.alertnotification.error;

// Appointment

export const AllAppointmentNotifications = (state) => state.alertnotification.appointmentnotify;
export const getAppointmentNotificationsStatus = (state) => state.alertnotification.status;
export const getAppointmentNotificationsError = (state) => state.alertnotification.error;

// Billing

export const AllBillingNotifications = (state) => state.alertnotification.billernotify;
export const getBillingNotificationsStatus = (state) => state.alertnotification.status;
export const getBillingNotificationsError = (state) => state.alertnotification.error;

// Healthcare

export const AllHealthCareNotifications = (state) => state.alertnotification.healthcarenotify;
export const getHealthCareNotificationsStatus = (state) => state.alertnotification.status;
export const getHealthCareNotificationsError = (state) => state.alertnotification.error;



export const { reducer } = NotificationSlice;

export default NotificationSlice.reducer;
