# Sistema RRHH usando match

print("=== SISTEMA DE RECURSOS HUMANOS ===")

nombre = input("Ingrese el nombre del empleado: ")
cargo = input("Ingrese el cargo (Gerente, Analista, Asistente, Practicante): ")

match cargo.lower():
    case "gerente":
        salario = 2500
        bono = 500
        print("\nCargo: Gerente")
        
    case "analista":
        salario = 1500
        bono = 300
        print("\nCargo: Analista")
        
    case "asistente":
        salario = 1000
        bono = 150
        print("\nCargo: Asistente")
        
    case "practicante":
        salario = 500
        bono = 50
        print("\nCargo: Practicante")
        
    case _:
        salario = 0
        bono = 0
        print("\nCargo no registrado")

total = salario + bono

print("\n===== REPORTE RRHH =====")
print("Empleado:", nombre)
print("Salario Base: $", salario)
print("Bono: $", bono)
print("Total a Recibir: $", total)