import React from 'react'
function Card({ username = "user..", Address = "address.." }) {
    console.log("Props", username);

    return (
        <figure className="mb-4 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/20096723/pexels-photo-20096723/free-photo-of-elderly-woman-in-traditional-clothing-walking-in-village.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4" >
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-4">
                        {username}
                    </div>
                    <div>
                        Staff Engineer, {Address}
                    </div>
                </figcaption>
            </div>
        </figure >
    )
}

export default Card