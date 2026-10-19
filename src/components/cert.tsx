type CertificateItems = {
    Name: string;
    Image: string;
};

function Cert(items: CertificateItems) {
    return (
        <div className='bg-slate-800 hover:bg-slate-700 w-70 h-100 ml-10 rounded-4xl mt-5'>
            <div className='h-1/5 w-full'>
                <p className='text-center text-xl font-bold text-gray-50 pt-5'>{items.Name}</p>
            </div>
            <div className='mb-10 h-3/5'>
                <img src={items.Image} alt="" />
            </div>
        </div>
    )
}

export default Cert