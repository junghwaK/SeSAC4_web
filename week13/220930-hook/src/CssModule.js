import style from './CssModule.module.css'

const CssModule = () => {
    return(
        <div className={`${style.box1} ${style.center}`} >
            <h2>CSS module</h2>
        </div>
    )

}

//클래스 두개 쓰는거...하나는 저위, 하나는 라이브러리깔기
//classnames library 
//npm i classsnames
//import Names from 'classnames';
//<div className = {Names{style.box1.center}} />

export default CssModule;