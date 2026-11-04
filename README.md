# Notas de entrega, clientes e inventario — Manual

Sitio estático para GitHub Pages.

## Archivos del repositorio

- `index.html`: todo el sitio.
- `styles.css`: colores y diseño (azul marino y dorado del logo).
- `logo.png` y `favicon.png`: logo.
- `precios.json`: inventario.
- `facturas.json`: notas de entrega (se crea con el primer guardado final).
- `tasa.json`, `clientes.json`, `pedidos.json`: tasa BCV, clientes y pedidos (se crean con el guardado final).
- `plantilla-carga-productos.xlsx`: plantilla para cargar productos (opcional en el repositorio).

## La clave

La clave del panel se entrega por separado a las personas autorizadas (está en el manual de uso). No se escribe aquí porque este archivo es visible en el repositorio.

Se pide en tres momentos:

1. Para abrir el **Panel administrativo**.
2. Para ver la pestaña **Analítica**.
3. **Cada vez que se guarda o se borra un registro.** Aparece la pregunta **«¿Estás seguro de generar este cambio?»** con un resumen del cambio. Para confirmar, escribe la clave y pulsa el botón del cuadro. Si la clave es incorrecta, el cambio no se hace.

Esto aplica a: guardar o anular notas de entrega, marcar notas como cobradas, guardar inventario, borrar productos, guardar la tasa, guardar o borrar clientes, guardar, cambiar de estado o borrar pedidos, traer datos de GitHub y el guardado final.

Vaciar la nota en curso o el pedido en curso no pide clave, porque no borra nada guardado.

## Cómo se guardan los cambios: 3 pasos

| Paso | Qué haces | Dónde queda |
|---|---|---|
| **1. Cambia los datos** | Carga un Excel, edita un producto, escribe la tasa, registra una nota, un cliente o un pedido. | Solo en pantalla. |
| **2. Guardar** | Pulsa el botón de guardar del bloque (por ejemplo **Guardar inventario**) y confirma con la clave. | En este equipo. |
| **3. Guardado final** | Pulsa **Guardado final** y confirma con la clave. | En GitHub, visible para todos en 1–2 minutos. |

El bloque **Guardado final** indica qué falta por subir (por ejemplo: «Falta el guardado final de: inventario, notas de entrega»). Cuando está todo subido dice «Todo está en GitHub». La barra del panel también muestra **«Falta guardado final»** mientras haya cambios pendientes.

## Botones del panel administrativo

### Inventario desde Excel

| Botón | Qué hace |
|---|---|
| **Elegir archivo** | Selecciona el Excel con los productos. Muestra cuántos productos y qué columnas encontró. |
| **Reemplazar todo** / **Actualizar y agregar** | Elige si el Excel sustituye el inventario completo o solo actualiza por código y suma los nuevos. |
| **Omitir inactivos** | No carga los productos con estatus «Inactivo». |
| **Guardar inventario** | Guarda el Excel en el inventario (paso 2). Pide la clave. |
| **Cancelar** | Descarta el archivo elegido. |
| **Descargar plantilla** | Descarga un Excel con el formato correcto y el inventario actual, listo para editar. |

### Carga manual

| Botón / campo | Qué hace |
|---|---|
| **Producto** | «Producto nuevo» para agregar uno, o elige uno existente para editarlo. |
| Campos | SKU por unidad, código, unidad, línea, valor, precio de venta, stock e IVA %. |
| **Guardar inventario** | Guarda el producto (paso 2). Pide la clave. |
| **Limpiar** | Vacía el formulario. |
| **Borrar producto** | Borra el producto elegido. Pide la clave. Las notas ya guardadas no cambian. |
| **Editar en la tabla del catálogo** | Permite cambiar valor, precio de venta y stock directamente en la tabla. Los campos cambiados se marcan en dorado y **no se guardan hasta pulsar «Guardar inventario»**. **Descartar** deshace esos cambios. |

### Tasa BCV

| Botón | Qué hace |
|---|---|
| **Buscar tasa** | Consulta la tasa oficial en fuentes públicas y la escribe en el campo para que la revises. |
| **Guardar tasa** | Fija la tasa (paso 2). Pide la clave. Si la búsqueda falla, escribe la tasa a mano desde bcv.org.ve. |

### Guardado final

| Botón | Qué hace |
|---|---|
| **Guardado final** | Sube a GitHub todo lo pendiente (paso 3). Pide la clave. Antes de subir notas, clientes y pedidos, los combina con lo que ya hay en GitHub para no borrar lo que guardó otro equipo. |
| **Guardado final automático** | Si está marcado, el guardado final se hace solo después de cada cambio guardado. |

### Conexión con GitHub (se configura una vez)

| Botón | Qué hace |
|---|---|
| Campos | Usuario, repositorio, token y, si hace falta, rama y nombres de los archivos. |
| **Guardar conexión** | Guarda los datos de conexión. |
| **Probar** | Verifica que el token puede escribir en el repositorio. |
| **Traer de GitHub** | Reemplaza el inventario y la tasa de este equipo por los de GitHub y suma notas, clientes y pedidos. Úsalo al empezar el día en cada equipo. Pide la clave. |

Para crear el token: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens. Acceso solo a este repositorio, permiso **Contents: Read and write**. El token se borra al cerrar la pestaña; hay que escribirlo de nuevo en cada sesión.

### Respaldos

| Botón | Qué hace |
|---|---|
| **Descargar inventario** | Excel del inventario actual. |
| **Descargar notas** | Excel con las notas de entrega, su detalle y el desglose por producto. |
| **Volver a precios.json** | Restaura el inventario publicado y descarta los cambios de este equipo. Pide la clave. |
| **Cerrar sesión** | Cierra el panel. |

## Pestañas

- **Catálogo**: columna de líneas a la izquierda (se pueden marcar varias), búsqueda, y por producto: SKU por unidad, línea, valor, precio de venta y disponible. El botón **Ver nota** lleva a la nota en curso.
- **Nota de entrega**: emisión (fecha del día), vencimiento (7 días por defecto, editable), cliente (CI o RIF, teléfono, dirección corta) y, por renglón, SKU, cantidad y total venta con el precio de venta. **Guardar nota de entrega** pide la clave, guarda la nota y descuenta el inventario. Numeración NE-00001.
- **Clientes y pedidos**: clientes con nombre, CI o RIF, dirección corta y teléfono. Pedidos con cliente, fecha de entrega, productos y estado. **Pasar a nota** lleva el pedido a la nota de entrega; un pedido no descuenta inventario hasta entonces.
- **Registro de notas**: emisión, vencimiento, cliente, cantidad, total venta y estado (Por cobrar, Vencida, Cobrada, Anulada). **Marcar cobrada**, **Ver detalle** y **Anular** (este último solo con el panel abierto).
- **Analítica**: filtros por fechas, línea y cliente; cifras, venta por día o por mes y tablas por línea, cliente, SKU y notas pendientes de cobro.

## Plantilla de carga de productos

Hoja «inventario» con estos encabezados exactos: Codigo, SKU por unidad, Unidad, Stock, Valor, Precio de venta, Unidad de Negocio, Sublinea, Lineas, Modulo, estatus, Impuesto.

Obligatorias: SKU por unidad, Precio de venta y Lineas. Valor se usa para el margen en la analítica. Escribe el código como texto si empieza por cero (000423).

## Tasa BCV y convertidor

Debajo de las pestañas está la tasa vigente y un convertidor US$ ⇄ Bs. Cada nota guarda la tasa con la que se hizo. Si la tasa tiene más de 3 días, la barra se marca como desactualizada.

## Cambiar la clave

En la consola del navegador:

```js
crypto.subtle.digest('SHA-256', new TextEncoder().encode('NuevaClave')).then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,'0')).join('')))
```

Copia el resultado en `PASSWORD_HASH` dentro de `index.html`. Es una barrera básica: el código de una página estática es visible.

## Privacidad

Si el repositorio es público, cualquiera puede leer `clientes.json`, `facturas.json` y `precios.json` (incluido el valor de los productos). Para datos reales conviene un repositorio privado.
