import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { RoutesContext } from '../Main/Main';

const Statistics = () => {
    const [data] = useContext(RoutesContext);

    const info = data.data;

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <ResponsiveContainer width="70%" height="60%">
                <LineChart data={info} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;