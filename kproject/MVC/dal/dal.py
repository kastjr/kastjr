from MVC.model.pessoa import Pessoa

class PessoaDal:
    @classmethod
    def salvar(cls, pessoa: Pessoa):
        with open('pesssoa.txt', 'w') as arq:
            arq.writ(pessoa.nome + "" + pessoa.idade + "" + pessoa.cpf)

    @classmethod
    def ler(self):

        return Pessoa