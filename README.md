# Proyecto Angular 17 con APIs

## Descripción

Este es un proyecto desarrollado con Angular 17 que utiliza varias APIs aparte de varios componentes utilizados en un proyecto de componentes en JS como el Login, el juego de Adivinanza y elementos del Window.

## Requisitos

- Node.js
- Angular 17

## Instalación

1. Clona el repositorio del proyecto:
```bash
git clone https://github.com/NxtZeus/Practica-Final-Angular.git
```
2. Navega hasta el directorio del proyecto:
```bash
cd <nombre_del_directorio_del_proyecto>
```
3. Instala las dependencias:
```bash
npm install
```

## Uso

1. Asegúrate de que el servidor Node.js está en funcionamiento, aquí está el servidor: 
https://github.com/NxtZeus/Practica-Final-Angular-servidor.git
2. Inicia la aplicación Angular:
```bash
ng serve
```
3. Abre un navegador y navega hasta `http://localhost:4200`.

## API

Este proyecto utiliza las siguientes APIs:

- API de Música: Devuelve la letra de una canción al indicarle el nombre y el autor de la misma. (Solo funciona con canciones en inglés).
- API de Países: Permite almacenar países con información sobre estos, es la base de datos almacenada en el servidor node.js de este repositorio: https://github.com/NxtZeus/Practica-Final-Angular-servidor.git
- API de Perros: Permite mostrar una cantidad de imágenes introducida por el usuario sobre perros.
- API de Clima: Permite conocer el clima en el momento, introduciendo un lugar.
