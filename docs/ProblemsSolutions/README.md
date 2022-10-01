
Pagina que use para solucionar mi problema de como saber que ip tiene el de docker contenedor que estoy usando

https://hevodata.com/learn/docker-postgresql/

Como se usa:
```
docker inspect <Docker Container>
```
Yo uso este porque mi docker asi se llama.
```
docker inspect postgres 
```
Este es el que sugiere el articulo me da error no solo por  nombre los campos del json no los tengo bien escritos.
```
docker inspect postgresql -f “{{json .NetworkSettings.Networks }}”
```
Deberia de funcionarme
```
docker inspect postgres -f “{{json .NetworkSettings.Networks }}”
```
EUREKA este me SOLUCIONO MIS PROBLEMAS ESE DIA
Yo uso este porque mi docker asi se llama.
```
docker inspect postgres 
```
![](./dockernetworksettings.pngdockernetworksettings.png)
