import './PracticeSass.scss';
import grass from './grass.png';

const PracticeSass = () =>{
    return(
        <div className="caterpillar-body">
            <div className="eye_black"></div>
            <div className="eye_white"></div>
            <div className="body_1"></div>
            <div className="body_2"></div>
            <div className="body_3"></div>
            <div className="body_4"></div>
            <div className="body_5"></div>
            <img src={grass} />
       </div>
    )
}

export default PracticeSass;