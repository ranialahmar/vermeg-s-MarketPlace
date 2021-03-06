package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.model.Comment;
import com.example.demo.model.Media;
import com.example.demo.model.Product;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.MediaRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping(value="/")
@CrossOrigin(value = {"*"},allowCredentials="true",allowedHeaders = {"*"},exposedHeaders = {"Content-Disposition"})
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;


    @Autowired
    private MediaRepository mediaRepository;




    @GetMapping(value = "/products")
    public List<Product> getAllProd() {

        return productRepository.findAll();
    }



    @GetMapping(value = "/product/{Prod_id}")
    @ResponseBody
    public ResponseEntity<Object> getProduct(@PathVariable Long Prod_id) {
        Product ProdL = productRepository.findProductById(Prod_id);


        if (ProdL != null) {
            return ResponseEntity.ok()
                    .body(ProdL);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product was not fount");
        }

    }




    @GetMapping(value ={ "/productcateg/{id}"})
    @ResponseBody
    public String getrod(@PathVariable Long id ) {
        Product pp=productRepository.findProductById(id);
        String category= pp.getCategory().getName();
        String file= pp.getMedia().getFilepath();

        return category;
       }
    @GetMapping(value ={ "/productfile/{id}"})
    @ResponseBody
    public String getProdFile(@PathVariable Long id ) {
        Product pp=productRepository.findProductById(id);

        String file= pp.getMedia().getFilepath();

        return file;
    }


    @GetMapping(value ={ "/product"})
    @ResponseBody
    public ResponseEntity<Object> getProd(@RequestParam Long Cat_id) {
        List<Product> prodcat = productRepository.findAll();
        List<Product> p = prodcat.stream().filter(prod -> prod.getCategory().getId() == Cat_id).collect(Collectors.toList());
        if(p!=null){
        return ResponseEntity.ok()
                .body(p);
    }  else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product was not fount");
    }}






    @PostMapping(value = "/product/{category_id}")
    public String AddProds(@RequestBody final Product product , @PathVariable  Long category_id) {

        Category category=categoryRepository.findCategoriesById(category_id);
       // Media mediaa=mediaRepository.findMediaById(file_id);
        if(category != null
                //&& mediaa != null
        ){
            product.setCategory(category);
            //product.setMedia(mediaa);
            productRepository.save(product);
            return "product added successfully ";
        }
       else{
            return "product not able to be added ";
        }



    }

    @DeleteMapping("/product/{idp}")
    public String delete(@PathVariable Long idp){
        Product prod = productRepository.findProductById(idp);
        productRepository.delete(prod);
        return "deleted";

    }


    @PutMapping(value = "/product/{id}")
    public ResponseEntity<Product> update( @RequestBody Product prod,@PathVariable Long id
                                          //@RequestParam Long media_id,
                                          //@PathVariable Long category_id
                                          ){
        Product product = productRepository.findProductById(id);
        //Category category =categoryRepository.findCategoriesById(category_id);
        //Media media=mediaRepository.findMediaById(media_id);
        product.setName(prod.getName());
       // product.setCategory(category);
        //product.setMedia(media);
        product.setDate_delivary(prod.getDate_delivary());
        product.setDescription(prod.getDescription());
        product.setDate_update(prod.getDate_update());
        productRepository.save(product);
        return ResponseEntity.ok(product);


    }

}






