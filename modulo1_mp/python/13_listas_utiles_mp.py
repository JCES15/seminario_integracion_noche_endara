# Lista de empleados

empleados = [
    "Carlos Pérez",
    "Ana López",
    "Luis Torres",
    "María Gómez"
]

print("=== LISTA DE EMPLEADOS ===")

for empleado in empleados:
    print(empleado)
    
    #####################################
    empleados = []

cantidad = int(input("¿Cuántos empleados desea registrar?: "))

for i in range(cantidad):
    nombre = input(f"Ingrese el nombre del empleado #{i+1}: ")
    empleados.append(nombre)

print("\n=== EMPLEADOS REGISTRADOS ===")

for empleado in empleados:
    print(empleado)