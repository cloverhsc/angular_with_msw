import { handlers } from './handler';
import { setupWorker } from 'msw';

export const worker = setupWorker(...handlers);
