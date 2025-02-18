
import error from '/404.gif'

export default function ErrorPage() {
  return (
    <div className='flex justify-center items-center'>
        <img src={error} alt="Error" />
    </div>
  )
}
