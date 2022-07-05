
# Instrucciones


Ejecutar ./start.sh para levantar todo el entorno

Debes logearte con el username
luego cada que pase un minuto se te otorgara un credito.


- los creditos pueden ser usados cuando quieras.
- cada vez que uses un credito se te descontara de tu Total general

NOTA: Cada que te logues con cualquier usuario la base de datos de tu usuario sera reiniciada para evitar numeros negativos debido a la nueva fecha de login

Caracteristicas extras

- el sistame tiene autentificacion por JWT y middlewares que controlan el acceso.
- El sistema de modelos que utilize esta planteado con sequelized
- Se utiizaron las librerias de moment y jwt
- se integro un cliente aparte en "angular" solo apra poder probar el backend en el docker tambien se levanta ese proyecto en el puerto 4200 (lo hice muy simple para mostrar el funcionamiento del api)