import Image from 'next/image'

export default function FeedbackThankYou({rating}) {
    console.log("rating is " + rating)
    return (
        <div className="flex flex-col items-center">
            <div className='h-32 w-32 sm:h-28 sm:w-[162px] sm:mt-3 relative'>
                <Image src="/illustration-thank-you.svg" alt="phone illustration" layout="fill" objectFit='contain' className=''></Image>
            </div>
            <div className="text-orange text-sm bg-medium-grey py-[6px] px-4 rounded-3xl mt-1 sm:mt-[34px] sm:text-[15px] sm:px-[18px]">You selected {rating} out of 5</div>
    
            <h2 className="text-white text-2xl font-bold mt-6 sm:mt-9 sm:text-[27px]">Thank you!</h2>

            <p className="text-light-grey text-sm text-center mt-3 leading-[21px] sm:text-[15.25px] sm:leading-6">
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        </div>
    )
}