CREATE SCHEMA base;

USE base;

CREATE TABLE Users(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR (150) NOT NULL,
password VARCHAR (200) NOT NULL,
foto_de_perfil VARCHAR (600),
fecha DATE NOT NULL,
DNI INT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED NOT NULL,
nombre_producto VARCHAR(500) NOT NULL,
descripcion TEXT NOT NULL,

FOREIGN KEY (user_id) REFERENCES users(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
productos_id INT UNSIGNED NOT NULL,
user_id INT UNSIGNED NOT NULL,
comentario TEXT NOT NULL,

FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (productos_id) REFERENCES productos(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

INSERT INTO users
VALUES (default, "m@gmail.com","contra1","fotoPerfil1","2020-02-10",45891051,DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users
VALUES (default, "c@gmail.com","contra2","fotoPerfil2","2022-04-16",35305789,DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users
VALUES (default, "v@gmail.com","contra3","fotoPerfil3","2019-08-19",48601789,DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users
VALUES (default, "l@gmail.com","contra4","fotoPerfil4","2007-06-27",41621679,DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users
VALUES (default, "k@gmail.com","contra5","fotoPerfil5","2010-09-21",43607959,DEFAULT, DEFAULT, DEFAULT);


INSERT INTO productos
VALUES(default,1,"Rolex Oyster Perpetual Cosmograph Daytona","Reloj icónico por excelencia, el Oyster Perpetual Cosmograph Daytona se ha consolidado mucho más allá de los circuitos automovilísticos por su estética emblemática y su desempeño superlativo. Con ocasión de los 60 años del modelo, Rolex perpetúa el mito de su cronógrafo revisitando toda la gama. Un trabajo de gran precisión que se centra tanto en la caja como en el movimiento. Todos estos cambios y evoluciones nos recuerdan que la búsqueda de la excelencia es una carrera que no conoce fin.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,2,"Rolex Perpetual 1908","Elegante, clásico e incuestionablemente contemporáneo, el Perpetual 1908 es una prolongación de la intrepidez original de Rolex. Al heredar los códigos históricos de la marca y sus innumerables innovaciones en relojería, el reloj marca un nuevo hito en la búsqueda de la excelencia de la marca. El diseño y la creación de este nuevo modelo ponen de manifiesto el dominio interno de todo el savoir‑faire necesario de la Manufactura. Inspirado en un Oyster Perpetual de 1931, este modelo completamente nuevo responde al desafío de un reloj más fino según los cánones de Rolex y anuncia la llegada de la colección Perpetual, que redefine el reloj de pulsera tradicional en el espíritu vanguardista de la marca. El nombre «1908» hace referencia al año en que se registró oficialmente la marca en Suiza. Una promesa de rendimiento superlativo, el 1908 se impone como un Rolex que reivindica su clasicismo al tiempo que su modernidad.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,3,"Oyster Perpetual Yacht Master 42","Ligero y robusto, el nuevo Oyster Perpetual Yacht‑Master 42 de titanio RLX se consolida como aliado de quienes buscan la libertad de movimiento. Especialmente adaptado a las exigencias y limitaciones de la vela deportiva, pone la excelencia al servicio del rendimiento. El Yacht‑Master 42, segundo reloj propuesto por Rolex en titanio RLX tras el Oyster Perpetual Deepsea Challenge, demuestra que la ligereza es un asunto serio.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,4,"GMT Master II","El GMT‑Master II, que permite a su usuario monitorizar la hora en otro huso horario, ilumina nuestros vínculos con el mundo. Está disponible ahora en dos nuevas versiones —oro amarillo de 18 quilates y Rolesor amarillo— con un disco Cerachrom de cerámica gris y negra, una combinación de colores nunca vista. La elección de materiales, la precisión de los acabados y la excelencia del savoir‑faire han permitido sublimar la materia para que libere mejor la luz. El armonioso contraste entre el brillo dorado del brazalete Jubilee y el bisel bicolor en tonos oscuros y sobrios evoca tanto el curso del sol como la alternancia del día y la noche.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,5,"Oyster Perpetual Day Date 36","Los nuevos Oyster Perpetual Day‑Date 36 presentan esferas en piedras ornamentales cuyas tonalidades tornasoladas evocan la atmósfera de las costas mediterráneas. La venturina verde, la cornalina y la turquesa se asocian respectivamente con las modalidades en oro Everose, amarillo o blanco de 18 quilates. Expresión de la excelencia del savoir‑faire de la manufactura en materia de esferas, estos nuevos Day‑Date 36 atestiguan asimismo el perfecto dominio del arte del engaste. Esta asociación entre piedras excepcionales, gemas y metales preciosos acentúa la distinción y la elegancia de este prestigioso modelo.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,1,"ECB-950DB-2A","Obtenga conectividad con su teléfono inteligente y mucho más en un reloj EDIFICE de combinación analógica-digital, diseñado para proyectar velocidad e inteligencia. El diseño atrevido y sofisticado cuenta con un marco octogonal que evoca las líneas de las herramientas de un mecánico de carrera. Más que un simple diseño llamativo, este reloj ofrece una funcionalidad completa para que pueda obtener toda la información que necesita en las manecillas y la pantalla LCD de fácil lectura. Sincronícelo con su smartphone mediante Bluetooth® para obtener mayor precisión de la indicación de la hora, dondequiera que vaya. Solo presione la aplicación para administrar fácilmente las funciones, como la selección de una ciudad en la lista de hora mundial. El dial de inserción grande en la posición de las 4 cuenta con un indicador que muestra las velocidades promedio cuando se cronometran las vueltas para las distancias establecidas. La luz LED completamente automática ilumina el dial y la pantalla LCD con tan solo una inclinación de la muñeca. Tough Solar carga el reloj con luz solar o incluso con la luz de una lámpara fluorescente.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,2,"ECB-950DB-1A","Obtenga conectividad con su teléfono inteligente y mucho más en un reloj EDIFICE de combinación analógica-digital, diseñado para proyectar velocidad e inteligencia. El diseño atrevido y sofisticado cuenta con un marco octogonal que evoca las líneas de las herramientas de un mecánico de carrera. Más que un simple diseño llamativo, este reloj ofrece una funcionalidad completa para que pueda obtener toda la información que necesita en las manecillas y la pantalla LCD de fácil lectura. Sincronícelo con su smartphone mediante Bluetooth® para obtener mayor precisión de la indicación de la hora, dondequiera que vaya. Solo presione la aplicación para administrar fácilmente las funciones, como la selección de una ciudad en la lista de hora mundial. El dial de inserción grande en la posición de las 4 cuenta con un indicador que muestra las velocidades promedio cuando se cronometran las vueltas para las distancias establecidas. La luz LED completamente automática ilumina el dial y la pantalla LCD con tan solo una inclinación de la muñeca. Tough Solar carga el reloj con luz solar o incluso con la luz de una lámpara fluorescente.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,3,"ECB-900MDC-1A","Dele la bienvenida al EDIFICE analógico-digital con funcionalidad para smartphone completa. Presentamos el éxito comercial internacional con carcasa y correa con baño de iones de color gris para proporcionar un tratamiento monocromático que mantiene el enfoque en la velocidad, la inteligencia y el diseño potente. Sincronícelo con su smartphone a través de Bluetooth® para lograr una indicación de la hora precisa y al instante, dondequiera que vaya. Solo presione la aplicación para administrar fácilmente las funciones, como la lista de más de 300 ciudades para la hora mundial. El dial de inserción grande en la posición de las 4 muestra las velocidades promedio cuando se cronometran las vueltas para las distancias establecidas. La luz LED completamente automática ilumina el dial y la pantalla LCD con tan solo una inclinación de la muñeca, lo que garantiza una gran visibilidad, incluso en la oscuridad.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,4,"MTP-B130L-2AV","Ande elegante y con estilo, todo el tiempo o en ocasiones: los relojes analógicos le permiten ver el funcionamiento interno detrás del dial. Con resistencia al agua de hasta 50 metros, no tendrá que preocuparse de nada, ya sea que esté en la calle bajo la lluvia o en la casa lavando.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos
VALUES(default,5,"GM-114GEM-1A9","Trace su propio rumbo con un reloj G-SHOCK de edición limitada del 40.º aniversario de Adventurers Stone. Únase a nosotros para celebrar el 40.º aniversario del G-SHOCK eligiendo uno de estos espectaculares relojes con diseño metálico, inspirados por las piedras que los aventureros han usado para navegar desde la antigüedad. Los colores especiales de los minerales que los antiguos marinos utilizaban para encontrar su rumbo se reproducen en estos diseños de reloj con procesos de forjado, baño de iones y enmascarado, lo que otorga a cada marco metálico un aspecto único. Las correas están fabricadas con resina coloreada o translúcida y tienen una textura única con técnicas de estampado en caliente y moldeado en color de Garal. Estos relojes de edición limitada honran el 40.º aniversario del G-SHOCK de principio a fin: la frase “SINCE 1983” (Desde 1983) aparece en el dial; el logotipo del 40.º aniversario diseñado por Eric Haze está grabado en la parte posterior de la carcasa y hay cuatro estrellas por el 40.º aniversario en el sujetador de la correa.", DEFAULT, DEFAULT, DEFAULT);



INSERT INTO comentarios
VALUES (default,1,1,"Que producto maravilloso!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,1,2,"muy caros", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,1,3,"aguante river loco", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,1,4,"hay modelos para perros?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,2,1,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,2,2,"Gracias por hacerle tan buen nombre a los reljoes @Rolex", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,2,3,"malisimos, no los compren", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,2,4,"Los mejores relojes del mercado!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,3,1,"Increible la pagina!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,3,2,"que lindos relojes!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,3,3,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,3,4,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,4,1,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,4,2,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,4,3,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,4,4,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,5,1,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,5,2,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,5,3,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,5,4,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,6,1,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,6,2,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,6,3,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,6,4,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,7,1,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,7,2,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,7,3,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,7,4,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,8,1,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,8,2,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,8,3,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,8,4,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,9,1,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,9,2,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,9,3,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,9,4,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,10,1,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,10,2,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,10,3,"gran producto!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios
VALUES (default,10,4,"gran producto!", DEFAULT, DEFAULT, DEFAULT);

ALTER TABLE Users
ADD nombreUsuario VARCHAR (255);

ALTER TABLE comentarios
ADD usuario_comentario VARCHAR (255);

ALTER TABLE comentarios
DROP usuario_comentario;

ALTER TABLE productos
ADD fecha_carga DATE;

ALTER TABLE productos
ADD createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE productos
ADD updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE productos
ADD deletedAt TIMESTAMP NULL;

ALTER TABLE users
ADD createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE users
ADD updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE users
ADD deletedAt TIMESTAMP NULL;

ALTER TABLE comentarios
ADD createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE comentarios
ADD updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE comentarios
ADD deletedAt TIMESTAMP NULL;

ALTER TABLE productos
ADD descripcion_corta TEXT NOT NULL;

ALTER TABLE productos
ADD imagenes TEXT NOT NULL;

UPDATE productos
SET descripcion_corta= "Reloj icónico por excelencia."
WHERE id=1;

UPDATE productos
SET descripcion_corta= "Elegante, clásico e incuestionablemente contemporáneo."
WHERE id=2;

UPDATE productos
SET descripcion_corta= "Ligero y robusto, el nuevo Oyster Perpetual Yacht-Master."
WHERE id=3;

UPDATE productos
SET descripcion_corta= "El GMT-Master II ilumina nuestros vínculos con el mundo."
WHERE id=4;

UPDATE productos
SET descripcion_corta= "Los nuevos Oyster Perpetual Day-Date 36 evocan la atmósfera de las costas."
WHERE id=5;

UPDATE productos
SET descripcion_corta= "Obtenga conectividad con su teléfono inteligente y mucho más."
WHERE id=6;

UPDATE productos
SET descripcion_corta= "Obtenga conectividad con su teléfono inteligente y mucho más."
WHERE id=7;

UPDATE productos
SET descripcion_corta= "Dele la bienvenida al EDIFICE analógico-digital"
WHERE id=8;

UPDATE productos
SET descripcion_corta= "Ande elegante y con estilo todo el tiempo."
WHERE id=9;

UPDATE productos
SET descripcion_corta= "Trace su propio rumbo con un reloj G-SHOCK edición limitada."
WHERE id=10;

UPDATE productos
SET imagenes= "images/products/rolex-1.jpg"
WHERE id=1;

UPDATE productos
SET imagenes= "images/products/rolex-2.jpg"
WHERE id=2;

UPDATE productos
SET imagenes= "images/products/rolex-3.jpg"
WHERE id=3;

UPDATE productos
SET imagenes= "images/products/rolex-4.jpg"
WHERE id=4;

UPDATE productos
SET imagenes= "images/products/rolex-5.jpg"
WHERE id=5;

UPDATE productos
SET imagenes= "images/products/casio-1.jpg"
WHERE id=6;

UPDATE productos
SET imagenes= "images/products/casio-2.jpg"
WHERE id=7;

UPDATE productos
SET imagenes= "images/products/casio-3.jpg"
WHERE id=8;

UPDATE productos
SET imagenes= "images/products/casio-4.jpg"
WHERE id=9;

UPDATE productos
SET imagenes= "images/products/casio-5.jpg"
WHERE id=10;

ALTER TABLE productos
DROP fecha_carga;