import './App.css';

function App() {
  // const name = "SeSAC";
  // const flag= true;
  // let name = "";
  // if (flag ) name = "SeSAC";
  // else name = "문래";
  const name = "로이";
  const animal = "고양이";
  let a = 10;
  let b = 5;
  let title = "Hello World";

  return (
    <div> 
      이것은 div입니다
      <h3>이것은div 안에있는 h3태그입니다</h3>
      <h2>제 반려 동물의 이름은{name}입니다. {name}는 {animal}입니다. </h2>
      { 3 + 5 == 8 ? <h1>정답입니다!</h1> : <h1>오답입니다!</h1>}
      {a > b && (<h1>a가 b 보다 큽니다</h1>)}
      
      <div className='test'>
        <p className='title'>{title}</p>
        <div className='holder'>
        아이디:<input type="text" placeholder='' /><br></br>
        <br></br>
        비밀번호:<input type="text" placeholder='' />
        </div>
      </div>
 
    
        <div className='red'></div> 
        <div className='orange'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='purple'></div>
      
    </div>
  );

}



export default App;
