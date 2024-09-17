const Order = () => {
    return (
        <>
           <div class="m-24">
                <div className="bg-slate-600 w-40 p-4 text-black rounded-md relative flex flex-row">
                    <h3 className="basis-1/4 bg-slate-200">Order ID</h3>
                    <h3 className="basis-1/4 bg-slate-200">Name</h3>
                    <h4 className="basis-1/2 bg-slate-200">Qty</h4>
                    {/* <h4 className="basis-1/2">Price</h4> */}
                    <div className="bg-white rounded-md cursor-pointer mt-4 absolute -top-4 -left-4 ">
                        <h3 className="text-center text-slate-600">Done</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Order;