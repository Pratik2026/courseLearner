import loader from '../assets/loader.gif'

const ScreenLoader = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] flex justify-center items-center">
      <img className="rounded-full" src={loader} alt="loader" />
    </div>
  )
}

export default ScreenLoader