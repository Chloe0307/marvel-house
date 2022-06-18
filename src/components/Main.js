import axios from "axios";

const Main = () => {
    const baseURL = 'test.marvel.com'
    const publicKey ='0717f0737b1fff6970186375b776948d'
    const privateKey = 'ed71295169336e194284d0ba47f1f7e70b98fa7c'
console.log(baseURL)
    axios.get(baseURL).then(function(res){
        console.log(res)
    })
    return (
        <div>
        </div>
    )
}

export default Main;