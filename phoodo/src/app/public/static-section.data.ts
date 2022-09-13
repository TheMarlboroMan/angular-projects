import {StaticSectionModel} from './static-section.model';

export const static_texts={

	'acerca-de' : new StaticSectionModel('Acerca de', 'Acerca de Phoodo', 
`<p>Phoodo comienza a planearse a finales 2017 como una aplicación sencilla para retomar el contacto con la programación web.</p>
<p>Por motivos laborales pasa a cumplir dos funciones: ser útil para su propósito y server como herramienta de aprendizaje tecnológico.</p>
<p>¡El futuro de Phoodo es brillante!</p>`),
	'tecnologia' : new StaticSectionModel('Tecnología', 'Tecnología de Phoodo',
`<p>Aunque es una mala idea desvelar el funcionamiento interno de la aplicación, todo el código de Phoodo está disponible en github, de modo que no tiene sentido guardar secretos.</p>
<p>Phoodo usa la siguiente tecnología:</p>
<ul>
	<li>Angular 4 para el frontend.</li>
	<li>Javascript para algunos módulos personalizados.</li>
	<li>CSS3 para presentación.</li>
	<li>PHP para backend y API.</li>
	<li>MySQL como base de datos.</li>
</ul>
`),

	'aviso-legal' : new StaticSectionModel('Aviso Legal', 'Aviso Legal de Phoodo', 
`<p>Meh</p>
`),

	'proteccion-de-datos' : new StaticSectionModel('Protección de datos', 'Protección de datos', 
`<p>Meh</p>
`),

	'politica-de-cookies' : new StaticSectionModel('Política de Cookies', 'Política de Cookies de Phoodo', 
`<p>Meh</p>
`),
};

