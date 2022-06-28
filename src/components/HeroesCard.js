import {useState} from "react";
import imgDefault from '../assets/images/marvel-logo.jpeg'

const HeroesCard = ({ img, description, name, comics, titleComics, isFavorite }) => {
  const infoHero = () => {
      console.log('ça clique')
  }
    const [isRotated, setIsRotated] = useState(false);

    const onRotate = () => {
        console.log('ça clique')
        setIsRotated(!isRotated)
    };
    return (
        <div className={"w-[20%] border-2 border-black rounded-s p-16 " + (isRotated ? ' bg-[#ac9367] text-[#871A02] ' : ' front bg-black')} >
            <div onClick={isFavorite}>&#x2764;&#xFE0F;</div>
            <div className={(isRotated ? ' flex flex-row-reverse items-center justify-between ' : 'flex flex-col ')}>
                <p className={"font-bold text-m block text-center pb-16 " + (isRotated ? 'text-black mx-auto text-l pl-10' : ' text-[#ac9367]' )} onClick={onRotate}>{name}</p>
                <img src={img ? img : imgDefault} alt="" className={"rounded-s " + (isRotated ? 'w-[40%] ' : ' w-full -pb-32')} />
            </div>
            {isRotated ? (
                <div className='border-t-4 border-t-[#871A02] mt-16 pt-16'>
                    <p className="pt-16">{description}</p>
                    <p className="underline text-black mt-16">Ce Héro {!comics ? "n' " : ''} apparait dans {comics ? comics : 'aucun'} comics</p>
                    {titleComics}
                </div>
            ) : ''}
        </div>
    )
}

export default HeroesCard;