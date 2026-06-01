# Clase Padre
class Empleado:

    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario

    def calcular_bono(self):
        pass


# Clase Hija: Gerente
class Gerente(Empleado):

    def calcular_bono(self):
        return self.salario * 0.20


# Clase Hija: Analista
class Analista(Empleado):

    def calcular_bono(self):
        return self.salario * 0.10


# Clase Hija: Asistente
class Asistente(Empleado):

    def calcular_bono(self):
        return self.salario * 0.05


# Lista de empleados
empleados = [
    Gerente("Ana López", 2500),
    Analista("Carlos Pérez", 1500),
    Asistente("María Gómez", 1000)
]

# Polimorfismo
print("===== REPORTE DE BONOS =====")

for empleado in empleados:
    print(
        f"Empleado: {empleado.nombre} | "
        f"Bono: ${empleado.calcular_bono():.2f}"
    )