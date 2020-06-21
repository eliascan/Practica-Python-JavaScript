'''
Esta practica nos permite extraer y luego agrupar objetos a partir 
de un archivo o un objeto JSON o de en diccionario, lo diferente de 
esta estructura es que las claves(keys) son los nombres de las frutas 
y verduras y los valores(values) son los tipos.
'''
datos = {
	'Mango': 'fruta',
	'Papa': 'verdura',
	'Zanahoria': 'verdura',
	'Banana': 'fruta',
	'Naranja': 'fruta',
	'Yuca': 'verdura',
	'Remolacha': 'verdura',
	'Manzana': 'fruta'
}

def agrupar_por_tipo(dt):
    lista_fruta = []
    lista_verudra = []
    for x, y in datos.items():
        if y == 'fruta':
            lista_fruta.append(x)
        if y == 'verdura':
            lista_verudra.append(x)
    return {'fruta':lista_fruta, 'verdura':lista_verudra}

print(agrupar_por_tipo(datos))