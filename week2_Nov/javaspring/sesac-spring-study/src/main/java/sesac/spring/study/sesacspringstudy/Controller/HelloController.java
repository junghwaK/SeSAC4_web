package sesac.spring.study.sesacspringstudy.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloController {
    @GetMapping("hi")
    public String getHi(Model model){
        model.addAttribute("text",  "hihihi");
        model.addAttribute("utext", "<strong>utext</strong>");
        model.addAttribute("age",  10);
        model.addAttribute("age",  10);

        return "hi";
    }
//    @GetMapping("api")
//    public String getApi(@RequestParam(value="name", required = false) String name, Model model){
//        model.addAttribute("name", name);
//        return "api";
//
//    }
//    @GetMapping("api2/{name}")
//    public String getApi2(@PathVariable String name, Model model){
//        model.addAttribute("name",  name);
//        return name;
//    }
    }
