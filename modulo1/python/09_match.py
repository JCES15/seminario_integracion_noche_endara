print("match - case")
comando = input("Comando iniciar/parar/reiniciar :")
match comando:
    case "iniciar": 
        print("El sistema se ha iniciado...")  
    case "parar":
        print("El sistema se ha detenido...")
    case "reiniciar":
        print("El sistema se ha reiniciado...")
    case _:
        print(f"Comando {comando} no valido")

        print("match - con Condiciones")
numero = int(input("Incluya numero :"))
match numero:
    case n if n<0:
        print(f"{n} es un numero negativo")
    case 0:
        print("El numero es cero")
    case n if n%2==0:
        print(f"el numero {n} es un numero positivo y par")
    case n:
        print(f"el numero {n} es un numero positivo e impar")   