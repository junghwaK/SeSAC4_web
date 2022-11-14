package sesac.spring.study.sesacspringstudy.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.ArrayList;


@Controller
public class Prac2 {
    @GetMapping("people")
    public String getPrac(Model model){

        ArrayList<Person> arrayList = new ArrayList<>();

//        arrayList.add(new Person("hwa", 12));
        Person kim = new Person();
        kim.setName("니콜라스 세령");
        kim.setAge(100);
        Person lee = new Person();
        lee.setName("Dr.클로이 함");
        lee.setAge(205);

        arrayList.add(kim);
        arrayList.add(lee);

        model.addAttribute("people",  arrayList);

        return "people";
    }

    public class Person {
        private String name;
        private int age;

//        public Person( String name, int age ) {
//            this.name = name;
//            this.age = age;
//        }

        public String getName() {
            return this.name;
        }

        public int getAge() {
            return this.age;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setAge(int age) {
            this.age = age;
        }

    }
}