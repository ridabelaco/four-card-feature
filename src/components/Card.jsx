import supervisor from '../assets/icon-supervisor.svg'

export default function Card({logo, title, description,borderColor, rowSpan}) {
  return (
    <div className={`flex flex-col md:max-w-96 shadow-2xl p-9 mx-6 md:mx-0 md:my-0 rounded-lg ${borderColor} ${rowSpan} border-4  border-transparent border-x-0 my-5 bg-white`}>
      <h3 className='text-2xl font-semibold text-veryDarkBlue mb-2'>{title}</h3>
      <p className='text-grayishBlue text-sm text-left mb-6'>{description}</p>
      <div className='self-end'>
        <img className='w-16 h-16' src={logo} alt="supervisor" />
      </div>
    </div>
  )
}
