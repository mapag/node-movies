# Movies

Proyecto de desarrollo personal, API ejemplo para portal de películas.

## Ejecución

### En servidor propio

Para implementar en producción, instalar paquete:

```
npm install
```

Y ejecutar el proceso

```
npm run start
```

### En servicio serverless (now/vercel)

Instalar paquete:

```
npm install
```

Y ejecutar el proceso

```
vercel
```

### Docker



```
docker run -p PORT:PORT -d prueba-api
```

## Estructura

La estructura del servidor, sigue los lineamientos de la arquitectura CLEAN, graficado en la siguiente imagen.

![Clean architecture API](https://github.com/mapag/node-movies/blob/master/utils/doc/clean.png?raw=true)

## Testing

> Coverage de 50%

```
npm install
```

Para generar un reporte del coverage de los tests

```
npm run report
```