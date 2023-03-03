import requests
import requests_cache
from bs4 import BeautifulSoup
import tldextract

requests_cache.install_cache('busca_cache')

def busca(palavra, url, depth, paginas_principais=[], paginas_secundarias=[], resultados=[]):
    # verifica se a url já foi visitada anteriormente
    if url in paginas_principais or url in paginas_secundarias:
        return

    # adiciona a url atual à lista de páginas visitadas
    domain = tldextract.extract(url).domain
    if domain == tldextract.extract(url_inicial).domain:
        paginas_principais.append(url)
    else:
        paginas_secundarias.append(url)

    # faz a requisição à página
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # procura pela palavra na página
    if palavra in soup.get_text():
        # armazena um trecho do texto contendo a palavra
        inicio = max(soup.get_text().find(palavra) - 50, 0)
        fim = min(soup.get_text().find(palavra) + 50, len(soup.get_text()))
        resultados.append((url, soup.get_text()[inicio:fim]))

    # busca recursiva nos links da página
    if depth > 0:
        for link in soup.find_all('a'):
            nova_url = link.get('href')
            if nova_url and not nova_url.startswith('#'):
                if not nova_url.startswith('http'):
                    nova_url = url + nova_url
                busca(palavra, nova_url, depth-1, paginas_principais, paginas_secundarias, resultados)

    # retorna as páginas visitadas, ordenando primeiro as páginas principais
    return paginas_principais + paginas_secundarias, resultados
