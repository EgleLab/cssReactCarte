import { useNavigate } from 'react-router-dom';

function CardMom () {

        const navigate = useNavigate();
        const handleClick = (page) => {
            navigate(page);
          };
          return (
            <div>
                
                    <h1>Hi Mom!</h1>
                    <button onClick={()=>handleClick('/')}>
                    Go home   
                    </button>
                
                    
                   
           </div>
            );
        
        };

export default CardMom;