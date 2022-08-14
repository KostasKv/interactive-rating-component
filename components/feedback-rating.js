import Image from 'next/image'
import { useState } from 'react'

export default function FeedbackRating({onSubmit}) {
    const [rating, setRating] = useState()
    
    function onClickRating(rating) {
        setRating(rating)
        console.log(rating)
    }

    function onClickSubmit() {
        if (rating) {
            onSubmit(rating)
        }
    }

    return (
        <div>
            <div className="bg-medium-grey w-10 h-10 rounded-full flex justify-center items-center sm:w-12 sm:h-12">
                <Image src="/icon-star.svg" alt="star icon" width="16px" height="16px" ></Image>
            </div>
            <h1 className="text-white text-[24px] mt-4 sm:mt-8 normal-case sm:text-[28px] font-bold">How did we do?</h1>
            
            <p className='text-light-grey text-sm leading-[21px] mt-[10px] normal-case sm:text-[15px] sm:leading-6 sm:mt-[6px]'>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>

            <div className='flex justify-between mt-7 text-sm font-bold sm:text-base sm:mt-7 sm:pr-2'>
                {Array.from(Array(5), (_, i) => {
                    return <button onClick={() => {onClickRating(i + 1)}} className={(rating === (i + 1) ? "bg-light-grey text-white" : "bg-medium-grey text-light-grey") + " hover:bg-orange hover:text-white w-10 h-10 rounded-full align-text-bottom pt-1 sm:w-[50px] sm:h-[50px]"}>
                                {i + 1}
                            </button>
                })}
            </div>

            <button className="bg-orange text-white w-full rounded-3xl font-bold text-[14px] tracking-widest pt-[13px] py-[11px] px-10 hover:bg-orange-700 mt-[26px] hover:bg-white hover:text-orange uppercase sm:mt-8 sm:text-[15px] sm:pb-[9px]"
                    onClick={onClickSubmit}>Submit</button>
        </div>
    )
}