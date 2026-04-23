print("funciones en python")
print("funcion Basica")
def saludar():
    print("Hola, desde la UTE")
saludar()
print("funciones con parametro")
def saludarConNombre(nombre):
    print(f"Hola: {nombre}, Que tal?")

saludarConNombre("Juan")
saludarConNombre("Maria")

print("funcion que devuelva valor con return")
def sumar(a,b):
    return a+b
print(sumar (5,4))

print("funcion por posicion y por nombre")
def presentar(nombre, edad, ciudad):
    print(f"Señor(a): {nombre}, edad: {edad}, ciudad: {ciudad}")
presentar("Luis", 30, "Quito")
presentar("Maria", 26, "guayaquil")
presentar(ciudad="Cuenca", nombre="Pedro", edad=35)

print("funcion parametros con valor por defecto")
def saludo_con_valores(nombre, saludo="Hola", puntuacion= "!"):
    print(saludo, nombre, puntuacion)
    ##saludo_con_valores("Juan", "Buenas noches","...")
##saludo_con_valores("Pedro", puntuacion="...")
saludo_con_valores("Carlos", "Buenas Tardes")

print("funcion con nparametros posicionesles")
def sumar_todos(*args):
    print(f"parametros recibidos {args}")
    return sum(args)
print(sumar_todos(1,2,3))
print(sumar_todos(5,10,15,20))
print(sumar_todos(2,4,6,8,10))

print("funcion parametros combinados con posiciones")
def mostrar_info(titulo, *datos):
    print(f"Parametros recibidos:  {datos},{titulo}")
    print(titulo)
    for dato in datos:
        print(f"- {dato} ")
print(mostrar_info("Frutas", "naranja", "manzana", "banana"))

print("funciones parametros clave valor variable")
def crear_perfil(**kwargs):
    print(f"Parametros recibidos: {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave} - {valor}")
crear_perfil(nombre="Juan", apellido="Paris",edad=30, ciudad="Punto Fijo")


print("funcion parametros combinados con todos los tipos")
def configurar(host, *puertos, debug=False, **opciones):
    print(f"Configuracion")
    print(f"Host: {host}")
    print(f"Puertos: {puertos}")
    print(f"Debug: {debug}")
    print(f"Opciones: {opciones}")
    

configurar("localhost", 80, 443,8080,  debug=True,  timeout=30, ssl=True)

print("Devolver multiples valores")
def minmax(numeros):
    return min(numeros), max(numeros)

minimo,maximo=minmax([3,23,45654,3.2,3.45])
print("minimo: ", minimo, "maximo: ", maximo)







      
      
      
      
      