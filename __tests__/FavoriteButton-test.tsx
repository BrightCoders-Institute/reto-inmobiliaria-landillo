import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FavoriteButton } from '../src/components/FavoriteButton';

    describe('FavoriteButton', () => {
        test('should render the button correctly', () => {
          const { getByTestId } = render(<FavoriteButton />);
          const button = getByTestId('favorite-button');
      
          expect(button).toBeDefined();
        });

        test('should toggle the favorite state when clicked', () => {
            const { getByTestId } = render(<FavoriteButton />);
            const button = getByTestId('viewButton');
            
            expect(button.props.style[0].backgroundColor).toBe('green');
        });

        test('should toggle the favorite state when clicked', () => {
            const { getByTestId } = render(<FavoriteButton />);
            const button = getByTestId('viewButton');
            
            fireEvent.press(button);
            
            expect(button.props.style[1].backgroundColor).toBe('red');
        });
      });

