# Clase Empleado

class Empleado:

    # Constructor
    def __init__(self, nombre, cargo, salario):
        self.nombre = nombre
        self.cargo = cargo
        self.salario = salario

    # Método para calcular bono
    def calcular_bono(self):
        return self.salario * 0.10

    # Método para calcular salario total
    def salario_total(self):
        return self.salario + self.calcular_bono()

    # Método para mostrar información
    def mostrar_info(self):
        print("\n===== DATOS DEL EMPLEADO =====")
        print("Nombre:", self.nombre)
        print("Cargo:", self.cargo)
        print("Salario Base: $", self.salario)
        print("Bono: $", self.calcular_bono())
        print("Salario Total: $", self.salario_total())


# Programa principal

nombre = input("Ingrese el nombre del empleado: ")
cargo = input("Ingrese el cargo: ")
salario = float(input("Ingrese el salario: "))

# Crear objeto
empleado1 = Empleado(nombre, cargo, salario)

# Mostrar información
empleado1.mostrar_info()