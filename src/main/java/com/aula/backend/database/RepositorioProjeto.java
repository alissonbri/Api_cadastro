package com.aula.backend.database;

import com.aula.backend.entidade.Projeto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioProjeto extends JpaRepository<Projeto, Long> {



}
