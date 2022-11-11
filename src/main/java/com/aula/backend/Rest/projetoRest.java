package com.aula.backend.Rest;

import com.aula.backend.database.RepositorioProjeto;
import com.aula.backend.entidade.Projeto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projeto")
public class projetoRest {

    @Autowired
    private RepositorioProjeto repositorioProjeto;

    @PostMapping
    public void salvar(@RequestBody Projeto projeto) {
        repositorioProjeto.save(projeto);
    }

    @GetMapping
    public List<Projeto> listar() {
        return repositorioProjeto.findAll();
    }

}
