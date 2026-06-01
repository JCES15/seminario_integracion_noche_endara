from abc import ABC, abstractmethod

# Clase abstracta
class Empleado(ABC):

    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario

    @abstractmethod
    def calcular_bono(self):
        pass

    def mostrar_info(self):
        print("\n===== EMPLEADO =====")
        print("Nombre:", self.nombre)
        print("Salario Base: $", self.salario)
        print("Bono: $", self.calcular_bono())
        print("Total: $", self.salario + self.calcular_bono())


# Clase hija: Empleado Fijo
class EmpleadoFijo(Empleado):

    def calcular_bono(self):
        return self.salario * 0.20


# Clase hija: Empleado Temporal
class EmpleadoTemporal(Empleado):

    def calcular_bono(self):
        return self.salario * 0.10


# Programa principal

empleado1 = EmpleadoFijo("Carlos Pérez", 1500)
empleado2 = EmpleadoTemporal("Ana López", 1200)

empleado1.mostrar_info()
empleado2.mostrar_info()