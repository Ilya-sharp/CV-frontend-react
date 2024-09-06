import './Header.css'
import omg from '../../assets/self.png'
export default function Header(){
    return(
        <div className='Parrent'>
            <div className='text'>
                <h1>Приветствую на моем сайте!</h1>
                <h4 className=''>Это как-бы сайт - резюме😀</h4>
            </div>
           <div className="CirclesContainer">
            <img src={omg}/>
           </div>
        </div>
    )
}