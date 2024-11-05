"use client";

import { useState, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend } from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import Product from './page'; // Import komponen Product di sini

interface User {
    id: number;
    username: string;
    count_transactions: number;
}

interface ChartData {
    username: string;
    count_transactions: number;
}

const chartConfig = {
    desktop: {
        label: "Transactions",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

export function Component() {
    const [data, setData] = useState<ChartData[]>([]);
    const [totalItem, setTotalItem] = useState<number>(0);

    // Mengambil data hanya sekali saat komponen pertama kali dimuat
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://45.64.99.242:9116/users', {
                cache: 'no-store',
            });
            const users = await response.json();
            const usersData: User[] = users.data;

            const chartData = usersData.map((user) => ({
                username: user.username,
                count_transactions: user.count_transactions,
            }));

            setData(chartData);

            // Menghitung total transaksi
            const total = usersData.reduce((sum, user) => sum + user.count_transactions, 0);
            setTotalItem(total);
        };

        fetchData();
    }, []); // [] memastikan useEffect hanya dijalankan sekali saat pertama kali dimuat

    if (data.length === 0) {
        return <div>Loading...</div>; // Menunggu data sampai selesai diambil
    }

    return (
        <div>
            {/* Mengirimkan totalItem ke komponen Product */}
            <Product totalItem={totalItem} />
            
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="username" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count_transactions" fill={chartConfig.desktop.color} radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    );
}
