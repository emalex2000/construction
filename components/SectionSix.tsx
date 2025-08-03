import BlurryButton from "./BlurryButton";

export default function SectionSix(){
    return(
        <>
         <div className="bg-black text-white">
            <div className="flex justify-center items-center flex-col gap-9 pb-9">
                <h1 className="text-[3rem] font-bold">Contact</h1>
                <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    id="full-name"
                    className="focus:outline-none w-[30rem] rounded-md bg-white text-gray-900 py-2 px-2"
                />

                <input 
                    type="text" 
                    placeholder="Enter Your Email" 
                    id="email"
                    className="focus:outline-none w-[30rem] rounded-md bg-white text-gray-900 py-2 px-2"
                />

                <textarea name="" id="message" placeholder="message" className="w-[30rem] p-2 bg-white focus:outline-none text-gray-900 rounded-md min-h-[12rem]"></textarea>

                <BlurryButton text={'Send Message'} className="p-2 rounded"/>
            </div>

         </div>
        </>
    )
}