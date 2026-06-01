# Clase Empleado

class Empleado:

    def __init__(self, nombre, cargo, salario):
        self.nombre = nombre
        self.cargo = cargo
        self.__salario = salario  # atributo privado

    # Getter
    def get_salario(self):
        return self.__salario

    # Setter
    def set_salario(self, nuevo_salario):

        if nuevo_salario > 0:
            self.__salario = nuevo_salario
        else:
            print("Error: El salario debe ser mayor que cero.")

    # Método para calcular bono
    def calcular_bono(self):
        return self.__salario * 0.10

    # Mostrar información
    def mostrar_info(self):

        print("\n===== DATOS DEL EMPLEADO =====")
        print("Nombre:", self.nombre)
        print("Cargo:", self.cargo)
        print("Salario: $", self.__salario)
        print("Bono: $", self.calcular_bono())


# Crear objeto
empleado1 = Empleado("Carlos Pérez", "Analista RRHH", 1200)

empleado1.mostrar_info()

# Modificar salario usando setter
empleado1.set_salario(1500)

print("\nDespués de actualizar salario:")

empleado1.mostrar_info()