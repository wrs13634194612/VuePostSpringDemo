package com.exam.dao;



import com.exam.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface IClienteDao extends JpaRepository<Cliente, Long> {


}
