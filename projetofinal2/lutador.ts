class Lutador {
	
	//ATRIBUTOS
	private nome  : string ;
	private nacionalidade : string;
	private idade : number;
	private altura : number;
	private peso!: number;
	private categoria!: string;
	private vitorias : number ; 
    private derrotas : number ;  
    private empates : number;
	private id_tecnico : number;
	//METODOS PUBLICOS
	
	
	
	public apresentar() : void {
		console.log("-------------------------------------------");
		console.log("CHEGOU A HORA!Apresentamos o lutador " + this.getNome());
		console.log("Diretamente da " + this.getNacionalidade());
		console.log("com " + this.getIdade() + "anos e " + this.getAltura() + " metros.");
		console.log("pesando " + this.getPeso() + "kg");
		console.log("com " + this.getVitorias() + " vitorias");
		console.log(this.getDerrotas() +  " derrotas e");
		console.log(this.getEmpates() + " empates ");
	}
	
	public status() : void {
		console.log(this.getNome() + " é peso " + this.getCategoria());
		console.log("Vitórias " + this.getVitorias() );
		console.log("Empates " + this.getEmpates() );
		console.log("Derrotas " + this.getDerrotas() );
	}
	
	public ganharLuta() : void {
		this.setVitorias(this.getVitorias() + 1);
	}
	
	public perderLuta() : void {
		this.setDerrotas(this.getDerrotas() + 1);
	}
	
	public empatarLuta() : void {
		this.setEmpates(this.getEmpates() + 1);
	}
	
	//METODOS ESPECIAIS 
	
	//public Lutador() {
	//}

    constructor(nome:string, nacionalidade : string, idade : number, altura : number, peso : number, vitorias : number , derrotas : number, empates: number, id_tecnico : number) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.idade = idade;
        this.altura = altura;
        this.setPeso(peso);
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.empates = empates;
        this.id_tecnico = id_tecnico;
    }
	
	/*public Lutador(String nome , String nacionalidade , int idade , float altura , float peso , int vitorias , int derrotas , int empates ) {
		
		this.nome = nome;
		this.nacionalidade = nacionalidade;
		this.idade = idade;
		this.altura = altura;
		this.setPeso(peso);
		this.vitorias = vitorias;
		this.derrotas = derrotas;
		
	} */

	public getNome(): string{
        return this.nome;
    }

	public  setNome(nome : string) : void {
		this.nome = nome;
	}

	public getNacionalidade(): string{
        return this.nacionalidade;
    }

	public setNacionalidade(nacionalidade : string): void{
		this.nacionalidade = nacionalidade;
	}

	public getIdade(): number{
        return this.idade;
    }

	public setIdade(idade : number) : void {
		this.idade = idade;
	}

	public  getAltura() : number {
		return this.altura;
	}

	public setAltura(altura : number) : void {
		this.altura = altura;
	}

	public getPeso() : number {
		return this.peso;
	}

	public  setPeso(peso : number) : void {
		this.peso= peso;
		this.setCategoria();
	}

	public getCategoria() : string {
		return this.categoria;
	}

	private setCategoria() : void {
		if (this.peso < 52.2) {
			this.categoria = "DESQUALIFICADO";
		} else if (this.peso <= 70.3) {
			this.categoria = "LEVE";
		} else if (this.peso <= 83.9) {
			this.categoria = "MEDIO";
		} else if (this.peso <= 120.2) {
			this.categoria = "PESADO";
		} else {
			this.categoria = "INVALIDO";
		}
	}

	public getVitorias() : number {
		return this.vitorias;
	}

	public setVitorias(vitorias : number) : void {
		this.vitorias = vitorias;
	}

	public getDerrotas() : number {
		return this.derrotas;
	}

	public  setDerrotas(derrotas : number) : void {
		this.derrotas = derrotas;
	}

	public  getEmpates() : number {
		return this.empates;
	}

	public  setEmpates (empates : number) : void {
		this.empates = empates;
	}
	
	public  getId_tecnico() : number {
		return this.id_tecnico;
	}

	public setId_tecnico(Id_tecnico : number) : void {
		this.id_tecnico = Id_tecnico;
	}
	
}
