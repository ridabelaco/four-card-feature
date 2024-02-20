import Card from './components/Card'
import { cardData } from './data'

function App() {

  return (
    <>
      <div className="min-h-screen w-full  bg-veryLightGray bg-contain bg-no-repeat  overflow-hidden flex flex-col   font-Poppins">
        <div className='flex flex-col  text-center mx-7 md:px-[400px] mt-24 mb-16'>
          <h1 className='text-2xl md:text-3xl text-veryDarkBlue mb-2 font-extralight'>Reliable, efficient delivery</h1>
          <h2 className='text-2xl md:text-3xl font-semibold text-veryDarkBlue mb-4'>Powered by Technology</h2>
          <p className='md:text-sm text-grayishBlue'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
        <div className='md:grid md:grid-cols-3 md:grid-rows-2 md:grid-flow-col md:items-center md:justify-center md:gap-8 md:mx-16 mb-12'>
          {cardData.map((content) => {
            return <Card key={content.id} {...content} />;
          })}
        </div>
      </div>
    </>
  )
}

export default App
