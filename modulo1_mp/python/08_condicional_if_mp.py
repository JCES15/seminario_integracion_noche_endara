# Sistema de Evaluación de Empleados - RRHH

print("=== SISTEMA DE RECURSOS HUMANOS ===")

nombre = input("Ingrese el nombre del empleado: ")
cargo = input("Ingrese el cargo: ")
salario = float(input("Ingrese el salario base: "))
calificacion = int(input("Ingrese la calificación de desempeño (0-100): "))

bono = 0

# Evaluación del desempeño
if calificacion >= 90:
    bono = salario * 0.20
    categoria = "Excelente"
elif calificacion >= 80:
    bono = salario * 0.15
    categoria = "Muy Bueno"
elif calificacion >= 70:
    bono = salario * 0.10
    categoria = "Bueno"
elif calificacion >= 60:
    bono = salario * 0.05
    categoria = "Regular"
else:
    bono = 0
    categoria = "Necesita Mejorar"

# Cálculo de salario final
salario_total = salario + bono

# Mostrar resultados
print("\n===== REPORTE DE EVALUACIÓN =====")
print("Empleado:", nombre)
print("Cargo:", cargo)
print("Salario Base: $", salario)
print("Calificación:", calificacion)
print("Categoría:", categoria)
print("Bono: $", round(bono, 2))
print("Salario Total: $", round(salario_total, 2))

# Mensaje adicional usando if
if salario_total >= 1500:
    print("Estado: Empleado con remuneración alta.")
else:
    print("Estado: Remuneración estándar.")