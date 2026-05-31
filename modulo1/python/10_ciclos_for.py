print("Ciclo for")
print("ciclo basico")

for i in range(1,6):
    print(i)
frutas=["manzana", "banana", "naranja"]
for fruta in frutas:
    print(fruta)

print("control de interrupcion")
for i in range(1,10):
    if i==3:
        continue   ####se salta el numero 3 y continua con el siguiente numero
       
    if i==7:
         break        
    print(i)
else:
    print("Ciclo terminado ")


print("for con rango step")
for i in range(1, 10, 2):
    print(i)

print("for con rango regresiva")
for i in range(10, 0, -1):
    print(i)

print("for con enumerate")
nombres=["juan","luis","pedro","maria"]
for indice, nombre in enumerate(nombres):
    print(indice,nombre) 

print("for con zip")
edades=[25,30,35,40]
for nombre, edad in zip(nombres, edades):
    print(nombre, edad)

print("for anidados")
for i in range(1, 4):
    for x in range(1, 4):
        print(i,x)

cantidad=int(input("ingrese cantidad e notas:  "))
suma=0
for i in range(1,cantidad+1):
    nota=float(input(f" nota {i}: "))
    suma+=nota
promedio=suma/cantidad
print("Promedio: ", promedio)
if promedio >=7:
    print("Aprobado")
else:
    print("Reprobado")