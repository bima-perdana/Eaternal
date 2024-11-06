"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";


interface ChartData {
    username: string;
    count_transactions: number;
}

interface ComponentProps {
    chartData: ChartData[];
}

const Custombar = (props: any) => {
    const {x, y, width, height, fill, radius } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
                rx={radius}
                ry={radius}
            />
        </g>
    )
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
        <BarChart data={chartData} barGap={6}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="username" className="text-chart-string" />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} className="text-chart-number" />
          <Bar dataKey="count_transactions" fill="var(--color-desktop)" shape={<Custombar radius={10}/>} barSize={16}/>
        </BarChart>
      </ChartContainer>
    );
  }