import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"




function CardDetail(){
    const {id} = useParams()

    const data = useSelector((state)=>{
      return state.postReducer
    })

    const dataId = data.find((el)=>{
      if (el.id == id) {
        return el
      } 
    })
    console.log(dataId,"masuk");
    return (
        <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dataId.title}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          A simple Detail {dataId.title} in my portofolio
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">{dataId.title}</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Description : {dataId.description}
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Tech Stack : {dataId.techStack}
          </p>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <img className="text-base font-semibold text-gray-600" src={dataId.imgUrl}/>
              <a
                href={dataId.webDeploy}
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Link Web {dataId.title}
              </a>
              <Link to={'/portofolio'}
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Back To Portofolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default CardDetail