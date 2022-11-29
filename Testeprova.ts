class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}
/*
let p : Pessoa = new Pessoa("ely");
console.log(p.nome);
*/

class Conta {
    numero: string;
    saldo: number;
    cliente: Pessoa;

    constructor(numero: string, saldo: number, cliente: Pessoa) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    get nomeCliente() {
        return this.cliente.nome;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero && 
                this.cliente.nome == conta.cliente.nome);
    }
}

class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {}
    alterar(conta: Conta): void {}
    excluir(numero: string): void{}
    //consultar(numero: string): Conta {}

    sacar(numero: string, valor: number): void {}
    depositar(numero: string, valor: number): void {}
    transfeir(numeroOrigem: string, numeroDestino: String, valor: number): void {}
}
