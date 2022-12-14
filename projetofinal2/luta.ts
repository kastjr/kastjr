//package UltraEmojiCombat;

//import java.util.Random;

class Luta {
	//Atributos
	
    private desafiado : Lutador;
	private desafiante : Lutador;
	private rounds : number;
    private aprovada : boolean;

    constructor(desafiado : Lutador , desafiante : Lutador , rounds : number , aprovada : boolean) {
        this.desafiado = desafiado;
        this.desafiante = desafiante;
        this.rounds = rounds;
        this.aprovada = aprovada;
    }
	
	
	//Metodos
	
	public marcarLuta(l1 : Lutador, l2 : Lutador) : void {
		if ((l1.getCategoria() == l2.getCategoria()) &&l1 !=l2) {
			this.aprovada  = true;
			
			this.desafiado =  l1;
			
			this.desafiante = l2;
			
		} else {

			this.aprovada = false;
			//this.desafiado = null;
			//this.desafiante = null;
		}
	}
	
	public lutar() : void {
		if (this.aprovada) {
			console.log("## DESAFIADO ##");
			this.desafiado.apresentar();
			console.log("## DESAFIANTE ##");
			this.desafiante.apresentar();
			
			Random aleatorio = new Random();
			int vencedor = aleatorio.nextInt(3);// 0 1 2
			switch(vencedor){
			case 0:
				console.log("EMPATOU");
				this.desafiado.empatarLuta();
				this.desafiante.empatarLuta();
				break;
			case 1:
				console.log("VENCEU " + this.desafiado.getNome());
				this.desafiado.ganharLuta();
				this.desafiante.perderLuta();
				break;
			case 2:
				console.log("VENCEU " + this.desafiante.getNome());
				this.desafiado.perderLuta();;
				this.desafiante.ganharLuta();;
				break;
			}
		} else {
	     console.log("A luta não pode acontecer!");
		}
	}

	//Metodos especiais
	
	public  getDesafiado() : Lutador {
		return this.desafiado;
	}

	public setDesafiado(desafiado : Lutador) : void {
		this.desafiado = desafiado;
	}

	public getDesafiante() : Lutador  {
		return this.desafiante;
	}

	public setDesafiante( desafiante : Lutador): void{
		this.desafiante = desafiante;
	}

	public getRounds():number {
		return this.rounds;
	}

	public setRounds(rounds:number) : void {
		this.rounds = rounds;
	}

	public isAprovada() : boolean {
		return this.aprovada;
	}

	public setAprovada (aprovada : boolean) : void {
		this.aprovada = aprovada;
	}
	
	
	
	
	
}
