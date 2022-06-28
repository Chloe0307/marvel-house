import React from "react";

const Modal = ({ title, children, onClose }) => {
    const render_title = () => {
        if(!title) return null
        return (
            <div>
                <h3 className='text-xl w-full flex justify-center text-darkRed'>{title}</h3>
            </div>
        )
    }
    const render_content = () => {
        if(!children){
            return (
                <div className='mt-24'>
                    <span className='text-m'>Vous n'avez aucun favoris pour le moment ... </span>
                </div>
            )
        }
        return children
    }

    return (
        <div className='w-full fixed h-screen z-index z-50 top-0 left-0'>
            <div
                className='bg-black opacity-70 w-full h-screen '
                onClick={onClose}
            />
            <div className='bg-white max-h-[700px] rounded-l p-24 right-16 overflow-auto pb-0 rounded-md border border-frontSecondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <div className={'flex flex-row justify-end'}>
                    <button onClick={onClose}>
                        <div className='flex'>
                            <div className='w-[4px] h-[25px] bg-black rotate-45'/>
                            <div className='w-[4px] h-[25px] bg-black -rotate-45'/>
                        </div>
                    </button>
                </div>
                {render_title()}
                {render_content()}
            </div>
        </div>
    )
}

export default Modal;