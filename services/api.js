import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://abbbadrtzyvchzayvnrf.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiYmJhZHJ0enl2Y2h6YXl2bnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MDEwODksImV4cCI6MjA1NzM3NzA4OX0.j9aYrCgkajXkj52lUG0tNwuRiYu0Qwyz2K5djw8EoGE",
        //authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiYmJhZHJ0enl2Y2h6YXl2bnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MDEwODksImV4cCI6MjA1NzM3NzA4OX0.j9aYrCgkajXkj52lUG0tNwuRiYu0Qwyz2K5djw8EoGE"
    }
});
