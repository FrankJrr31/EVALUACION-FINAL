package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryP;
	private final CategoriaRepository repositoryC;

	@Autowired
	public DatabaseLoader(
		 ProductoRepository repositoryP,
		 CategoriaRepository repositoryC){
		this.repositoryP = repositoryP;
		this.repositoryC = repositoryC;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Categoria iCarne = new Categoria("Carne");
		Categoria iLacteos= new Categoria("Lacteos");
		Categoria iFrutas= new Categoria("Fruta");
		Categoria iVerduras= new Categoria("Verduras");
		this.repositoryC.save(iCarne);
		this.repositoryC.save(iLacteos);
		this.repositoryC.save(iFrutas);
		this.repositoryC.save(iVerduras);

		Producto iRes = new Producto("Carne de Res",20.99,50,iCarne);
		Producto iSandia = new Producto("Sandia",10.00,50,iFrutas);
		Producto iLeche = new Producto("leche pura vida",5.00,100,iLacteos);
		this.repositoryP.save(iRes);
		this.repositoryP.save(iSandia);
		this.repositoryP.save(iLeche);

	}

	
}