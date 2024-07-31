import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
    },
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['first_name', 'last_name', 'email', 'date_of_birth', 'accept_terms_of_service'],
          properties: {
            id: {
              type: 'integer',
              readOnly: true,
            },
            first_name: {
              type: 'string',
            },
            last_name: {
              type: 'string',
            },
            email: {
              type: 'string',
              format: 'email',
            },
            date_of_birth: {
              type: 'string',
              format: 'date',
            },
            accept_terms_of_service: {
              type: 'boolean',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // Rutas de los archivos donde se encuentran los comentarios de Swagger
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
