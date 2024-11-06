import logoSold from '@/app/assets/logo-soldout.png';
import Image from 'next/image';
import { LineChartComponent } from './line-chart';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eaternal - Transactions",

};

interface Brand {
  id: number;
  name: string;
  count_sold: number;
}

export default async function Transaction() {
  const response = await fetch('http://45.64.99.242:9116/brands', {
    cache: 'no-store',
  });
  const brands = await response.json();
  const data: Brand[] = brands.data;

  const totalSold = data.reduce((total, brand) => total + brand.count_sold, 0);


  const chartData = data.map((brand) => ({
    name: brand.name,
    count_sold: brand.count_sold,
  }));

  return (
 
    <div className="container mx-auto">
        <div className="flex w-full flex-col p-5 gap-6">
          <h1>Transaction</h1>
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col border p-4 gap-5">
              <h5>Total Sold</h5>
              <div className="flex gap-2 items-center">
                <div className="flex rounded-[24px] p-2 gap-3">
                  <Image src={logoSold} alt="Logo Sold" />
                </div>
                <h2>{totalSold}</h2>
              </div>
            </div>

            <div className="w-[1160px] h-[335px] flex flex-col border border-[#E5E5E5] p-5 gap-6">
              <h3>Sales Order</h3>
              <div className ="flex w-full h-full p-5 gap-6">
                <LineChartComponent chartData={chartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
