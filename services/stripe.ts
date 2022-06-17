import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2020-03-02',
        appInfo: {
            name: 'ig-news',
            version: '1.0.0'
        }
    }
)