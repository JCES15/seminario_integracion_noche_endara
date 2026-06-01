nombre = "Carlos Pérez"
desempeno = 90
anios_empresa = 4

if desempeno >= 80 and anios_empresa >= 3:
    print("Empleado apto para bono.")
else:
    print("Empleado no apto para bono.")
    
######################
cargo = "Analista"
anios_empresa = 6

if cargo == "Gerente" or anios_empresa > 5:
    print("Puede acceder a capacitación.")
else:
    print("No cumple los requisitos.")
    ############################################
activo = True

if not activo:
    print("Empleado inactivo.")
else:
    print("Empleado activo.")