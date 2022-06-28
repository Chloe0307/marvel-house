import shield from '../assets/images/loader_shield.png'

const Loader = () => {
    return (
        <div className="w-full flex justify-center flex-col items-center">
            <img src={shield} alt="" className="w-[150px] rotate"/>
            <span className="mt-32 font-bold text-white text-xxl">Chargement ...</span>
        </div>
    )
}

export default Loader;