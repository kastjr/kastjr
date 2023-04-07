from MVC.dal.dal import PessoaDal
from MVC.model.pessoa import Pessoa


class PessoaController:
    @classmethod
    def Cadastrar (cls, nome , idade, cpf):
        if len(nome) > 8 and (idade > 18 and idade < 200) and len(cpf) == 11:
            try:
                PessoaDal.salvar(Pessoa(nome,idade,cpf))
                return True
            except:
                return False