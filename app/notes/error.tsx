'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <p>Could not fetch the list of notes. {error.message}</p>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}

// Для перевірки коректної роботи error.tsx можна штучно створити помилку за допомогою: throw new Error('Error message');

// Наприклад, тимчасово додайте цей код у компонент сторінки /notes або /notes/[id] та переконайтеся, що користувачу відображається fallback-інтерфейс помилки.
