print("Ejercicio if")

a=input("tipo de usuario: gratis o premium? ")
b=input("¿ha pagado? ")    
if a=="gratis":
    print("Acceso limitado")

if a=="premium" and b=="si":
    print("Acceso completo")    
if a=="premium" and b!="si":
    print("Debe pagar")
if b=="si":
    print("Acceso completo")
