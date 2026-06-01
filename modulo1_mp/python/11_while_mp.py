# Sistema de Recursos Humanos

print("=== REGISTRO DE EMPLEADOS ===")

continuar = "si"

while continuar.lower() == "si":

    nombre = input("\nIngrese el nombre del empleado: ")
    cargo = input("Ingrese el cargo: ")
    salario = float(input("Ingrese el salario: "))

    print("\n--- EMPLEADO REGISTRADO ---")
    print("Nombre:", nombre)
    print("Cargo:", cargo)
    print("Salario: $", salario)

    continuar = input("\n¿Desea registrar otro empleado? (si/no): ")

print("\nSistema finalizado.")