cadena_string="Hola", "Desde", "La", "UTE"
print(cadena_string)
print("Hola", "Desde", "La", "UTE" )
print("Hola", "Desde", "La", "UTE", sep="," )
print("Uno", "Dos", "Tres", "4" ,sep="-")
print("Uno", "Dos", "Tres", "4" , end="" )
print("Uno", "Dos", "Tres", "4" , sep=" - " )
print("Uno", "Dos", "Tres", "4" , end=" | " )

nombre= "Maria Ramos"
edad= 29
print(nombre,edad)
nombre_edad= f"{nombre} {edad}"
print(nombre_edad)
print(f"El nombre es : {nombre} y la edad es: {edad}")
print(f"Doble de {edad} es {edad*2}")
print(f"{'Maria':>15}")    # Alinea a la derecha con un ancho de 15 caracteres
pi=3.14159 
print(f"{pi:.2f}") # Muestra pi con 2 decimales
print(f"{pi:.5f}") # Muestra pi con 5 decimales
print(f"{1000000000:,}")
