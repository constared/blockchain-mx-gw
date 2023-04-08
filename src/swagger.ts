import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const initializeSwaggerFor = (app: INestApplication) => {

const swaggerConfig = new DocumentBuilder()
		.setTitle('DFMX')
		.setDescription('DFMX API')
		.setVersion('0.1')
		.build();

	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup('api', app, document);
}