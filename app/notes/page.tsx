import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, ""],
    queryFn: () => fetchNotes(1, ""),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}

// import css from './NotesPage.module.css';
// import { useState, useEffect } from 'react';
// import { useQuery, keepPreviousData } from '@tanstack/react-query';
// import { Toaster, toast } from 'react-hot-toast';
// import { useDebouncedCallback } from 'use-debounce';

// import SearchBox from '@/components/SearchBox/SearchBox';
// // import Loader from '@/components/Loader/Loader';
// import Pagination from '@/components/Pagination/Pagination';
// import NoteList from '@/components/NoteList/NoteList';
// import Modal from '@/components/Modal/Modal';
// import NoteForm from '@/components/NoteForm/NoteForm';
// // import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

// export default function Notes() {
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const { data, isSuccess } = useQuery({
//     queryKey: ['notes', page, search],
//     queryFn: () => fetchNotes(page, search),
//     placeholderData: keepPreviousData,
//   });

//   useEffect(() => {
//     if (isSuccess && data.notes.length === 0) {
//       toast.error('Nothing found');
//     }
//   }, [isSuccess, data]);

//   const handleSearch = useDebouncedCallback((search: string) => {
//     setSearch(search);
//     setPage(1);
//   }, 1000);

//   function handlePageChange(page: number) {
//     setPage(page);
//   }

//   function closeModalHandler() {
//     setIsModalOpen(false);
//   }

//   return (
//     <div className={css.app}>
//       <Toaster />
//       {isSuccess && <header className={css.toolbar}>
//         <SearchBox search={search} onSearch={handleSearch} />
//         {/* {isError && <ErrorMessage />} */}
//         {/* {isLoading && <Loader />} */}
//         {isSuccess && data.totalPages > 1 && (
//           <Pagination
//             pageCount={data.totalPages}
//             pageRangeDisplayed={5}
//             marginPagesDisplayed={1}
//             onPageChange={handlePageChange}
//             forcePage={page}
//             containerClassName={css.pagination}
//             activeClassName={css.active}
//             nextLabel="→"
//             previousLabel="←"
//           />
//         )}
//         <button
//           className={css.button}
//           onClick={() => {
//             setIsModalOpen(true);
//           }}
//         >
//           Create note +
//         </button>
//       </header>}
//       {isSuccess && data.notes.length > 0 && <NoteList notes={data.notes} />}
//       {isModalOpen && (
//         <Modal onClose={closeModalHandler}>
//           <NoteForm onClose={closeModalHandler} />
//         </Modal>
//       )}
//     </div>
//   );
// }
