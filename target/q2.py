num = int(input("Informe um número: "))
fib = [0, 1]

while fib[-1] < num: # adiciona um numero na lista fib  ate que ele seja maior ou igual ao numero mandado 2 
    fib.append(fib[-1] + fib[-2])

if num in fib:
    print("O número informado pertence à sequência de Fibonacci.")
else:
    print("O número informado não pertence à sequência de Fibonacci.")
