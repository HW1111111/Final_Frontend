import {useState} from "react";

export const HomePage=()=> {
    const [list, setList] = useState(new Array(10).fill(0).map((_, i) => i))

    // center
    return <div className={'w-full'}>
        <main className="mx-auto w-8/12">
            {list.map(item=><div className="mb-2 px-8 py-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                       tabIndex="0" role="button">Design</a>
                </div>

                <div className="mt-2">
                    <a className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                       tabIndex="0" role="link">Accessibility tools for designers and developers</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur
                        adipisicing
                        elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                        reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">Read
                        more</a>

                    <div className="flex items-center">
                        <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                             src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=40&amp;q=80"
                             alt="avatar"/>
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0"
                           role="link">Khatab
                            wedaa</a>
                    </div>
                </div>
            </div>)}
        </main>

    </div>
}
