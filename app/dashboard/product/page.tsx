import { Component } from './bar-chart';
import logoItem from '@/app/assets/logo-order.png';
import Image from 'next/image';

interface ProductProps {
    totalItem: number;  // Menambahkan properti untuk menerima totalItem
}

export default function Product({ totalItem }: ProductProps) {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <div className="flex w-full flex-col p-5 gap-6">
                    <h1>Product</h1>

                    <div className="w-full flex flex-col gap-6">
                        <div className="w-full flex flex-col border p-4 gap-5">
                            <h5>Total Item</h5>
                            <div className="flex gap-2">
                                <div className="flex rounded-[24px] p-2 gap-3">
                                    <Image src={logoItem} alt="Logo Item" />
                                </div>
                                <h2>{totalItem}</h2> {/* Menampilkan nilai totalItem */}
                            </div>
                        </div>

                        <div className="w-full flex flex-col border p-5 gap-6">
                            <h3>Sales Order</h3>
                            <div className="">
                                <Component /> {/* Menampilkan grafik */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
