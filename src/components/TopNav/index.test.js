import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './index';
import innerRoutes from '../../utils/innerRoutes';

test('all links in TopNav go to correct URLs', () => {
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    const homeLink = screen.getByText(innerRoutes.HOME.label);
    const aboutLink = screen.getByText(innerRoutes.ABOUT.label);
    const servicesLink = screen.getByText(innerRoutes.SERVICES.label);
    const worksLink = screen.getByText(innerRoutes.WORKS.label);

    expect(homeLink.getAttribute('href')).toBe(innerRoutes.HOME.url);
    expect(aboutLink.getAttribute('href')).toBe(innerRoutes.ABOUT.url);
    expect(servicesLink.getAttribute('href')).toBe(innerRoutes.SERVICES.url);
    expect(worksLink.getAttribute('href')).toBe(innerRoutes.WORKS.url);
});
