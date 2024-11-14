import { Elysia } from 'elysia';
import { env } from '../config/env';
import { CustomerService } from '../services/customer.service';
import { PaymentService } from '../services/payment.service';
import { ProductService } from '../services/product.service';

const routes = new Elysia();

routes.guard({
    beforeHandle({ headers }) {
        const { authorization = '' } = headers;
        if (authorization !== `Bearer ${env.AUTHORIZATION}`) {
            return { status: 401, message: 'Unauthorized' };
        }
    },
});

routes.get('/produtos', ({ query }) => {
    const productService = new ProductService();
    return productService.getProducts(query);
});

routes.get('/clientes', ({ query }) => {
    const customerService = new CustomerService();
    return customerService.getCustomers(query);
});

routes.get('/resumo_contas_receber', () => {
    const paymentService = new PaymentService();
    return paymentService.summary();
})

routes.get('/contas_receber_ai', ({ query }) =>{
    const paymentService = new PaymentService();
    return paymentService.summaryAI(query);
})

export default routes;
