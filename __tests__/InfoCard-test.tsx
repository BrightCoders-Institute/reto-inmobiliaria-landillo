import React from 'react';
import { render } from '@testing-library/react-native'
import  { InfoCard }  from '../src/components/InfoCard';

describe('tests in InfoCard', () => {
    const property = {
      id: 1,
      name: 'Example Property',
      address: '123 Example Street',
      bedrooms: 2,
      bathrooms: 2,
      area: 1000,
      monthlyRent: 1500,
      rating: 4,
      imageUrl: 'https://example.com/image.png',
    };
    test('renders name property', () => {

    const { getByText } = render(<InfoCard property={property} />)
    expect(getByText('Example Property')).toBeDefined();
    });
    test('renders address property', () => {
        const { getByText } = render(<InfoCard property={property} />)
        expect(getByText('123 Example Street')).toBeDefined();
    });
    test('renders area property', () => {
        const { getByText } = render(<InfoCard property={property} />)
        expect(getByText('1000 ft²')).toBeDefined();
        expect(getByText('123 Example Street')).toBeDefined();
    });

    test('renders monthlyRent property', () => {
        const { getByText } = render(<InfoCard property={property} />)
        expect(getByText('$1500/m')).toBeDefined();
    });
    test('renders rating property', () => {
        const { getByText } = render(<InfoCard property={property} />)
        expect(getByText('4')).toBeDefined();
    });
});