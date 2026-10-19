import { Link } from "react-router-dom"
import React from "react";

type BlogItems = {
    Link: string,
    Name: string,
    Text: React.ReactNode,
}

function Blog_card(items: BlogItems) {
    return (
        <Link to={items.Link}>
            <div className='bg-slate-800 hover:bg-slate-700 h-100 w-70 mb-10 ml-10 rounded-4xl p-3'>
                <div className='h-1/6 w-full mb-5'>
                    <p className='text-left text-xl font-bold pt-5 text-gray-50'>{items.Name}</p>
                </div>
                <div className='mb-10 h-4/6 overflow-hidden'>
                    <p>{items.Text}</p>
                </div>
            </div>
        </Link>
    );
}

export default Blog_card