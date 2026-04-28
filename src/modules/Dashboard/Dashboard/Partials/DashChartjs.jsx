import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { AllGraphData, AllOrderGraphData, AllSalesPurchaseData, AllTrackingData, GetOrderGraphData } from '../DashboardMainSlice';


const COLORS = {
    'Packed': '#8884D8',
    'Out for Delivery': '#FF8042',
    'Order Placed': '#0088FE',
    'Shipped': '#FFBB28',
    'Delivered': '#00C49F'
};

const ROLE_COLORS = {
    'Jave': '#8884D8',
    'React': '#00C49F',
    'PHP': '#FF8042'
};

const allMonths = [
    { month: 'Jan', month_number: 1 },
    { month: 'Feb', month_number: 2 },
    { month: 'Mar', month_number: 3 },
    { month: 'Apr', month_number: 4 },
    { month: 'May', month_number: 5 },
    { month: 'Jun', month_number: 6 },
    { month: 'Jul', month_number: 7 },
    { month: 'Aug', month_number: 8 },
    { month: 'Sep', month_number: 9 },
    { month: 'Oct', month_number: 10 },
    { month: 'Nov', month_number: 11 },
    { month: 'Dec', month_number: 12 },
];

export const DashboardBarGraph = () => {
    const graphData = useSelector(AllGraphData);

    const graphMap = new Map();
    (graphData || []).forEach(item => {
        graphMap.set(item.month_number, {
            ...item,
            customers: item.customer_count ?? 0,
        });
    });

    const chartData = allMonths.map(({ month, month_number }) => {
        const item = graphMap.get(month_number);
        return {
            month,
            monthnumber: month_number,
            customers: item?.customers ?? 0,
            year: item?.year ?? 2025,
        };
    });

    const maxCustomers = Math.max(...chartData.map(d => d.customers), 0);

    return (
        <div style={{ width: '100%', height: '300px', padding: '20px 0' }}>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
                Monthly Customer Growth
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, maxCustomers + 1]} tick={{ fontSize: 12 }} />
                    <Tooltip
                        formatter={(value) => [value, 'Customers']}
                        labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <Bar
                        dataKey="customers"
                        fill="#8884d8"
                        name="Customer Count"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

// -----------------Pie Chart Component---------------

export const DashboardPieChart = () => {
    const trackingData = useSelector(AllTrackingData)
    const pieData = trackingData ? Object.entries(trackingData).map(([key, value]) => ({
        name: key,
        value: parseInt(value) || 0, // Convert string to number
        color: COLORS[key] || '#8884D8'
    })).filter(item => item.value > 0) : [];

    const totalOrders = pieData.reduce((sum, item) => sum + item.value, 0);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        if (percent === 0) return null;

        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize={12}
                fontWeight="bold"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0];
            return (
                <div style={{
                    backgroundColor: 'white',
                    padding: '12px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                    <p style={{ margin: '0 0 4px 0', fontWeight: '500', color: '#333' }}>
                        {data.name}
                    </p>
                    <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#666' }}>
                        Orders: <span style={{ fontWeight: '600', color: data.payload.color }}>
                            {data.value}
                        </span>
                    </p>
                    <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                        Percentage: <span style={{ fontWeight: '600' }}>
                            {((data.value / totalOrders) * 100).toFixed(1)}%
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{
            width: '100%',
            // backgroundColor: 'white',
            borderRadius: '8px',
            // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            // border: '1px solid #f0f0f0'
        }}>
            <div style={{ padding: '24px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px'
                }}>
                    <h3 style={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#333'
                    }}>
                        Order Status
                    </h3>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                        Total Orders: <span style={{ fontWeight: '500', color: '#333' }}>
                            {totalOrders}
                        </span>
                    </div>
                </div>

                {pieData.length > 0 ? (
                    <div style={{ width: '100%', height: '350px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="45%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    stroke="#fff"
                                    strokeWidth={2}
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    height={50}
                                    formatter={(value, entry) => (
                                        <span style={{
                                            color: entry.color,
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}>
                                            {value}
                                        </span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '250px',
                        color: '#999',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
                        <p style={{
                            fontSize: '18px',
                            fontWeight: '500',
                            margin: '0 0 8px 0'
                        }}>
                            No tracking data available
                        </p>
                        <p style={{
                            fontSize: '14px',
                            margin: 0,
                            color: '#ccc'
                        }}>
                            Order data will appear here when available
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

// -----------------Line Chart Component---------------
export const DashboardLineChart = () => {
    const salesPurchaseData = useSelector(AllSalesPurchaseData || []);

    const processedData = allMonths.map(({ month, month_number }) => {
        const apiData = salesPurchaseData.find(item => item.month_number === month_number);
        return {
            month,
            month_number,
            sales: apiData?.sales_count || 0,
            purchase: apiData?.purchase_count || 0,
            year: apiData?.year || 2025
        };
    });

    const maxValue = Math.max(
        ...processedData.map(d => Math.max(d.sales, d.purchase)),
        0
    );

    return (
        <div style={{ width: '100%', height: '300px', padding: '20px 0' }}>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
                Sales vs Purchase
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={processedData}
                    margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="month"
                        tick={{ fontSize: 12 }}
                    />
                    <YAxis
                        domain={[0, maxValue + 1]}
                        tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                        formatter={(value, name) => [value, name === 'sales' ? 'Sales' : 'Purchase']}
                        labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#8884D8"
                        strokeWidth={3}
                        dot={{ fill: '#8884D8', strokeWidth: 2, r: 4 }}
                        name="sales"
                        activeDot={{ r: 6, stroke: '#8884D8', strokeWidth: 2 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="purchase"
                        stroke="#82CA9D"
                        strokeWidth={3}
                        dot={{ fill: '#82CA9D', strokeWidth: 2, r: 4 }}
                        name="Purchase"
                        activeDot={{ r: 6, stroke: '#82CA9D', strokeWidth: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

// -----------------Circle Chart (Role/Employee) Component---------------
export const DashboardCircleChart = () => {
    const roleEmployeeData = useSelector(state => state.DashboardMain.roleEmployeeData || {});
console.log(roleEmployeeData,'roleEmployeeDataaa');

    // Convert object to array format for PieChart
    const circleData = Object.entries(roleEmployeeData).map(([role, count]) => ({
        name: role,
        value: parseInt(count) || 0,
        color: ROLE_COLORS[role] || '#8884D8'
    })).filter(item => item.value > 0);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
        if (percent === 0) return null;

        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize={11}
                fontWeight="bold"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div style={{ width: '100%', height: '500px', padding: '20px 0' }}>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
                Student Gender
            </h3>
            {circleData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={circleData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={90}
                            innerRadius={40}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {circleData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value, name) => [value, `${name} Students`]}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            formatter={(value, entry) => (
                                <span style={{ color: entry.color }}>{value}</span>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            ) : (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px',
                    color: '#999',
                    fontSize: '16px'
                }}>
                    No students data available
                </div>
            )}
        </div>
    );
};

// -----------------Income Expense Bar Chart Component---------------
export const DashboardIncomeExpenseChart = () => {
    const incomeExpenseData = useSelector(state => state.DashboardMain.incomeExpenseData || []);

    // Process the data to ensure all months are included
    const processedData = allMonths.map(({ month, month_number }) => {
        const apiData = incomeExpenseData.find(item => item.month_number === month_number);
        return {
            month,
            month_number,
            income: apiData?.total_credit_income || 0,
            expense: apiData?.total_debit_expense || 0,
            year: apiData?.year || 2025
        };
    });

    const maxValue = Math.max(
        ...processedData.map(d => Math.max(d.income, d.expense)),
        0
    );

    // Format currency for tooltip
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <div style={{ width: '100%', height: '300px', padding: '20px 0' }}>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
                Monthly Income vs Expense
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={processedData}
                    margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="month"
                        tick={{ fontSize: 12 }}
                    />
                    <YAxis
                        domain={[0, maxValue * 1.1]}
                        tick={{ fontSize: 10 }}
                        // tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`}
                        tickFormatter={(value) => formatCurrency(value)}
                    />
                    <Tooltip
                        formatter={(value, name) => [
                            formatCurrency(value),
                            name === 'Income' ? 'Total Income' : 'Total Expense'
                        ]}
                        labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <Bar
                        dataKey="income"
                        fill="#52C41A"
                        name="Income"
                        radius={[4, 4, 0, 0]}
                    />
                    <Bar
                        dataKey="expense"
                        fill="#FF4D4F"
                        name="Expense"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


// -----------------Order Line Chart Component---------------

const getDaysInMonth = (year, month) => {
    const days = new Date(year, month, 0).getDate();
    return Array.from({ length: days }, (_, i) => ({
        day: i + 1,
        date: `${year}-${String(month).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`
    }));
};

const allDays = getDaysInMonth(2026, 3); // March 2026

export const DashboardOrderLineChart = () => {
  const orderGraphData = useSelector(AllOrderGraphData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOrderGraphData());
  }, [dispatch]);

  // Function to generate all days of a month
  const getDaysInMonth = (year, month) => {
    const days = new Date(year, month, 0).getDate();

    return Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      date: `${year}-${String(month).padStart(2, "0")}-${String(i + 1).padStart(
        2,
        "0"
      )}`,
    }));
  };

  // March 2026
  const allDays = getDaysInMonth(2026, 3);

  // Convert API data to chart data
  const processedData = allDays.map(({ day, date }) => {
    const apiData = orderGraphData?.find(
      (item) => item.registerDate === date
    );

    return {
      day,
      date,
      orders: apiData?.totalRegister || 0,
    };
  });

  const maxOrders = Math.max(...processedData.map((d) => d.orders), 0);

  const totalOrders = processedData.reduce((sum, item) => sum + item.orders, 0);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <div style={{ padding: "24px" }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "24px",
            color: "#333",
          }}
        >
          Registration Day by Day — March 2026
        </h3>

        <div style={{ width: "100%", height: "350px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={processedData}
              margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />

              <XAxis
                dataKey="day"
                tick={{ fontSize: 12, fill: "#666" }}
                axisLine={{ stroke: "#e0e0e0" }}
                tickLine={{ stroke: "#e0e0e0" }}
              />

              <YAxis
                domain={[0, maxOrders + 1]}
                allowDecimals={false}
                tick={{ fontSize: 12, fill: "#666" }}
                axisLine={{ stroke: "#e0e0e0" }}
                tickLine={{ stroke: "#e0e0e0" }}
              />

              <Tooltip
                formatter={(value) => [value, "Registrations"]}
                labelFormatter={(label) => `Day: ${label} (March 2026)`}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              />

              <Legend wrapperStyle={{ paddingTop: "20px" }} />

              <Line
                type="monotone"
                dataKey="orders"
                stroke="#1890FF"
                strokeWidth={3}
                dot={{
                  fill: "#1890FF",
                  strokeWidth: 2,
                  r: 5,
                  stroke: "#fff",
                }}
                name="Registrations"
                activeDot={{
                  r: 7,
                  stroke: "#1890FF",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Stats */}
        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1890FF",
              }}
            >
              {totalOrders}
            </div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>
              Total Registrations
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#52C41A",
              }}
            >
              {Math.max(...processedData.map((d) => d.orders))}
            </div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>
              Peak Day
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#FF4D4F",
              }}
            >
              {(totalOrders / processedData.length).toFixed(1)}
            </div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>
              Daily Avg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};