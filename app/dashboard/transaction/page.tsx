export default async function Transaction() {
    const response = await fetch('http://45.64.99.242:9116/brands',{
        cache:'no-store'
    });
    const brands = await response.json();
    console.log(brands);
    return (

        <div className = 'container mx-auto'>
            <div className = 'flex flex-wrap'>
                <div className = 'flex flex-col p-5 gap-6'>
                    <h1>Transaction</h1>

                    <div className = 'flex flex-col gap-6'>
                        <div className='w-full flex flex-col border p-4 gap-5'>
                            <div className=''>
                                <h5>Total Revenue</h5>
                            </div>
                            <div className=''>

                            </div>

                        </div>
                        <div className='flex flex-col border p-5 gap-6'>
                            <h3>Sales Order</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}