package sesac.spring.study.sesacspringstudy.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AnotherController {
    @GetMapping("snack")
    public String getSnack(Model model){
        model.addAttribute("text",  "Flavor");
        return "potato";
    }
}
