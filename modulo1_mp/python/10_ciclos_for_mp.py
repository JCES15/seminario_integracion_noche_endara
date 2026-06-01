print("=== CÁLCULO DE NÓMINA ===")

total_nomina = 0

for i in range(1, 3):
    print(f"\nEmpleado #{i}")

    nombre = input("Nombre: ")
    salario = float(input("Salario: "))

    total_nomina += salario

    print(f"{nombre} tiene un salario de ${salario}")

print("\n======================")
print("Total nómina: $", total_nomina)