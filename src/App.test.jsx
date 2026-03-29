import './test/i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).not.toBeNull();
  });

  it('has a main landmark', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays the site title as an h1', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'buffingchi'
    );
  });

  it('displays subtitle text', () => {
    render(<App />);
    expect(screen.getByText('Our projects')).toBeInTheDocument();
  });

  it('renders navigation landmark', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders all three nav links', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /Games/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /BookshelfAI/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /RulersAI/i })).toBeInTheDocument();
  });

  it('Games link points to correct subdomain', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /Games/i })).toHaveAttribute(
      'href',
      'https://games.buffingchi.com'
    );
  });

  it('BookshelfAI link points to correct subdomain', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /BookshelfAI/i })).toHaveAttribute(
      'href',
      'https://bookshelfai.buffingchi.com'
    );
  });

  it('RulersAI link points to correct subdomain', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /RulersAI/i })).toHaveAttribute(
      'href',
      'https://rulersai.buffingchi.com'
    );
  });
});
