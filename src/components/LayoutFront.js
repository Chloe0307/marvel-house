import marvel from '../assets/banner/marvel_banner_2.gif'
import marvelLine from "../assets/images/marvel_line.jpeg"

const LayoutFront = ({ children }) => {
    return (
        <div className='w-full'>
            <img src={marvel} alt="" className="w-full"/>
            <div className="flex">
                {
                    [...Array(10)].map((v,i) => (
                        <img src={marvelLine} alt="" className="w-[10%] "/>
                    ))
                }
            </div>
            {children}
        </div>
    )
}

export default LayoutFront;