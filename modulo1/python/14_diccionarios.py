print("Diccionarios")
print("Crear Diccionarios")
vacio={}
persona={"nombre":"Juan", "edad":30, "ciudad":"Quito"}
config=dict(host="localhost", puerto=8080)

#acceso
print(persona["nombre"])
#modificar
persona["nombre"]="Carlos"
print(persona)
del persona["edad"]
print(persona)
#verificar exitencia 
print("nombre" in persona)
print("ciudad" in persona)

#metodos esenciales
print(persona.keys())
print(persona.values())
print(persona.items())

#iterar
for clave, valor in persona.items():
    print(f"clave: {clave}, valor: {valor}")
    