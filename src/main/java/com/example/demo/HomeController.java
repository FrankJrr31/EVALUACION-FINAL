package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path="/api/categorias/{id}/formacion")
	public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT producto.id as ID, categoria.nombre as CATEGORIA FROM producto JOIN categoria ON producto.id_categoria = categoria.id  WHERE id_categoria = ?";
		List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

}