import {useState} from "react";
import imgDefault from '../assets/images/marvel-logo.jpeg'
import favorite from '../assets/icons/favorite.png'

const HeroesCard = ({ img, description, name, comics, titleComics, isFavorite, extraClass }) => {
  const infoHero = () => {
      console.log('ça clique')
  }
    const [isRotated, setIsRotated] = useState(false);

    const onRotate = () => {
        console.log('ça clique')
        setIsRotated(!isRotated)
    };
    return (
        <div className={"w-[20%] border-2 border-black rounded-s p-16 " + (isRotated ? ' bg-gold text-darkRed ' : ' front bg-black')} >
            <button onClick={isFavorite} className={extraClass}>
                <img src={favorite} alt="" className={'w-[20px] '}/>
            </button>
            <div className={(isRotated ? ' flex flex-row-reverse items-center justify-between ' : 'flex flex-col ')}>
                <p className={"font-bold text-m block text-center pb-16 " + (isRotated ? 'text-black mx-auto text-l pl-10' : ' text-gold' )} onClick={onRotate}>{name}</p>
                <img src={img ? img : imgDefault} alt="" className={"rounded-s " + (isRotated ? 'w-[40%] ' : ' w-full -pb-32')} />
            </div>
            {isRotated ? (
                <div className='border-t-4 border-t-darkRed mt-16 pt-16'>
                    <p className="pt-16">{description}</p>
                    <p className="underline text-black mt-16">Ce Héro {!comics ? "n' " : ''} apparait dans {comics ? comics : 'aucun'} comics</p>
                    {titleComics}
                </div>
            ) : ''}
        </div>
    )
}

export default HeroesCard;