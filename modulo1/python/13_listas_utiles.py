print("Manipulacion de listas")
print("Crear listas")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5]
print(numeros)
nombres=["juan","luis","pedro","maria"]
print(nombres)
mixta=[1,3,"hola",3.14,"world",True]
print(mixta)
anidada=[1,2,[3,4],5,5,[6,7,3, [8,9]]]
print(anidada)

print("acceso a los elementos de una lista")
print(numeros[1])
print(nombres[-1]) #ultimo elemento
print(nombres[1:3]) #desde el indice 1 hasta el indice 3 sin incluirlo
print(nombres[::-1]) #reversa

print("CRUD con listas")
frutas=["manzana", "banana", "naranja"]
print(frutas)
#agregar
frutas.insert(1,"pera")
print(frutas)
frutas.append("papaya")
print(frutas)
frutas.extend(["kiwi", "mango"])

#modificar
frutas[0]="toronja"
print(frutas)

#eliminar
frutas.remove("toronja")
print(frutas)
eliminado=frutas.pop()
print( eliminado)
eliminado=frutas.pop(2)
print(eliminado)
print(frutas)
del frutas[0]
print(frutas)


print("Buscar valores en los elementos de una lista")
print("banana" in frutas)
print(frutas.index("banana"))
print(frutas.count("banana"))

print("Ordenar listas")
numeros_desordenados=[5,2,9,1,3]
print(numeros_desordenados)
numeros_desordenados.sort()
print(numeros_desordenados)
numeros_desordenados.sort(reverse=True)
print(numeros_desordenados)
ordenar=sorted(numeros_desordenados)
print(ordenar)
print(numeros_desordenados)

