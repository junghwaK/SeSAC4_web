

function App() {
  return (
          <div className = "App">
  
          </div>
      );
  }
  
  
 class Student {
  constructor (name, school, age, number){
    this.name = name;
    this.school = school;
    this.age = age;
    this.number = number;
  }
  getInfo(){
    console.log('이름: ', this.name, '학교: ', this.school,'나이: ', this.age,'학번: ' ,this.number);
  }
  
 }


 class Kim extends Student {
  constructor(name,school, age, number, gender) {
    super(name,school, age, number)
    this.gender = gender;
  }
  getInfo(){
    super.getInfo()
    console.log('성별:', this.gender)
  }


 }

 //super는 위의 class Student를 받아주는거임 그렇기에 super로 gender를 받아주려면 
 //Student가 아니라 Kim을 해준다. 
 class Lee extends Kim {
  constructor(name,school, age, number, gender, phone) {
    super(name,school, age, number, gender)
    this.phone = phone;
  }
  getInfo(){
    super.getInfo()
    console.log('번호:', this.phone)
  }


 }


export default App;

let student1 = new Student('Juby', 'sesac','19', '0928');
student1.getInfo();

//여기는 gender 까지 데려오는 kim의 class
let student2 = new Kim('Juby KIM', 'sesac','19', '0210', '여자');
student2.getInfo();

let student3 = new Lee('Yeony LEE', 'sesac','19', '1120', '여자', '01088888888');
student3.getInfo();