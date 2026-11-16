import NoteDetailsClient from './NoteDetails.client';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function NoteDetails({ params }: NoteDetailsProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.query({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </div>
  );
}
