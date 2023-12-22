import { useNavigate } from 'react-router-dom';

function Card () {

        const navigate = useNavigate();
        const handleClick = (page) => {
            navigate(page);
          };
          return (
            <div>
                
                    <h1>Enjoy your card</h1>
                    <button onClick={()=>handleClick('/')}>
                    Go home   
                    </button>
                
                    
                   
           </div>
            );
        
        };

export default Card;