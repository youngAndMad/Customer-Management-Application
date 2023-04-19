package danekerscode.services;

import danekerscode.dto.CustomerDTO;
import danekerscode.model.Customer;
import danekerscode.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public Customer save(CustomerDTO customerDTO){
        System.out.println(customerDTO);
        Customer customer = Customer
                .builder()
                .name(customerDTO.name())
                .surname(customerDTO.surname())
                .age(customerDTO.age())
                .gender(customerDTO.gender())
                .build();

        return customerRepository.save(customer);
    }

    public void delete(Integer id){
        customerRepository.deleteById(id);
    }

    public List<Customer> getAll(){
        return customerRepository.findAll();
    }

    public Customer update(CustomerDTO customerDTO , Integer id){
        Customer customer = this.getById(id);

        customer.setAge(customerDTO.age());
        customer.setName(customerDTO.name());
        customer.setSurname(customerDTO.surname());
        customer.setGender(customerDTO.gender());
        customer.setId(id);

       return customerRepository.save(customer);
    }

    public Customer getById(Integer id) {
        return customerRepository.findById(id).orElseThrow();
    }
}
