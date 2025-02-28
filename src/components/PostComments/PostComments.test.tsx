import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentarios ao post', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Primeiro comentário adicionado'
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentario'));

        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Segundo comentário adicionado'
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentario'))

        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    })
});