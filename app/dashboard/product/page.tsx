import logoItem from '@/app/assets/logo-order.png'
import Image from 'next/image';
import { Component } from './bar-chart';

interface User {
    id: number;
    username: string;
    count_transactions: number;
}

export default async function Product() {
    const response = await fetch('http://45.64.99.242:9116/users',{
        cache:'no-store'
    });
    const users = await response.json();
    const data: User[] = users.data;

    const totalItem = data.reduce((total, user) => total + user.count_transactions, 0);
    
    console.log(data);
    console.log(totalItem);
    return (

        <div className = 'container mx-auto'>
            <div className = 'flex flex-wrap'>
                <div className = 'flex w-full flex-col p-5 gap-6'>
                    <h1>Product</h1>

                    <div className = 'w-full flex flex-col gap-6'>
                        <div className='w-full flex flex-col border p-4 gap-5'>
                            <h5>Total Item</h5>
                            <div className='flex gap-2'>
                                <div className="flex rounded-[24px] p-2 gap-3">
                                    <Image src={logoItem} alt="Logo Item"/>
                                </div>
                                <h2>{totalItem}</h2>
                            </div>

                        </div>
                        <div className='w-full flex flex-col border p-5 gap-6'>
                            <h3>Sales Order</h3>
                            <div className="">
                                <Component chartData={data}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}