package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryP;
	private final VentaRepository repositoryV;

	@Autowired
	public DatabaseLoader(
		 ProductoRepository repositoryP,
		 VentaRepository repositoryV){
		this.repositoryP = repositoryP;
		this.repositoryV = repositoryV;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Venta iCarne = new Venta(2);
		Venta iLacteos= new Venta(3);
		Venta iFrutas= new Venta(5);
		Venta iVerduras= new Venta(8);
		this.repositoryV.save(iCarne);
		this.repositoryV.save(iLacteos);
		this.repositoryV.save(iFrutas);
		this.repositoryV.save(iVerduras);

		Producto iRes = new Producto("Carne de Res",20.99);
		Producto iSandia = new Producto("Sandia",10.00);
		Producto iLeche = new Producto("leche pura vida",5.00);
		this.repositoryP.save(iRes);
		this.repositoryP.save(iSandia);
		this.repositoryP.save(iLeche);

	}

	
}