'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Event {
  id: number;
  event_name: string;
  discipline_name: string;
  start_date: string;
  end_date: string;
  venue_name: string;
  discipline_pictogram: string;
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events');
        if (!res.ok) {
          throw new Error('Erro ao buscar eventos');
        }
        const data = await res.json();
        setEvents(data.data);
      } catch (err) {
        setError('Erro ao buscar eventos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Eventos Olímpicos</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-semibold">{event.event_name}</h2>
            <p><strong>Disciplina:</strong> {event.discipline_name}</p>
            <p><strong>Início:</strong> {new Date(event.start_date).toLocaleString()}</p>
            <p><strong>Fim:</strong> {new Date(event.end_date).toLocaleString()}</p>
            <p><strong>Local:</strong> {event.venue_name}</p>
            {event.discipline_pictogram && (
              <Image
                src={event.discipline_pictogram}
                alt={event.discipline_name}
                width={50}
                height={50}
                className="mt-2"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
