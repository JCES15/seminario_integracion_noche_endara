# Datos del empleado

nombre = "Carlos Pérez"
salario = 1000
horas_extra = 10
valor_hora = 5

# Operadores aritméticos

# Suma (+)
bono_horas = horas_extra * valor_hora
salario_bruto = salario + bono_horas

# Multiplicación (*)
iess = salario * 0.0945

# Resta (-)
salario_neto = salario_bruto - iess

# División (/)
promedio_diario = salario / 30

# División entera (//)
dias_completos = salario // 30

# Módulo (%)
residuo = salario % 30

print("=== ROL DE PAGO RRHH ===")
print("Empleado:", nombre)
print("Salario Base: $", salario)
print("Bono Horas Extra: $", bono_horas)
print("Salario Bruto: $", salario_bruto)
print("Descuento IESS: $", round(iess, 2))
print("Salario Neto: $", round(salario_neto, 2))
print("Promedio Diario: $", round(promedio_diario, 2))
print("División Entera:", dias_completos)
print("Residuo:", residuo)