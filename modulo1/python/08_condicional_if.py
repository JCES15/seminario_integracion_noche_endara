print("Condicionales IF")
print("if simple")

stock=3
if stock >0:
    print("Producto disponible")
    saldo=25
    if saldo >= 50:
        print("compra permitida")
    else:
        print("saldo insuficiente")
print("if multiples condiciones")
temperatura=32
if temperatura < 10:
    print("Hace frío")
elif temperatura < 25:
    print("Clima Templado")
else:
    print("Hace calor")

print("if condiciones anidadas")
conexion=True
Token_valido=False
if conexion:
   
    if Token_valido:
        print("Acceso a la API")
    else:
        print("Token inválido")
else:
    print("Sin conexión a la API")

print("if con operadores lógicos")
documento=True
pago=True
if documento and pago:
    print("Inscripcion confirmada")
es_vip=False
tiene_invitacion=True
if es_vip or tiene_invitacion:
    print("Puede entrar al evento")

bloqueado=False
if not bloqueado:
    print("Usuario habilitado")

