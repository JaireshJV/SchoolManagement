import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIURLS } from "src/api/urls";
import { baseRequest } from "@request/request";

const initialState = {
    cardCount: {},
    graphData: [],
    trackingData: {},
    tableData: [],
    salesPurchaseData: [],
    roleEmployeeData: {},
    incomeExpenseData: [],
    orderGraphD:[],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
}

// == Card Count Data ==============
export const GetCardCount = createAsyncThunk("cardCount/get", async () => {
    try {
        const response = await baseRequest.get(`api/neet/card`);
        return response.data;
    } catch (error) {
        console.log(error, "cardCount");
        throw error;
    }
});

// == Graph Data ==============
// export const GetGraphData = createAsyncThunk("graphData/get", async () => {
//     try {
//         const response = await baseRequest.get(`/api/card/graph`);
//         return response.data;
//     } catch (error) {
//         console.log(error, "graphData");
//         throw error;
//     }
// });

// == Tracking Data ==============
// export const GetTrackingData = createAsyncThunk("trackingData/get", async () => {
//     try {
//         const response = await baseRequest.get(`/api/card/traking`);
//         return response.data;
//     } catch (error) {
//         console.log(error, "trackingData");
//         throw error;
//     }
// });

// == Table Data ==============
// export const GetTableData = createAsyncThunk("tableData/get", async () => {
//     try {
//         const response = await baseRequest.get(`/api/card/table`);
//         return response.data;
//     } catch (error) {
//         console.log(error, "tableData");
//         throw error;
//     }
// });

// == Sales Purchase Data ==============
// export const GetSalesPurchaseData = createAsyncThunk("salesPurchaseData/get", async () => {
//     try {
//         const response = await baseRequest.get(`/api/card/sales/purchase/graph`);
//         return response.data;
//     } catch (error) {
//         console.log(error, "salesPurchaseData");
//         throw error;
//     }
// });

// == Role Employee Data ==============
export const GetRoleEmployeeData = createAsyncThunk("roleEmployeeData/get", async () => {
    try {
        const response = await baseRequest.get(`/api/neet/gendercount`);
        return response.data;
    } catch (error) {
        console.log(error, "roleEmployeeData");
        throw error;
    }
});

// == Income Expense Data ==============
// export const GetIncomeExpenseData = createAsyncThunk("incomeExpenseData/get", async () => {
//     try {
//         const response = await baseRequest.get(`/api/card/income/expense/graph`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// });
export const GetOrderGraphData = createAsyncThunk("orderGraphData/get", async () => {
    try {
        const response = await baseRequest.get(`/api/neet/day`);
        
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const DashMainSlice = createSlice({
    name: 'DashBoardMain',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        resetStatus: (state) => {
            state.status = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder
            // Card Count Data
            .addCase(GetCardCount.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GetCardCount.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cardCount = action.payload;
            })
            .addCase(GetCardCount.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            // Graph Data
            // .addCase(GetGraphData.pending, (state) => {
            //     state.status = 'loading'
            // })
            // .addCase(GetGraphData.fulfilled, (state, action) => {
            //     state.status = 'succeeded'
            //     state.graphData = action.payload;
            // })
            // .addCase(GetGraphData.rejected, (state, action) => {
            //     state.status = 'failed'
            //     state.error = action.error.message
            // })

            // Tracking Data
            // .addCase(GetTrackingData.pending, (state) => {
            //     state.status = 'loading'
            // })
            // .addCase(GetTrackingData.fulfilled, (state, action) => {
            //     state.status = 'succeeded'
            //     state.trackingData = action.payload;
            // })
            // .addCase(GetTrackingData.rejected, (state, action) => {
            //     state.status = 'failed'
            //     state.error = action.error.message
            // })

            // Table Data
            // .addCase(GetTableData.pending, (state) => {
            //     state.status = 'loading'
            // })
            // .addCase(GetTableData.fulfilled, (state, action) => {
            //     state.status = 'succeeded'
            //     state.tableData = action.payload;
            // })
            // .addCase(GetTableData.rejected, (state, action) => {
            //     state.status = 'failed'
            //     state.error = action.error.message
            // })

            // Sales Purchase Data
            // .addCase(GetSalesPurchaseData.pending, (state) => {
            //     state.status = 'loading'
            // })
            // .addCase(GetSalesPurchaseData.fulfilled, (state, action) => {
            //     state.status = 'succeeded'
            //     state.salesPurchaseData = action.payload;
            // })
            // .addCase(GetSalesPurchaseData.rejected, (state, action) => {
            //     state.status = 'failed'
            //     state.error = action.error.message
            // })

            // Role Employee Data
            .addCase(GetRoleEmployeeData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GetRoleEmployeeData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.roleEmployeeData = action.payload;
            })
            .addCase(GetRoleEmployeeData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            // Income Expense Data
            // .addCase(GetIncomeExpenseData.pending, (state) => {
            //     state.status = 'loading'
            // })
            // .addCase(GetIncomeExpenseData.fulfilled, (state, action) => {
            //     state.status = 'succeeded'
            //     state.incomeExpenseData = action.payload;
            // })
            // .addCase(GetIncomeExpenseData.rejected, (state, action) => {
            //     state.status = 'failed'
            //     state.error = action.error.message
            // })
            .addCase(GetOrderGraphData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GetOrderGraphData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.orderGraphD = action.payload;
            })
            .addCase(GetOrderGraphData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// Selectors
export const AllCardCount = (state) => state.DashboardMain.cardCount
export const AllGraphData = (state) => state.DashboardMain.graphData
export const AllTrackingData = (state) => state.DashboardMain.trackingData
export const AllTableData = (state) => state.DashboardMain.tableData
export const AllSalesPurchaseData = (state) => state.DashboardMain.salesPurchaseData
export const AllRoleEmployeeData = (state) => state.DashboardMain.roleEmployeeData
export const AllIncomeExpenseData = (state) => state.DashboardMain.incomeExpenseData
export const AllOrderGraphData = (state) => state.DashboardMain.orderGraphD
export const DashboardMainStatus = (state) => state.DashboardMain.status
export const DashboardMainError = (state) => state.DashboardMain.error

// Actions
export const { clearError, resetStatus } = DashMainSlice.actions;

export default DashMainSlice.reducer;