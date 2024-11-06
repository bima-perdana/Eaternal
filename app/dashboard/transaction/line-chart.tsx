"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface ChartData {
  name: string;
  count_sold: number;
}

interface LineChartComponentProps {
  chartData: ChartData[];
}

const chartConfig = {
  count_sold: {
    label: "Count Sold",
    color: "hsl(var(--chart-1))",
  },
};

export function LineChartComponent({ chartData }: LineChartComponentProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          className="text-chart-string"
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} tickMargin={10} axisLine={false} className="text-chart-number" />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Line
          dataKey="count_sold"
          type="linear"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
