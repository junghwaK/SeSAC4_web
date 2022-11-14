package sesac.spring.study.sesacspringstudy.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Sese {

    @GetMapping("api")
    public String getApi(@RequestParam(value="name", required = false) String vv,
                         @RequestParam(value="age", required = false)int age, Model model){
        model.addAttribute("name", vv);
        model.addAttribute("age", age);
        return "api";
    }

//    {}사용
    @GetMapping("api/{name}")
    public String getApi2(@PathVariable String name, Model model){
        model.addAttribute("name",  name);
        return "api";
    }




}
