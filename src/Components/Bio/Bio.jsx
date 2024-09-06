import './Bio.css'
export default function Bio(){
    return(
        <>
             <div className="gradient-cards">
                <div className="card">
                    <div className="container-card bg-green-box">
        
                     <p className="card-title">Я Илья!</p>
                    <p className="card-description">Если вы перешли на этот сайт, то значит я ищу новое место работы, где мои навыки могут пригодится и принести пользу)</p>
                    </div>
                </div>
            </div>
          
            <span className="Message">{"Я Илья!\n Если вы перешли на этот сайт, то значит я ищу новое место работы, где мои навыки могут пригодится и принести пользу)"} </span>
        </>
    )
}