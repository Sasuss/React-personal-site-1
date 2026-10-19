type ProjectItems = {
    Link: string;
    Name: string;
    Image: string;
};

function Project(items: ProjectItems) {
    return (
        <a href={items.Link} target="_blank">
            <div className='bg-slate-800 hover:bg-slate-700 hover:bg-slate-700 h-100 w-70 ml-10 mb-10 rounded-4xl p-3'>
                <div className='h-1/5 w-full'>
                    <p className='text-left text-2xl font-bold text-gray-50 pt-5'>{items.Name}</p>
                </div>
                <div className='mb-10 h-3/5'>
                    <img src={items.Image} className='w-full' alt="" />
                </div>
            </div>
        </a>
    );
}

export default Project;