import type { ElysiaSwaggerConfig } from "@elysiajs/swagger";

export const swaggerConfig: ElysiaSwaggerConfig<'/docs'> = {
    path: '/docs',
    documentation: {
        info: {
            title: 'TechFinance API',
            version: '1.0',
            description: 'TechFinance é uma solução mobile para para prover informações para apoio para tomada de decisões.',
        },
        servers: [
            {
                url: 'https://techfinance.fly.dev',
            },
            {
                url: 'http://localhost:8080',
            }
        ],
    },
}
