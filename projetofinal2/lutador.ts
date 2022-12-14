public class Lutador {
	
	//ATRIBUTOS
	private nome  : string ;
	private nacionalidade : String;
	private idade : number;
	private altura : number;
	private peso : number;
	private categoria : string;
	private vitorias : number ; 
    private derrotas : number ;  
    private empates : number;
	
	//METODOS PUBLICOS
	
	
	
	public apresentar() : void {
		System.out.println("-------------------------------------------");
		System.out.println("CHEGOU A HORA!Apresentamos o lutador " + this.getNome());
		System.out.println("Diretamente da " + this.getNacionalidade());
		System.out.println("com " + this.getIdade() + "anos e " + this.getAltura() + " metros.");
		System.out.println("pesando " + this.getPeso() + "kg");
		System.out.println("com " + this.getVitorias() + " vitorias");
		System.out.println(this.getDerrotas() +  " derrotas e");
		System.out.println(this.getEmpates() + " empates ");
	}
	
	public status() : void {
		System.out.println(this.getNome() + " é peso " + this.getCategoria());
		System.out.println("Vitórias " + this.getVitorias() );
		System.out.println("Empates " + this.getEmpates() );
		System.out.println("Derrotas " + this.getDerrotas() );
	}
	
	public void ganharLuta() {
		this.setVitorias(this.getVitorias() + 1);
	}
	
	public void perderLuta() {
		this.setDerrotas(this.getDerrotas() + 1);
	}
	
	public void empatarLuta( ) {
		this.setEmpates(this.getEmpates() + 1);
	}
	
	//METODOS ESPECIAIS 
	
	//public Lutador() {
	//}
	
	public Lutador(String nome , String nacionalidade , int idade , float altura , float peso , int vitorias , int derrotas , int empates ) {
		
		this.nome = nome;
		this.nacionalidade = nacionalidade;
		this.idade = idade;
		this.altura = altura;
		this.setPeso(peso);
		this.vitorias = vitorias;
		this.derrotas = derrotas;
		
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNacionalidade() {
		return nacionalidade;
	}

	public void setNacionalidade(String nacionalidade) {
		this.nacionalidade = nacionalidade;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public float getAltura() {
		return altura;
	}

	public void setAltura(float altura) {
		this.altura = altura;
	}

	public float getPeso() {
		return peso;
	}

	public void setPeso(float peso) {
		this.peso = peso;
		this.setCategoria();
	}

	public String getCategoria() {
		return categoria;
	}

	private void setCategoria() {
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

	public int getVitorias() {
		return vitorias;
	}

	public void setVitorias(int vitorias) {
		this.vitorias = vitorias;
	}

	public int getDerrotas() {
		return derrotas;
	}

	public void setDerrotas(int derrotas) {
		this.derrotas = derrotas;
	}

	public int getEmpates() {
		return empates;
	}

	public void setEmpates(int empates) {
		this.empates = empates;
	}
	
	
	
}