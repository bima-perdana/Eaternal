"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";


interface ChartData {
    username: string;
    count_transactions: number;
}

interface ComponentProps {
    chartData: ChartData[];
}

export function Component({ chartData }: ComponentProps) {
    const chartConfig = {
      username: {
        label: "Username",
        color: "#2563eb",
      },
      count_transactions: {
        label: "Count Transactions",
        color: "#60a5fa",
      },
    };
  
    return (
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="username" />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <Bar dataKey="count_transactions" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    );
  }