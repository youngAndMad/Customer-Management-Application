package danekerscode.controllers;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import danekerscode.dto.CustomerDTO;
import danekerscode.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/customer")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("all")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(customerService.getAll());
    }

    @PostMapping("new")
    public ResponseEntity<?> register(@RequestBody CustomerDTO customerDTO){
        return ResponseEntity.ok(this.customerService.save(customerDTO));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updated(@PathVariable Integer id,
                                     @RequestBody CustomerDTO customerDTO){
        return ResponseEntity.ok(this.customerService.update(customerDTO,id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        this.customerService.delete(id);
        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id){
        return ResponseEntity.ok(this.customerService.getById(id));
    }

}
