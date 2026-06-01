# Clase Padre
class Empleado:

    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario

    def mostrar_info(self):
        print("\n===== EMPLEADO =====")
        print("Nombre:", self.nombre)
        print("Salario: $", self.salario)


# Clase Hija: Gerente
class Gerente(Empleado):

    def __init__(self, nombre, salario, departamento):
        super().__init__(nombre, salario)
        self.departamento = departamento

    def mostrar_info(self):
        print("\n===== GERENTE =====")
        print("Nombre:", self.nombre)
        print("Salario: $", self.salario)
        print("Departamento:", self.departamento)


# Clase Hija: Analista
class Analista(Empleado):

    def __init__(self, nombre, salario, area):
        super().__init__(nombre, salario)
        self.area = area

    def mostrar_info(self):
        print("\n===== ANALISTA =====")
        print("Nombre:", self.nombre)
        print("Salario: $", self.salario)
        print("Área:", self.area)


# Crear objetos
gerente = Gerente("Ana López", 2500, "Recursos Humanos")
analista = Analista("Carlos Pérez", 1200, "Selección de Personal")

# Mostrar información
gerente.mostrar_info()
analista.mostrar_info()