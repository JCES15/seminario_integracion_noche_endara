# =====================================
# SISTEMA DE RECURSOS HUMANOS
# =====================================

# Función para calcular el bono
def calcular_bono(salario):
    return salario * 0.10


# Función para calcular el salario total
def calcular_salario_total(salario):
    bono = calcular_bono(salario)
    return salario + bono


# Función para mostrar la información
def mostrar_empleado(nombre, cargo, salario):
    bono = calcular_bono(salario)
    total = calcular_salario_total(salario)

    print("\n===== REPORTE DEL EMPLEADO =====")
    print("Nombre:", nombre)
    print("Cargo:", cargo)
    print("Salario Base: $", salario)
    print("Bono: $", bono)
    print("Salario Total: $", total)


# Programa principal
print("=== SISTEMA RRHH ===")

nombre = input("Ingrese el nombre del empleado: ")
cargo = input("Ingrese el cargo: ")
salario = float(input("Ingrese el salario: "))

mostrar_empleado(nombre, cargo, salario)