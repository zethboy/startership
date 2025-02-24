import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-full  bg-hero p-16">
      <div className="container mx-auto flex items-center justify-between xl:justify-center">
        <div className="text-white w-1/2">
          <h2 className="text-3xl font-bold xl:text-4xl">Learn to code with</h2>
          <h2 className="text-3xl font-bold text-ijo xl:text-4xl">Yogi Nugraha</h2>
          <p className="text-sm py-2 xl:text-xl">Start your journey to becoming a professional developer with our intensive bootcamp program.</p>
          <button className="bg-ijo rounded-sm text-white w-24 h-8 text-sm xl:mr-4">Get Started</button> <button className="bg-transparent rounded-sm text-white border border-ijo w-24 h-8 text-sm">Learn more</button>
        </div>
        <div className=" px-4">
          <img src="ilustration.png" alt="" className="w-60"/>
        </div>
      </div>
    </div>
  )
}
export default Hero;