
const Drinks = ({onAdd, showAdd}) => {

    return ( 
        <>
            <div className="pb-5">
                <div className="flex justify-center items-center">
                    <div className="">
                        <button className={`${showAdd? 'bg-orange-800': 'bg-orange-600'} text-white py-2 px-4 rounded-md`} onClick={onAdd}>{showAdd ? 'Close': 'Add Drinks'}</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Drinks;