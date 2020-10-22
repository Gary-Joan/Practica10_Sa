### PRACTICA 11
Proxy inverso

En la siguiente practica se tomara el todos los microservicios de las demas practicas para poder hacer un despligue total del software usando DOCKER COMPOSE y tambien el uso de un proxy inverso el cual no ayuda redireccionar los servicios a travez de un mismo puerto
# USO DE LA APLICACION
```
>>> git clone https://github.com/Gary-Joan/Practica10_sa.git  //clonar repositorio

```
```
>>> docker-compose up                                       //levantar el servicio
```
2. Ver aplicacion
Utilizando el servicio de proxy hacemos que los servicios ahora trabajen bajo un mis puerto y no en diferentes puertos como se tenia inicialmente
```
>>> http://localhost/repartidor                                       //pagina repatidor para ver ordenes listas
>>> http://localhost/restaurante                                       //pagina restaurante para ver los pedidos entrantes 
>>> http://localhost/cliente                                       //servicio de cliente para enviar pedidos
```

# VIDEO
[Practica 11](https://youtu.be/OmNEYmZSW6U)

