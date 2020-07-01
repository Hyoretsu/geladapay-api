import { container } from 'tsyringe';

import IExampleProvider from './models/IExampleProvider';

import ExampleProvider from './implementations/ExampleProvider';

const providers = {
 example: ExampleProvider,
};

container.registerSingleton<IExampleProvider>('ExampleProvider', providers.example);
