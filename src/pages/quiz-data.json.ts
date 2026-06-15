import type { APIRoute } from 'astro';
import questions from '../data/quiz.json';

// Serves all quiz questions as a static JSON file fetched by the quiz page.
export const GET: APIRoute = async () =>
  new Response(JSON.stringify(questions), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
